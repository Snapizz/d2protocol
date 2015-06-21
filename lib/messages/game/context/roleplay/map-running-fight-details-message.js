var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var GameFightFighterLightInformations = require('../../../../types/game/context/fight/game-fight-fighter-light-informations.js').class;

var MapRunningFightDetailsMessage = function() {
    this.fightId = 0;
    this.attackers = [];
    this.defenders = [];
};

require('util').inherits(MapRunningFightDetailsMessage, d2com.NetworkMessage.class);

MapRunningFightDetailsMessage.prototype.serialize = function(output) {
    this.serializeAs_MapRunningFightDetailsMessage(output);
};

MapRunningFightDetailsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MapRunningFightDetailsMessage(input);
};

MapRunningFightDetailsMessage.prototype.serializeAs_MapRunningFightDetailsMessage = function(param1) {
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
    } else {
        param1.writeInt(this.fightId);
        param1.writeShort(this.attackers.length);
        var _loc2_ = 0;
        while (_loc2_ < this.attackers.length) {
            param1.writeShort((this.attackers[_loc2_]).getTypeId());
            (this.attackers[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.defenders.length);
        var _loc3_ = 0;
        while (_loc3_ < this.defenders.length) {
            param1.writeShort((this.defenders[_loc3_]).getTypeId());
            (this.defenders[_loc3_]).serialize(param1);
            _loc3_++;
        }
        return;
    }
};

MapRunningFightDetailsMessage.prototype.deserializeAs_MapRunningFightDetailsMessage = function(param1) {
    var _loc6_ = 0;
    var _loc7_ = null;
    var _loc8_ = 0;
    var _loc9_ = null;
    this.fightId = param1.readInt();
    if (this.fightId < 0) {
        throw new Error("Forbidden value (" + this.fightId + ") on element of MapRunningFightDetailsMessage.fightId.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(GameFightFighterLightInformations, _loc6_);
            _loc7_.deserialize(param1);
            this.attackers.push(_loc7_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = param1.readUnsignedShort();
            _loc9_ = ProtocolTypeManager.getInstance(GameFightFighterLightInformations, _loc8_);
            _loc9_.deserialize(param1);
            this.defenders.push(_loc9_);
            _loc5_++;
        }
        return;
    }
};

MapRunningFightDetailsMessage.prototype.getMessageId = function() {
    return 5751;
};

MapRunningFightDetailsMessage.prototype.getClassName = function() {
    return 'MapRunningFightDetailsMessage';
};

module.exports.id = 5751;
module.exports.class = MapRunningFightDetailsMessage;
module.exports.getInstance = function() {
    return new MapRunningFightDetailsMessage;
};