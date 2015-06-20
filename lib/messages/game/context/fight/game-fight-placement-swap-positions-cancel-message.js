var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameFightPlacementSwapPositionsCancelMessage = function() {
  this.requestId = 0;
};

util.inherits(GameFightPlacementSwapPositionsCancelMessage, BaseMessage);

GameFightPlacementSwapPositionsCancelMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightPlacementSwapPositionsCancelMessage(output);
};

GameFightPlacementSwapPositionsCancelMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightPlacementSwapPositionsCancelMessage(input);
};

GameFightPlacementSwapPositionsCancelMessage.prototype.serializeAs_GameFightPlacementSwapPositionsCancelMessage = function(param1) {
  if (this.requestId < 0) {
    throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
  } else {
    param1.writeInt(this.requestId);
    return;
  }
};

GameFightPlacementSwapPositionsCancelMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsCancelMessage = function(param1) {
  this.requestId = param1.readInt();
  if (this.requestId < 0) {
    throw new Error("Forbidden value (" + this.requestId + ") on element of GameFightPlacementSwapPositionsCancelMessage.requestId.");
  } else {
    return;
  }
};

GameFightPlacementSwapPositionsCancelMessage.prototype.getMessageId = function() {
  return 6543;
};

GameFightPlacementSwapPositionsCancelMessage.prototype.getClassName = function() {
  return 'GameFightPlacementSwapPositionsCancelMessage';
};

module.exports.id = 6543;
module.exports.class = GameFightPlacementSwapPositionsCancelMessage;