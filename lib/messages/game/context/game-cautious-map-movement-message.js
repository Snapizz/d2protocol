var d2com = require('d2com'),
  BaseMessage = require('./game-cautious-map-movement-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

GameCautiousMapMovementMessage.prototype.serializeAs_GameCautiousMapMovementMessage = function(param1) {
  this.serializeAs_GameMapMovementMessage(param1);
};

GameCautiousMapMovementMessage.prototype.deserializeAs_GameCautiousMapMovementMessage = function(param1) {
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
module.exports.getInstance = function() {
  return new GameCautiousMapMovementMessage();
};