var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameFightPlacementSwapPositionsErrorMessage.prototype.serializeAs_GameFightPlacementSwapPositionsErrorMessage = function(output) {

};

GameFightPlacementSwapPositionsErrorMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsErrorMessage = function(input) {

};

GameFightPlacementSwapPositionsErrorMessage.prototype.getMessageId = function() {
  return 6548;
};

GameFightPlacementSwapPositionsErrorMessage.prototype.getClassName = function() {
  return 'GameFightPlacementSwapPositionsErrorMessage';
};

module.exports.id = 6548;
module.exports.class = GameFightPlacementSwapPositionsErrorMessage;