var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var DungeonPartyFinderRegisterRequestMessage = function() {
    this.dungeonIds = [];
};

require('util').inherits(DungeonPartyFinderRegisterRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new DungeonPartyFinderRegisterRequestMessage();
};

DungeonPartyFinderRegisterRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_DungeonPartyFinderRegisterRequestMessage(output);
};

DungeonPartyFinderRegisterRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_DungeonPartyFinderRegisterRequestMessage(input);
};

DungeonPartyFinderRegisterRequestMessage.prototype.serializeAs_DungeonPartyFinderRegisterRequestMessage = function(param1) {
    param1.writeShort(this.dungeonIds.length);
    var _loc2_ = 0;
    while (_loc2_ < this.dungeonIds.length) {
        if (this.dungeonIds[_loc2_] < 0) {
            throw new Error("Forbidden value (" + this.dungeonIds[_loc2_] + ") on element 1 (starting at 1) of dungeonIds.");
        } else {
            param1.writeVarShort(this.dungeonIds[_loc2_]);
            _loc2_++;
            continue;
        }
    }
};

DungeonPartyFinderRegisterRequestMessage.prototype.deserializeAs_DungeonPartyFinderRegisterRequestMessage = function(param1) {
    var _loc4_ = 0;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readVarUhShort();
        if (_loc4_ < 0) {
            throw new Error("Forbidden value (" + _loc4_ + ") on elements of dungeonIds.");
        } else {
            this.dungeonIds.push(_loc4_);
            _loc3_++;
            continue;
        }
    }
};

DungeonPartyFinderRegisterRequestMessage.prototype.getMessageId = function() {
    return 6249;
};

DungeonPartyFinderRegisterRequestMessage.prototype.getClassName = function() {
    return 'DungeonPartyFinderRegisterRequestMessage';
};

module.exports.id = 6249;
module.exports.DungeonPartyFinderRegisterRequestMessage = DungeonPartyFinderRegisterRequestMessage;