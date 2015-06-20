var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GameCautiousMapMovementRequestMessage.prototype.serializeAs_GameCautiousMapMovementRequestMessage = function(param1) {
  this.serializeAs_GameMapMovementRequestMessage(param1);
};

GameCautiousMapMovementRequestMessage.prototype.deserializeAs_GameCautiousMapMovementRequestMessage = function(param1) {
  super.deserialize(param1);
};

GameCautiousMapMovementRequestMessage.prototype.getMessageId = function() {
  return 6496;
};

GameCautiousMapMovementRequestMessage.prototype.getClassName = function() {
  return 'GameCautiousMapMovementRequestMessage';
};

module.exports.id = 6496;
module.exports.class = GameCautiousMapMovementRequestMessage;
module.exports.getInstance = function() {
  return new GameCautiousMapMovementRequestMessage();
};