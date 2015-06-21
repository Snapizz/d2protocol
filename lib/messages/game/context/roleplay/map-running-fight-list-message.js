var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var FightExternalInformations = require('../../../../types/game/context/fight/fight-external-informations.js').class;

var MapRunningFightListMessage = function() {
    this.fights = [];
};

require('util').inherits(MapRunningFightListMessage, d2com.NetworkMessage.class);

MapRunningFightListMessage.prototype.serialize = function(output) {
    this.serializeAs_MapRunningFightListMessage(output);
};

MapRunningFightListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MapRunningFightListMessage(input);
};

MapRunningFightListMessage.prototype.serializeAs_MapRunningFightListMessage = function(param1) {
    param1.writeShort(this.fights.length);
    var _loc2_ = 0;
    while (_loc2_ < this.fights.length) {
        (this.fights[_loc2_]).serializeAs_FightExternalInformations(param1);
        _loc2_++;
    }
};

MapRunningFightListMessage.prototype.deserializeAs_MapRunningFightListMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new FightExternalInformations();
        _loc4_.deserialize(param1);
        this.fights.push(_loc4_);
        _loc3_++;
    }
};

MapRunningFightListMessage.prototype.getMessageId = function() {
    return 5743;
};

MapRunningFightListMessage.prototype.getClassName = function() {
    return 'MapRunningFightListMessage';
};

module.exports.id = 5743;
module.exports.class = MapRunningFightListMessage;
module.exports.getInstance = function() {
    return new MapRunningFightListMessage;
};