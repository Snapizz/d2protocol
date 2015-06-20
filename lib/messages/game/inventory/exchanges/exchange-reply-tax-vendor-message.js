var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeReplyTaxVendorMessage = function() {
  this.objectValue = 0;
  this.totalTaxValue = 0;
};

util.inherits(ExchangeReplyTaxVendorMessage, BaseMessage);

ExchangeReplyTaxVendorMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeReplyTaxVendorMessage(output);
};

ExchangeReplyTaxVendorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeReplyTaxVendorMessage(input);
};

ExchangeReplyTaxVendorMessage.prototype.serializeAs_ExchangeReplyTaxVendorMessage = function(param1) {
  if (this.objectValue < 0) {
    throw new Error("Forbidden value (" + this.objectValue + ") on element objectValue.");
  } else {
    param1.writeVarInt(this.objectValue);
    if (this.totalTaxValue < 0) {
      throw new Error("Forbidden value (" + this.totalTaxValue + ") on element totalTaxValue.");
    } else {
      param1.writeVarInt(this.totalTaxValue);
      return;
    }
  }
};

ExchangeReplyTaxVendorMessage.prototype.deserializeAs_ExchangeReplyTaxVendorMessage = function(param1) {
  this.objectValue = param1.readVarUhInt();
  if (this.objectValue < 0) {
    throw new Error("Forbidden value (" + this.objectValue + ") on element of ExchangeReplyTaxVendorMessage.objectValue.");
  } else {
    this.totalTaxValue = param1.readVarUhInt();
    if (this.totalTaxValue < 0) {
      throw new Error("Forbidden value (" + this.totalTaxValue + ") on element of ExchangeReplyTaxVendorMessage.totalTaxValue.");
    } else {
      return;
    }
  }
};

ExchangeReplyTaxVendorMessage.prototype.getMessageId = function() {
  return 5787;
};

ExchangeReplyTaxVendorMessage.prototype.getClassName = function() {
  return 'ExchangeReplyTaxVendorMessage';
};

module.exports.id = 5787;
module.exports.class = ExchangeReplyTaxVendorMessage;