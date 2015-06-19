var d2com = require('d2com'),
  BaseMessage = require('./game-map-movement-request-message.js').class,
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
  this.serializeAs_GameMapMovementRequestMessage(output);
};

GameCautiousMapMovementRequestMessage.prototype.deserializeAs_GameCautiousMapMovementRequestMessage = function(input) {
  this.deserialize(input);
};

GameCautiousMapMovementRequestMessage.prototype.getMessageId = function() {
  return 6496;
};

GameCautiousMapMovementRequestMessage.prototype.getClassName = function() {
  return 'GameCautiousMapMovementRequestMessage';
};

module.exports.id = 6496;
module.exports.class = GameCautiousMapMovementRequestMessage;