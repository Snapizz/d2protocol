var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

GameFightPlacementSwapPositionsCancelledMessage.prototype.serializeAs_GameFightPlacementSwapPositionsCancelledMessage = function(output) {
  if (this.requestId < 0) {
    throw (new Error((("Forbidden value (" + this.requestId) + ") on element requestId.")));
  };
  output.writeInt(this.requestId);
  if (this.cancellerId < 0) {
    throw (new Error((("Forbidden value (" + this.cancellerId) + ") on element cancellerId.")));
  };
  output.writeVarInt(this.cancellerId);
};

GameFightPlacementSwapPositionsCancelledMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsCancelledMessage = function(input) {
  this.requestId = input.readInt();
  if (this.requestId < 0) {
    throw (new Error((("Forbidden value (" + this.requestId) + ") on element of GameFightPlacementSwapPositionsCancelledMessage.requestId.")));
  };
  this.cancellerId = input.readVarUhInt();
  if (this.cancellerId < 0) {
    throw (new Error((("Forbidden value (" + this.cancellerId) + ") on element of GameFightPlacementSwapPositionsCancelledMessage.cancellerId.")));
  };
};

GameFightPlacementSwapPositionsCancelledMessage.prototype.getMessageId = function() {
  return 6546;
};

GameFightPlacementSwapPositionsCancelledMessage.prototype.getClassName = function() {
  return 'GameFightPlacementSwapPositionsCancelledMessage';
};

module.exports.id = 6546;
module.exports.class = GameFightPlacementSwapPositionsCancelledMessage;