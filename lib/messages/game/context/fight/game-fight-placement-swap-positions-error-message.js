var d2com = require('d2com'),
  BaseMessage = require('./game-fight-placement-swap-positions-error-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameFightPlacementSwapPositionsErrorMessage = function() {

};

util.inherits(GameFightPlacementSwapPositionsErrorMessage, BaseMessage);

GameFightPlacementSwapPositionsErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightPlacementSwapPositionsErrorMessage(output);
};

GameFightPlacementSwapPositionsErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightPlacementSwapPositionsErrorMessage(input);
};

GameFightPlacementSwapPositionsErrorMessage.prototype.serializeAs_GameFightPlacementSwapPositionsErrorMessage = function(param1) {

};

GameFightPlacementSwapPositionsErrorMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsErrorMessage = function(param1) {

};

GameFightPlacementSwapPositionsErrorMessage.prototype.getMessageId = function() {
  return 6548;
};

GameFightPlacementSwapPositionsErrorMessage.prototype.getClassName = function() {
  return 'GameFightPlacementSwapPositionsErrorMessage';
};

module.exports.id = 6548;
module.exports.class = GameFightPlacementSwapPositionsErrorMessage;
module.exports.getInstance = function() {
  return new GameFightPlacementSwapPositionsErrorMessage();
};