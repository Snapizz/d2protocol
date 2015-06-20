var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeOnHumanVendorRequestMessage = function() {
  this.humanVendorId = 0;
  this.humanVendorCell = 0;
};

util.inherits(ExchangeOnHumanVendorRequestMessage, BaseMessage);

ExchangeOnHumanVendorRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeOnHumanVendorRequestMessage(output);
};

ExchangeOnHumanVendorRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeOnHumanVendorRequestMessage(input);
};

ExchangeOnHumanVendorRequestMessage.prototype.serializeAs_ExchangeOnHumanVendorRequestMessage = function(param1) {
  if (this.humanVendorId < 0) {
    throw new Error("Forbidden value (" + this.humanVendorId + ") on element humanVendorId.");
  } else {
    param1.writeVarInt(this.humanVendorId);
    if (this.humanVendorCell < 0 || this.humanVendorCell > 559) {
      throw new Error("Forbidden value (" + this.humanVendorCell + ") on element humanVendorCell.");
    } else {
      param1.writeVarShort(this.humanVendorCell);
      return;
    }
  }
};

ExchangeOnHumanVendorRequestMessage.prototype.deserializeAs_ExchangeOnHumanVendorRequestMessage = function(param1) {
  this.humanVendorId = param1.readVarUhInt();
  if (this.humanVendorId < 0) {
    throw new Error("Forbidden value (" + this.humanVendorId + ") on element of ExchangeOnHumanVendorRequestMessage.humanVendorId.");
  } else {
    this.humanVendorCell = param1.readVarUhShort();
    if (this.humanVendorCell < 0 || this.humanVendorCell > 559) {
      throw new Error("Forbidden value (" + this.humanVendorCell + ") on element of ExchangeOnHumanVendorRequestMessage.humanVendorCell.");
    } else {
      return;
    }
  }
};

ExchangeOnHumanVendorRequestMessage.prototype.getMessageId = function() {
  return 5772;
};

ExchangeOnHumanVendorRequestMessage.prototype.getClassName = function() {
  return 'ExchangeOnHumanVendorRequestMessage';
};

module.exports.id = 5772;
module.exports.class = ExchangeOnHumanVendorRequestMessage;
module.exports.getInstance = function() {
  return new ExchangeOnHumanVendorRequestMessage();
};