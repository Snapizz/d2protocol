var DungeonPartyFinderPlayer = function() {
    this.playerId = 0;
    this.playerName = "";
    this.breed = 0;
    this.sex = false;
    this.level = 0;
};

module.exports = function() {
    return new DungeonPartyFinderPlayer();
};

DungeonPartyFinderPlayer.prototype.serialize = function(output) {
    this.serializeAs_DungeonPartyFinderPlayer(output);
};

DungeonPartyFinderPlayer.prototype.deserialize = function(input) {
    this.deserializeAs_DungeonPartyFinderPlayer(input);
};

DungeonPartyFinderPlayer.prototype.serializeAs_DungeonPartyFinderPlayer = function(param1) {
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
        param1.writeVarInt(this.playerId);
        param1.writeUTF(this.playerName);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);
        if (this.level < 0 || this.level > 255) {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        } else {
            param1.writeByte(this.level);
            return;
        }
    }
};

DungeonPartyFinderPlayer.prototype.deserializeAs_DungeonPartyFinderPlayer = function(param1) {
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element of DungeonPartyFinderPlayer.playerId.");
    } else {
        this.playerName = param1.readUTF();
        this.breed = param1.readByte();
        if (this.breed < PlayableBreedEnum.Feca || this.breed > PlayableBreedEnum.Eliotrope) {
            throw new Error("Forbidden value (" + this.breed + ") on element of DungeonPartyFinderPlayer.breed.");
        } else {
            this.sex = param1.readBoolean();
            this.level = param1.readUnsignedByte();
            if (this.level < 0 || this.level > 255) {
                throw new Error("Forbidden value (" + this.level + ") on element of DungeonPartyFinderPlayer.level.");
            } else {
                return;
            }
        }
    }
};

DungeonPartyFinderPlayer.prototype.getTypeId = function() {
    return 373;
};

DungeonPartyFinderPlayer.prototype.getClassName = function() {
    return 'DungeonPartyFinderPlayer';
};

module.exports.id = 373;
module.exports.DungeonPartyFinderPlayer = DungeonPartyFinderPlayer;