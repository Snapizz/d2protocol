var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameFightPlacementSwapPositionsCancelledMessage = function() {
  this.requestId = 0;
  this.cancellerId = 0;
};

util.inherits(GameFightPlacementSwapPositionsCancelledMessage, BaseMessage);

GameFightPlacementSwapPositionsCancelledMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightPlacementSwapPositionsCancelledMessage(output);
};

GameFightPlacementSwapPositionsCancelledMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightPlacementSwapPositionsCancelledMessage(input);
};

GameFightPlacementSwapPositionsCancelledMessage.prototype.serializeAs_GameFightPlacementSwapPositionsCancelledMessage = function(param1) {
  if (this.requestId < 0) {
    throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
  } else {
    param1.writeInt(this.requestId);
    if (this.cancellerId < 0) {
      throw new Error("Forbidden value (" + this.cancellerId + ") on element cancellerId.");
    } else {
      param1.writeVarInt(this.cancellerId);
      return;
    }
  }
};

GameFightPlacementSwapPositionsCancelledMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsCancelledMessage = function(param1) {
  this.requestId = param1.readInt();
  if (this.requestId < 0) {
    throw new Error("Forbidden value (" + this.requestId + ") on element of GameFightPlacementSwapPositionsCancelledMessage.requestId.");
  } else {
    this.cancellerId = param1.readVarUhInt();
    if (this.cancellerId < 0) {
      throw new Error("Forbidden value (" + this.cancellerId + ") on element of GameFightPlacementSwapPositionsCancelledMessage.cancellerId.");
    } else {
      return;
    }
  }
};

GameFightPlacementSwapPositionsCancelledMessage.prototype.getMessageId = function() {
  return 6546;
};

GameFightPlacementSwapPositionsCancelledMessage.prototype.getClassName = function() {
  return 'GameFightPlacementSwapPositionsCancelledMessage';
};

module.exports.id = 6546;
module.exports.class = GameFightPlacementSwapPositionsCancelledMessage;
module.exports.getInstance = function() {
  return new GameFightPlacementSwapPositionsCancelledMessage();
};