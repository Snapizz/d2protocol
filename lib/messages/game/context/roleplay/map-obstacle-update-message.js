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
  output.writeShort(this.obstacles.length);
  var _i1;
  while (_i1 < this.obstacles.length) {
    (this.obstacles[_i1]).serializeAs_MapObstacle(output);
    _i1++;
  };
};

MapObstacleUpdateMessage.prototype.deserializeAs_MapObstacleUpdateMessage = function(input) {
  var _item1;
  var _obstaclesLen = input.readUnsignedShort();
  var _i1;
  while (_i1 < _obstaclesLen) {
    _item1 = new MapObstacle();
    _item1.deserialize(input);
    this.obstacles.push(_item1);
    _i1++;
  };
};

MapObstacleUpdateMessage.prototype.getMessageId = function() {
  return 6051;
};

MapObstacleUpdateMessage.prototype.getClassName = function() {
  return 'MapObstacleUpdateMessage';
};

module.exports.id = 6051;
module.exports.class = MapObstacleUpdateMessage;