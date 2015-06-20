var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var LivingObjectMessageMessage = function() {
  this.msgId = 0;
  this.timeStamp = 0;
  this.owner = "";
  this.objectGenericId = 0;
};

util.inherits(LivingObjectMessageMessage, BaseMessage);

LivingObjectMessageMessage.prototype.serialize = function(output) {
  this.serializeAs_LivingObjectMessageMessage(output);
};

LivingObjectMessageMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LivingObjectMessageMessage(input);
};

LivingObjectMessageMessage.prototype.serializeAs_LivingObjectMessageMessage = function(param1) {
  if (this.msgId < 0) {
    throw new Error("Forbidden value (" + this.msgId + ") on element msgId.");
  } else {
    param1.writeVarShort(this.msgId);
    if (this.timeStamp < 0) {
      throw new Error("Forbidden value (" + this.timeStamp + ") on element timeStamp.");
    } else {
      param1.writeInt(this.timeStamp);
      param1.writeUTF(this.owner);
      if (this.objectGenericId < 0) {
        throw new Error("Forbidden value (" + this.objectGenericId + ") on element objectGenericId.");
      } else {
        param1.writeVarShort(this.objectGenericId);
        return;
      }
    }
  }
};

LivingObjectMessageMessage.prototype.deserializeAs_LivingObjectMessageMessage = function(param1) {
  this.msgId = param1.readVarUhShort();
  if (this.msgId < 0) {
    throw new Error("Forbidden value (" + this.msgId + ") on element of LivingObjectMessageMessage.msgId.");
  } else {
    this.timeStamp = param1.readInt();
    if (this.timeStamp < 0) {
      throw new Error("Forbidden value (" + this.timeStamp + ") on element of LivingObjectMessageMessage.timeStamp.");
    } else {
      this.owner = param1.readUTF();
      this.objectGenericId = param1.readVarUhShort();
      if (this.objectGenericId < 0) {
        throw new Error("Forbidden value (" + this.objectGenericId + ") on element of LivingObjectMessageMessage.objectGenericId.");
      } else {
        return;
      }
    }
  }
};

LivingObjectMessageMessage.prototype.getMessageId = function() {
  return 6065;
};

LivingObjectMessageMessage.prototype.getClassName = function() {
  return 'LivingObjectMessageMessage';
};

module.exports.id = 6065;
module.exports.class = LivingObjectMessageMessage;