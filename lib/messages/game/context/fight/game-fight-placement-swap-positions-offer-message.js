var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightPlacementSwapPositionsOfferMessage = function() {
  this.requestId = 0;
  this.requesterId = 0;
  this.requesterCellId = 0;
  this.requestedId = 0;
  this.requestedCellId = 0;
};

util.inherits(GameFightPlacementSwapPositionsOfferMessage, BaseMessage);

GameFightPlacementSwapPositionsOfferMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightPlacementSwapPositionsOfferMessage(output);
};

GameFightPlacementSwapPositionsOfferMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightPlacementSwapPositionsOfferMessage(input);
};

GameFightPlacementSwapPositionsOfferMessage.prototype.serializeAs_GameFightPlacementSwapPositionsOfferMessage = function(output) {
  if (this.requestId < 0) {
    throw (new Error((("Forbidden value (" + this.requestId) + ") on element requestId.")));
  };
  output.writeInt(this.requestId);
  if (this.requesterId < 0) {
    throw (new Error((("Forbidden value (" + this.requesterId) + ") on element requesterId.")));
  };
  output.writeVarInt(this.requesterId);
  if ((((this.requesterCellId < 0)) || ((this.requesterCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.requesterCellId) + ") on element requesterCellId.")));
  };
  output.writeVarShort(this.requesterCellId);
  if (this.requestedId < 0) {
    throw (new Error((("Forbidden value (" + this.requestedId) + ") on element requestedId.")));
  };
  output.writeVarInt(this.requestedId);
  if ((((this.requestedCellId < 0)) || ((this.requestedCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.requestedCellId) + ") on element requestedCellId.")));
  };
  output.writeVarShort(this.requestedCellId);
};

GameFightPlacementSwapPositionsOfferMessage.prototype.deserializeAs_GameFightPlacementSwapPositionsOfferMessage = function(input) {
  this.requestId = input.readInt();
  if (this.requestId < 0) {
    throw (new Error((("Forbidden value (" + this.requestId) + ") on element of GameFightPlacementSwapPositionsOfferMessage.requestId.")));
  };
  this.requesterId = input.readVarUhInt();
  if (this.requesterId < 0) {
    throw (new Error((("Forbidden value (" + this.requesterId) + ") on element of GameFightPlacementSwapPositionsOfferMessage.requesterId.")));
  };
  this.requesterCellId = input.readVarUhShort();
  if ((((this.requesterCellId < 0)) || ((this.requesterCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.requesterCellId) + ") on element of GameFightPlacementSwapPositionsOfferMessage.requesterCellId.")));
  };
  this.requestedId = input.readVarUhInt();
  if (this.requestedId < 0) {
    throw (new Error((("Forbidden value (" + this.requestedId) + ") on element of GameFightPlacementSwapPositionsOfferMessage.requestedId.")));
  };
  this.requestedCellId = input.readVarUhShort();
  if ((((this.requestedCellId < 0)) || ((this.requestedCellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.requestedCellId) + ") on element of GameFightPlacementSwapPositionsOfferMessage.requestedCellId.")));
  };
};

GameFightPlacementSwapPositionsOfferMessage.prototype.getMessageId = function() {
  return 6542;
};

GameFightPlacementSwapPositionsOfferMessage.prototype.getClassName = function() {
  return 'GameFightPlacementSwapPositionsOfferMessage';
};

module.exports.id = 6542;
module.exports.class = GameFightPlacementSwapPositionsOfferMessage;