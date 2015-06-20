var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameCautiousMapMovementMessage = function() {

};

util.inherits(GameCautiousMapMovementMessage, BaseMessage);

GameCautiousMapMovementMessage.prototype.serialize = function(output) {
  this.serializeAs_GameCautiousMapMovementMessage(output);
};

GameCautiousMapMovementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameCautiousMapMovementMessage(input);
};

GameCautiousMapMovementMessage.prototype.serializeAs_GameCautiousMapMovementMessage = function(output) {
  this.serializeAs_GameMapMovementMessage(param1);
};

GameCautiousMapMovementMessage.prototype.deserializeAs_GameCautiousMapMovementMessage = function(input) {
  this.deserialize(param1);
};

GameCautiousMapMovementMessage.prototype.getMessageId = function() {
  return 6497;
};

GameCautiousMapMovementMessage.prototype.getClassName = function() {
  return 'GameCautiousMapMovementMessage';
};

module.exports.id = 6497;
module.exports.class = GameCautiousMapMovementMessage;