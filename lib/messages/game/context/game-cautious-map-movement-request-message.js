var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameCautiousMapMovementRequestMessage = function() {

};

util.inherits(GameCautiousMapMovementRequestMessage, BaseMessage);

GameCautiousMapMovementRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameCautiousMapMovementRequestMessage(output);
};

GameCautiousMapMovementRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameCautiousMapMovementRequestMessage(input);
};

GameCautiousMapMovementRequestMessage.prototype.serializeAs_GameCautiousMapMovementRequestMessage = function(output) {
  this.serializeAs_GameMapMovementRequestMessage(param1);
};

GameCautiousMapMovementRequestMessage.prototype.deserializeAs_GameCautiousMapMovementRequestMessage = function(input) {
  this.deserialize(param1);
};

GameCautiousMapMovementRequestMessage.prototype.getMessageId = function() {
  return 6496;
};

GameCautiousMapMovementRequestMessage.prototype.getClassName = function() {
  return 'GameCautiousMapMovementRequestMessage';
};

module.exports.id = 6496;
module.exports.class = GameCautiousMapMovementRequestMessage;