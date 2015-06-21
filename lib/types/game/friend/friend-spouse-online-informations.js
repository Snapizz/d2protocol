var FriendSpouseOnlineInformations = module.exports = function() {
    this.mapId = 0;
    this.subAreaId = 0;
    this.inFight = false;
    this.followSpouse = false;

    return this;
};

require('util').inherits(FriendSpouseOnlineInformations, require('./friend-spouse-informations.js'));

FriendSpouseOnlineInformations.prototype.serialize = function(output) {
    this.serializeAs_FriendSpouseOnlineInformations(output);
};

FriendSpouseOnlineInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FriendSpouseOnlineInformations(input);
};

FriendSpouseOnlineInformations.prototype.serializeAs_FriendSpouseOnlineInformations = function(param1) {
    this.serializeAs_FriendSpouseInformations(param1);
    var _loc2_ = 0;
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 0, this.inFight);
    _loc2_ = BooleanByteWrapper.setFlag(_loc2_, 1, this.followSpouse);
    param1.writeByte(_loc2_);
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
    } else {
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
        } else {
            param1.writeVarShort(this.subAreaId);
            return;
        }
    }
};

FriendSpouseOnlineInformations.prototype.deserializeAs_FriendSpouseOnlineInformations = function(param1) {
    this.deserializeAs_FriendSpouseInformations(param1);
    var _loc2_ = param1.readByte();
    this.inFight = BooleanByteWrapper.getFlag(_loc2_, 0);
    this.followSpouse = BooleanByteWrapper.getFlag(_loc2_, 1);
    this.mapId = param1.readInt();
    if (this.mapId < 0) {
        throw new Error("Forbidden value (" + this.mapId + ") on element of FriendSpouseOnlineInformations.mapId.");
    } else {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error("Forbidden value (" + this.subAreaId + ") on element of FriendSpouseOnlineInformations.subAreaId.");
        } else {
            return;
        }
    }
};

FriendSpouseOnlineInformations.prototype.getTypeId = function() {
    return 93;
};

FriendSpouseOnlineInformations.prototype.getClassName = function() {
    return 'FriendSpouseOnlineInformations';
};

module.exports.id = 93;