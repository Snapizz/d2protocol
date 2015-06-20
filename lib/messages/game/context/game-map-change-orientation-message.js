var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameMapChangeOrientationMessage = function() {
  this.orientation;
};

util.inherits(GameMapChangeOrientationMessage, BaseMessage);

GameMapChangeOrientationMessage.prototype.serialize = function(output) {
  this.serializeAs_GameMapChangeOrientationMessage(output);
};

GameMapChangeOrientationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameMapChangeOrientationMessage(input);
};

GameMapChangeOrientationMessage.prototype.serializeAs_GameMapChangeOrientationMessage = function(output) {
  this.orientation.serializeAs_ActorOrientation(param1);
};

GameMapChangeOrientationMessage.prototype.deserializeAs_GameMapChangeOrientationMessage = function(input) {
  this.orientation = new ActorOrientation();
  this.orientation.deserialize(param1);
};

GameMapChangeOrientationMessage.prototype.getMessageId = function() {
  return 946;
};

GameMapChangeOrientationMessage.prototype.getClassName = function() {
  return 'GameMapChangeOrientationMessage';
};

module.exports.id = 946;
module.exports.class = GameMapChangeOrientationMessage;