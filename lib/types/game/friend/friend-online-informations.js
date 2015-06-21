var FriendOnlineInformations = function() {
    this.playerId = 0;
    this.playerName = "";
    this.level = 0;
    this.alignmentSide = 0;
    this.breed = 0;
    this.sex = false;
    this.guildInfo = new BasicGuildInformations();
    this.moodSmileyId = 0;
    this.status = new PlayerStatus();
};

require('util').inherits(FriendOnlineInformations, require('./friend-informations.js').class);

FriendOnlineInformations.prototype.serialize = function(output) {
    this.serializeAs_FriendOnlineInformations(output);
};

FriendOnlineInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FriendOnlineInformations(input);
};

FriendOnlineInformations.prototype.serializeAs_FriendOnlineInformations = function(param1) {
    this.serializeAs_FriendInformations(param1);
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
        if (this.level < 0 || this.level > 200) {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        } else {
            param1.writeByte(this.level);
            param1.writeByte(this.alignmentSide);
            param1.writeByte(this.breed);
            param1.writeBoolean(this.sex);
            this.guildInfo.serializeAs_BasicGuildInformations(param1);
            param1.writeByte(this.moodSmileyId);
            param1.writeShort(this.status.getTypeId());
            this.status.serialize(param1);
            return;
        }
    }
};

FriendOnlineInformations.prototype.deserializeAs_FriendOnlineInformations = function(param1) {
    this.deserializeAs_FriendInformations(param1);
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element of FriendOnlineInformations.playerId.");
    } else {
        this.playerName = param1.readUTF();
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 200) {
            throw new Error("Forbidden value (" + this.level + ") on element of FriendOnlineInformations.level.");
        } else {
            this.alignmentSide = param1.readByte();
            this.breed = param1.readByte();
            if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
                throw new Error("Forbidden value (" + this.breed + ") on element of FriendOnlineInformations.breed.");
            } else {
                this.sex = param1.readBoolean();
                this.guildInfo = new BasicGuildInformations();
                this.guildInfo.deserialize(param1);
                this.moodSmileyId = param1.readByte();
                var _loc2_ = param1.readUnsignedShort();
                this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
                this.status.deserialize(param1);
                return;
            }
        }
    }
};

FriendOnlineInformations.prototype.getTypeId = function() {
    return 92;
};

FriendOnlineInformations.prototype.getClassName = function() {
    return 'FriendOnlineInformations';
};

module.exports.id = 92;
module.exports.class = FriendOnlineInformations;
module.exports.getInstance = function() {
    return new FriendOnlineInformations;
};