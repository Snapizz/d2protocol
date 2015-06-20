var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightPlacementSwapPositionsAcceptMessage = function() {
  this.requestId = 0;
};

util.inherits(GameFightPlacementSwapPositionsAcceptMessage, BaseMessage);

GameFightPlacementSwapPositionsAcceptMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightPlacementSwapPositionsAcceptMessage(output);
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightPlacementSwapPositionsAcceptMessage(input);
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.serializeAs_GameFightPlacementSwapPositionsAcceptMessage = function(output) {
  if (this.requestId < 0) {
    throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
  } else {
    param1.writeInt(this.requestId);
    return;
  }
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsAcceptMessage = function(input) {
  this.requestId = param1.readInt();
  if (this.requestId < 0) {
    throw new Error("Forbidden value (" + this.requestId + ") on element of GameFightPlacementSwapPositionsAcceptMessage.requestId.");
  } else {
    return;
  }
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.getMessageId = function() {
  return 6547;
};

GameFightPlacementSwapPositionsAcceptMessage.prototype.getClassName = function() {
  return 'GameFightPlacementSwapPositionsAcceptMessage';
};

module.exports.id = 6547;
module.exports.class = GameFightPlacementSwapPositionsAcceptMessage;