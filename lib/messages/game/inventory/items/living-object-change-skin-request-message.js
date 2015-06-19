var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var LivingObjectChangeSkinRequestMessage = function() {
  this.livingUID = 0;
  this.livingPosition = 0;
  this.skinId = 0;
};

util.inherits(LivingObjectChangeSkinRequestMessage, BaseMessage);

LivingObjectChangeSkinRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_LivingObjectChangeSkinRequestMessage(output);
};

LivingObjectChangeSkinRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LivingObjectChangeSkinRequestMessage(input);
};

LivingObjectChangeSkinRequestMessage.prototype.serializeAs_LivingObjectChangeSkinRequestMessage = function(output) {
  if (this.livingUID < 0) {
    throw (new Error((("Forbidden value (" + this.livingUID) + ") on element livingUID.")));
  };
  output.writeVarInt(this.livingUID);
  if ((((this.livingPosition < 0)) || ((this.livingPosition > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.livingPosition) + ") on element livingPosition.")));
  };
  output.writeByte(this.livingPosition);
  if (this.skinId < 0) {
    throw (new Error((("Forbidden value (" + this.skinId) + ") on element skinId.")));
  };
  output.writeVarInt(this.skinId);
};

LivingObjectChangeSkinRequestMessage.prototype.deserializeAs_LivingObjectChangeSkinRequestMessage = function(input) {
  this.livingUID = input.readVarUhInt();
  if (this.livingUID < 0) {
    throw (new Error((("Forbidden value (" + this.livingUID) + ") on element of LivingObjectChangeSkinRequestMessage.livingUID.")));
  };
  this.livingPosition = input.readUnsignedByte();
  if ((((this.livingPosition < 0)) || ((this.livingPosition > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.livingPosition) + ") on element of LivingObjectChangeSkinRequestMessage.livingPosition.")));
  };
  this.skinId = input.readVarUhInt();
  if (this.skinId < 0) {
    throw (new Error((("Forbidden value (" + this.skinId) + ") on element of LivingObjectChangeSkinRequestMessage.skinId.")));
  };
};

LivingObjectChangeSkinRequestMessage.prototype.getMessageId = function() {
  return 5725;
};

LivingObjectChangeSkinRequestMessage.prototype.getClassName = function() {
  return 'LivingObjectChangeSkinRequestMessage';
};

module.exports.id = 5725;
module.exports.class = LivingObjectChangeSkinRequestMessage;