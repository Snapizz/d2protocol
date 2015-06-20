var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkMulticraftCustomerMessage = function() {
  this.maxCase = 0;
  this.skillId = 0;
  this.crafterJobLevel = 0;
};

util.inherits(ExchangeStartOkMulticraftCustomerMessage, BaseMessage);

ExchangeStartOkMulticraftCustomerMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkMulticraftCustomerMessage(output);
};

ExchangeStartOkMulticraftCustomerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkMulticraftCustomerMessage(input);
};

ExchangeStartOkMulticraftCustomerMessage.prototype.serializeAs_ExchangeStartOkMulticraftCustomerMessage = function(output) {
  if (this.maxCase < 0) {
    throw new Error("Forbidden value (" + this.maxCase + ") on element maxCase.");
  } else {
    param1.writeByte(this.maxCase);
    if (this.skillId < 0) {
      throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
    } else {
      param1.writeVarInt(this.skillId);
      if (this.crafterJobLevel < 0) {
        throw new Error("Forbidden value (" + this.crafterJobLevel + ") on element crafterJobLevel.");
      } else {
        param1.writeByte(this.crafterJobLevel);
        return;
      }
    }
  }
};

ExchangeStartOkMulticraftCustomerMessage.prototype.deserializeAs_ExchangeStartOkMulticraftCustomerMessage = function(input) {
  this.maxCase = param1.readByte();
  if (this.maxCase < 0) {
    throw new Error("Forbidden value (" + this.maxCase + ") on element of ExchangeStartOkMulticraftCustomerMessage.maxCase.");
  } else {
    this.skillId = param1.readVarUhInt();
    if (this.skillId < 0) {
      throw new Error("Forbidden value (" + this.skillId + ") on element of ExchangeStartOkMulticraftCustomerMessage.skillId.");
    } else {
      this.crafterJobLevel = param1.readByte();
      if (this.crafterJobLevel < 0) {
        throw new Error("Forbidden value (" + this.crafterJobLevel + ") on element of ExchangeStartOkMulticraftCustomerMessage.crafterJobLevel.");
      } else {
        return;
      }
    }
  }
};

ExchangeStartOkMulticraftCustomerMessage.prototype.getMessageId = function() {
  return 5817;
};

ExchangeStartOkMulticraftCustomerMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkMulticraftCustomerMessage';
};

module.exports.id = 5817;
module.exports.class = ExchangeStartOkMulticraftCustomerMessage;