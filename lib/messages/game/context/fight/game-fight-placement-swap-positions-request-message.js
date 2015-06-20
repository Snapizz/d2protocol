var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightPlacementSwapPositionsRequestMessage = function() {
  this.requestedId = 0;
};

util.inherits(GameFightPlacementSwapPositionsRequestMessage, BaseMessage);

GameFightPlacementSwapPositionsRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightPlacementSwapPositionsRequestMessage(output);
};

GameFightPlacementSwapPositionsRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightPlacementSwapPositionsRequestMessage(input);
};

GameFightPlacementSwapPositionsRequestMessage.prototype.serializeAs_GameFightPlacementSwapPositionsRequestMessage = function(param1) {
  this.serializeAs_GameFightPlacementPositionRequestMessage(param1);
  param1.writeInt(this.requestedId);
};

GameFightPlacementSwapPositionsRequestMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsRequestMessage = function(param1) {
  this.deserialize(param1);
  this.requestedId = param1.readInt();
};

GameFightPlacementSwapPositionsRequestMessage.prototype.getMessageId = function() {
  return 6541;
};

GameFightPlacementSwapPositionsRequestMessage.prototype.getClassName = function() {
  return 'GameFightPlacementSwapPositionsRequestMessage';
};

module.exports.id = 6541;
module.exports.class = GameFightPlacementSwapPositionsRequestMessage;