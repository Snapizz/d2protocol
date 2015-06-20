var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var LivingObjectDissociateMessage = function() {
  this.livingUID = 0;
  this.livingPosition = 0;
};

util.inherits(LivingObjectDissociateMessage, BaseMessage);

LivingObjectDissociateMessage.prototype.serialize = function(output) {
  this.serializeAs_LivingObjectDissociateMessage(output);
};

LivingObjectDissociateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LivingObjectDissociateMessage(input);
};

LivingObjectDissociateMessage.prototype.serializeAs_LivingObjectDissociateMessage = function(param1) {
  if (this.livingUID < 0) {
    throw new Error("Forbidden value (" + this.livingUID + ") on element livingUID.");
  } else {
    param1.writeVarInt(this.livingUID);
    if (this.livingPosition < 0 || this.livingPosition > 255) {
      throw new Error("Forbidden value (" + this.livingPosition + ") on element livingPosition.");
    } else {
      param1.writeByte(this.livingPosition);
      return;
    }
  }
};

LivingObjectDissociateMessage.prototype.deserializeAs_LivingObjectDissociateMessage = function(param1) {
  this.livingUID = param1.readVarUhInt();
  if (this.livingUID < 0) {
    throw new Error("Forbidden value (" + this.livingUID + ") on element of LivingObjectDissociateMessage.livingUID.");
  } else {
    this.livingPosition = param1.readUnsignedByte();
    if (this.livingPosition < 0 || this.livingPosition > 255) {
      throw new Error("Forbidden value (" + this.livingPosition + ") on element of LivingObjectDissociateMessage.livingPosition.");
    } else {
      return;
    }
  }
};

LivingObjectDissociateMessage.prototype.getMessageId = function() {
  return 5723;
};

LivingObjectDissociateMessage.prototype.getClassName = function() {
  return 'LivingObjectDissociateMessage';
};

module.exports.id = 5723;
module.exports.class = LivingObjectDissociateMessage;
module.exports.getInstance = function() {
  return new LivingObjectDissociateMessage();
};