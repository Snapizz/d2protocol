var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TreasureHuntFlagRemoveRequestMessage = function() {
  this.questType = 0;
  this.index = 0;
};

util.inherits(TreasureHuntFlagRemoveRequestMessage, BaseMessage);

TreasureHuntFlagRemoveRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntFlagRemoveRequestMessage(output);
};

TreasureHuntFlagRemoveRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntFlagRemoveRequestMessage(input);
};

TreasureHuntFlagRemoveRequestMessage.prototype.serializeAs_TreasureHuntFlagRemoveRequestMessage = function(output) {
  output.writeByte(this.questType);
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element index.")));
  };
  output.writeByte(this.index);
};

TreasureHuntFlagRemoveRequestMessage.prototype.deserializeAs_TreasureHuntFlagRemoveRequestMessage = function(input) {
  this.questType = input.readByte();
  if (this.questType < 0) {
    throw (new Error((("Forbidden value (" + this.questType) + ") on element of TreasureHuntFlagRemoveRequestMessage.questType.")));
  };
  this.index = input.readByte();
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element of TreasureHuntFlagRemoveRequestMessage.index.")));
  };
};

TreasureHuntFlagRemoveRequestMessage.prototype.getMessageId = function() {
  return 6510;
};

TreasureHuntFlagRemoveRequestMessage.prototype.getClassName = function() {
  return 'TreasureHuntFlagRemoveRequestMessage';
};

module.exports.id = 6510;
module.exports.class = TreasureHuntFlagRemoveRequestMessage;