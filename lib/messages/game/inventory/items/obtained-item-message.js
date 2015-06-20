var d2com = require('d2com'),
  BaseMessage = require('./obtained-item-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ObtainedItemMessage = function() {
  this.genericId = 0;
  this.baseQuantity = 0;
};

util.inherits(ObtainedItemMessage, BaseMessage);

ObtainedItemMessage.prototype.serialize = function(output) {
  this.serializeAs_ObtainedItemMessage(output);
};

ObtainedItemMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObtainedItemMessage(input);
};

ObtainedItemMessage.prototype.serializeAs_ObtainedItemMessage = function(param1) {
  if (this.genericId < 0) {
    throw new Error("Forbidden value (" + this.genericId + ") on element genericId.");
  } else {
    param1.writeVarShort(this.genericId);
    if (this.baseQuantity < 0) {
      throw new Error("Forbidden value (" + this.baseQuantity + ") on element baseQuantity.");
    } else {
      param1.writeVarInt(this.baseQuantity);
      return;
    }
  }
};

ObtainedItemMessage.prototype.deserializeAs_ObtainedItemMessage = function(param1) {
  this.genericId = param1.readVarUhShort();
  if (this.genericId < 0) {
    throw new Error("Forbidden value (" + this.genericId + ") on element of ObtainedItemMessage.genericId.");
  } else {
    this.baseQuantity = param1.readVarUhInt();
    if (this.baseQuantity < 0) {
      throw new Error("Forbidden value (" + this.baseQuantity + ") on element of ObtainedItemMessage.baseQuantity.");
    } else {
      return;
    }
  }
};

ObtainedItemMessage.prototype.getMessageId = function() {
  return 6519;
};

ObtainedItemMessage.prototype.getClassName = function() {
  return 'ObtainedItemMessage';
};

module.exports.id = 6519;
module.exports.class = ObtainedItemMessage;
module.exports.getInstance = function() {
  return new ObtainedItemMessage();
};