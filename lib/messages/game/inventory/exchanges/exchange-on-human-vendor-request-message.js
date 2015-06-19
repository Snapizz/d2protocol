var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeOnHumanVendorRequestMessage.prototype.serializeAs_ExchangeOnHumanVendorRequestMessage = function(output) {
  if (this.humanVendorId < 0) {
    throw (new Error((("Forbidden value (" + this.humanVendorId) + ") on element humanVendorId.")));
  };
  output.writeVarInt(this.humanVendorId);
  if ((((this.humanVendorCell < 0)) || ((this.humanVendorCell > 559)))) {
    throw (new Error((("Forbidden value (" + this.humanVendorCell) + ") on element humanVendorCell.")));
  };
  output.writeVarShort(this.humanVendorCell);
};

ExchangeOnHumanVendorRequestMessage.prototype.deserializeAs_ExchangeOnHumanVendorRequestMessage = function(input) {
  this.humanVendorId = input.readVarUhInt();
  if (this.humanVendorId < 0) {
    throw (new Error((("Forbidden value (" + this.humanVendorId) + ") on element of ExchangeOnHumanVendorRequestMessage.humanVendorId.")));
  };
  this.humanVendorCell = input.readVarUhShort();
  if ((((this.humanVendorCell < 0)) || ((this.humanVendorCell > 559)))) {
    throw (new Error((("Forbidden value (" + this.humanVendorCell) + ") on element of ExchangeOnHumanVendorRequestMessage.humanVendorCell.")));
  };
};

ExchangeOnHumanVendorRequestMessage.prototype.getMessageId = function() {
  return 5772;
};

ExchangeOnHumanVendorRequestMessage.prototype.getClassName = function() {
  return 'ExchangeOnHumanVendorRequestMessage';
};

module.exports.id = 5772;
module.exports.class = ExchangeOnHumanVendorRequestMessage;