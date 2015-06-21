var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var MapObstacle = require('../../../../types/game/interactive/map-obstacle.js').MapObstacle;

var MapObstacleUpdateMessage = function() {
    this.obstacles = [];
};

require('util').inherits(MapObstacleUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new MapObstacleUpdateMessage();
};

MapObstacleUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_MapObstacleUpdateMessage(output);
};

MapObstacleUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_MapObstacleUpdateMessage(input);
};

MapObstacleUpdateMessage.prototype.serializeAs_MapObstacleUpdateMessage = function(param1) {
    param1.writeShort(this.obstacles.length);
    var _loc2_ = 0;
    while (_loc2_ < this.obstacles.length) {
        (this.obstacles[_loc2_]).serializeAs_MapObstacle(param1);
        _loc2_++;
    }
};

MapObstacleUpdateMessage.prototype.deserializeAs_MapObstacleUpdateMessage = function(param1) {
    var _loc4_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = new MapObstacle();
        _loc4_.deserialize(param1);
        this.obstacles.push(_loc4_);
        _loc3_++;
    }
};

MapObstacleUpdateMessage.prototype.getMessageId = function() {
    return 6051;
};

MapObstacleUpdateMessage.prototype.getClassName = function() {
    return 'MapObstacleUpdateMessage';
};

module.exports.id = 6051;
module.exports.MapObstacleUpdateMessage = MapObstacleUpdateMessage;