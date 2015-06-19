var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TreasureHuntFlagRequestMessage = function() {
  this.questType = 0;
  this.index = 0;
};

util.inherits(TreasureHuntFlagRequestMessage, BaseMessage);

TreasureHuntFlagRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntFlagRequestMessage(output);
};

TreasureHuntFlagRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntFlagRequestMessage(input);
};

TreasureHuntFlagRequestMessage.prototype.serializeAs_TreasureHuntFlagRequestMessage = function(output) {
  output.writeByte(this.questType);
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element index.")));
  };
  output.writeByte(this.index);
};

TreasureHuntFlagRequestMessage.prototype.deserializeAs_TreasureHuntFlagRequestMessage = function(input) {
  this.questType = input.readByte();
  if (this.questType < 0) {
    throw (new Error((("Forbidden value (" + this.questType) + ") on element of TreasureHuntFlagRequestMessage.questType.")));
  };
  this.index = input.readByte();
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element of TreasureHuntFlagRequestMessage.index.")));
  };
};

TreasureHuntFlagRequestMessage.prototype.getMessageId = function() {
  return 6508;
};

TreasureHuntFlagRequestMessage.prototype.getClassName = function() {
  return 'TreasureHuntFlagRequestMessage';
};

module.exports.id = 6508;
module.exports.class = TreasureHuntFlagRequestMessage;