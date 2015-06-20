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

LivingObjectChangeSkinRequestMessage.prototype.serializeAs_LivingObjectChangeSkinRequestMessage = function(param1) {
  if (this.livingUID < 0) {
    throw new Error("Forbidden value (" + this.livingUID + ") on element livingUID.");
  } else {
    param1.writeVarInt(this.livingUID);
    if (this.livingPosition < 0 || this.livingPosition > 255) {
      throw new Error("Forbidden value (" + this.livingPosition + ") on element livingPosition.");
    } else {
      param1.writeByte(this.livingPosition);
      if (this.skinId < 0) {
        throw new Error("Forbidden value (" + this.skinId + ") on element skinId.");
      } else {
        param1.writeVarInt(this.skinId);
        return;
      }
    }
  }
};

LivingObjectChangeSkinRequestMessage.prototype.deserializeAs_LivingObjectChangeSkinRequestMessage = function(param1) {
  this.livingUID = param1.readVarUhInt();
  if (this.livingUID < 0) {
    throw new Error("Forbidden value (" + this.livingUID + ") on element of LivingObjectChangeSkinRequestMessage.livingUID.");
  } else {
    this.livingPosition = param1.readUnsignedByte();
    if (this.livingPosition < 0 || this.livingPosition > 255) {
      throw new Error("Forbidden value (" + this.livingPosition + ") on element of LivingObjectChangeSkinRequestMessage.livingPosition.");
    } else {
      this.skinId = param1.readVarUhInt();
      if (this.skinId < 0) {
        throw new Error("Forbidden value (" + this.skinId + ") on element of LivingObjectChangeSkinRequestMessage.skinId.");
      } else {
        return;
      }
    }
  }
};

LivingObjectChangeSkinRequestMessage.prototype.getMessageId = function() {
  return 5725;
};

LivingObjectChangeSkinRequestMessage.prototype.getClassName = function() {
  return 'LivingObjectChangeSkinRequestMessage';
};

module.exports.id = 5725;
module.exports.class = LivingObjectChangeSkinRequestMessage;