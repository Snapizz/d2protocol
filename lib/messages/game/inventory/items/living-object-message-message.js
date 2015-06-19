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

LivingObjectMessageMessage.prototype.serializeAs_LivingObjectMessageMessage = function(output) {
  if (this.msgId < 0) {
    throw (new Error((("Forbidden value (" + this.msgId) + ") on element msgId.")));
  };
  output.writeVarShort(this.msgId);
  if (this.timeStamp < 0) {
    throw (new Error((("Forbidden value (" + this.timeStamp) + ") on element timeStamp.")));
  };
  output.writeInt(this.timeStamp);
  output.writeUTF(this.owner);
  if (this.objectGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.objectGenericId) + ") on element objectGenericId.")));
  };
  output.writeVarShort(this.objectGenericId);
};

LivingObjectMessageMessage.prototype.deserializeAs_LivingObjectMessageMessage = function(input) {
  this.msgId = input.readVarUhShort();
  if (this.msgId < 0) {
    throw (new Error((("Forbidden value (" + this.msgId) + ") on element of LivingObjectMessageMessage.msgId.")));
  };
  this.timeStamp = input.readInt();
  if (this.timeStamp < 0) {
    throw (new Error((("Forbidden value (" + this.timeStamp) + ") on element of LivingObjectMessageMessage.timeStamp.")));
  };
  this.owner = input.readUTF();
  this.objectGenericId = input.readVarUhShort();
  if (this.objectGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.objectGenericId) + ") on element of LivingObjectMessageMessage.objectGenericId.")));
  };
};

LivingObjectMessageMessage.prototype.getMessageId = function() {
  return 6065;
};

LivingObjectMessageMessage.prototype.getClassName = function() {
  return 'LivingObjectMessageMessage';
};

module.exports.id = 6065;
module.exports.class = LivingObjectMessageMessage;