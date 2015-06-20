var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapObstacleUpdateMessage = function() {
  this.obstacles = [];
};

util.inherits(MapObstacleUpdateMessage, BaseMessage);

MapObstacleUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_MapObstacleUpdateMessage(output);
};

MapObstacleUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapObstacleUpdateMessage(input);
};

MapObstacleUpdateMessage.prototype.serializeAs_MapObstacleUpdateMessage = function(output) {
  param1.writeShort(this.obstacles.length);
  var _loc2_ = 0;
  while (_loc2_ < this.obstacles.length) {
    (this.obstacles[_loc2_]).serializeAs_MapObstacle(param1);
    _loc2_++;
  }
};

MapObstacleUpdateMessage.prototype.deserializeAs_MapObstacleUpdateMessage = function(input) {
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
module.exports.class = MapObstacleUpdateMessage;