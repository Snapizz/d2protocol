var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var LivingObjectMessageRequestMessage = function() {
  this.msgId = 0;
  this.parameters = [];
  this.livingObject = 0;
};

util.inherits(LivingObjectMessageRequestMessage, BaseMessage);

LivingObjectMessageRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_LivingObjectMessageRequestMessage(output);
};

LivingObjectMessageRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_LivingObjectMessageRequestMessage(input);
};

LivingObjectMessageRequestMessage.prototype.serializeAs_LivingObjectMessageRequestMessage = function(param1) {
  if (this.msgId < 0) {
    throw new Error("Forbidden value (" + this.msgId + ") on element msgId.");
  } else {
    param1.writeVarShort(this.msgId);
    param1.writeShort(this.parameters.length);
    var _loc2_ = 0;
    while (_loc2_ < this.parameters.length) {
      param1.writeUTF(this.parameters[_loc2_]);
      _loc2_++;
    }
    if (this.livingObject < 0) {
      throw new Error("Forbidden value (" + this.livingObject + ") on element livingObject.");
    } else {
      param1.writeVarInt(this.livingObject);
      return;
    }
  }
};

LivingObjectMessageRequestMessage.prototype.deserializeAs_LivingObjectMessageRequestMessage = function(param1) {
  var _loc4_ = null;
  this.msgId = param1.readVarUhShort();
  if (this.msgId < 0) {
    throw new Error("Forbidden value (" + this.msgId + ") on element of LivingObjectMessageRequestMessage.msgId.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc4_ = param1.readUTF();
      this.parameters.push(_loc4_);
      _loc3_++;
    }
    this.livingObject = param1.readVarUhInt();
    if (this.livingObject < 0) {
      throw new Error("Forbidden value (" + this.livingObject + ") on element of LivingObjectMessageRequestMessage.livingObject.");
    } else {
      return;
    }
  }
};

LivingObjectMessageRequestMessage.prototype.getMessageId = function() {
  return 6066;
};

LivingObjectMessageRequestMessage.prototype.getClassName = function() {
  return 'LivingObjectMessageRequestMessage';
};

module.exports.id = 6066;
module.exports.class = LivingObjectMessageRequestMessage;
module.exports.getInstance = function() {
  return new LivingObjectMessageRequestMessage();
};