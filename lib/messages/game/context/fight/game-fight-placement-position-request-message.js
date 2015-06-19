var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameFightPlacementPositionRequestMessage = function() {
  this.cellId = 0;
};

util.inherits(GameFightPlacementPositionRequestMessage, BaseMessage);

GameFightPlacementPositionRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameFightPlacementPositionRequestMessage(output);
};

GameFightPlacementPositionRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightPlacementPositionRequestMessage(input);
};

GameFightPlacementPositionRequestMessage.prototype.serializeAs_GameFightPlacementPositionRequestMessage = function(output) {
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element cellId.")));
  };
  output.writeVarShort(this.cellId);
};

GameFightPlacementPositionRequestMessage.prototype.deserializeAs_GameFightPlacementPositionRequestMessage = function(input) {
  this.cellId = input.readVarUhShort();
  if ((((this.cellId < 0)) || ((this.cellId > 559)))) {
    throw (new Error((("Forbidden value (" + this.cellId) + ") on element of GameFightPlacementPositionRequestMessage.cellId.")));
  };
};

GameFightPlacementPositionRequestMessage.prototype.getMessageId = function() {
  return 704;
};

GameFightPlacementPositionRequestMessage.prototype.getClassName = function() {
  return 'GameFightPlacementPositionRequestMessage';
};

module.exports.id = 704;
module.exports.class = GameFightPlacementPositionRequestMessage;