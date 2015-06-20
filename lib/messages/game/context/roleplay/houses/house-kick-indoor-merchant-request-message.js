var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseKickIndoorMerchantRequestMessage = function() {
  this.cellId = 0;
};

util.inherits(HouseKickIndoorMerchantRequestMessage, BaseMessage);

HouseKickIndoorMerchantRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseKickIndoorMerchantRequestMessage(output);
};

HouseKickIndoorMerchantRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseKickIndoorMerchantRequestMessage(input);
};

HouseKickIndoorMerchantRequestMessage.prototype.serializeAs_HouseKickIndoorMerchantRequestMessage = function(param1) {
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element cellId.");
  } else {
    param1.writeVarShort(this.cellId);
    return;
  }
};

HouseKickIndoorMerchantRequestMessage.prototype.deserializeAs_HouseKickIndoorMerchantRequestMessage = function(param1) {
  this.cellId = param1.readVarUhShort();
  if (this.cellId < 0 || this.cellId > 559) {
    throw new Error("Forbidden value (" + this.cellId + ") on element of HouseKickIndoorMerchantRequestMessage.cellId.");
  } else {
    return;
  }
};

HouseKickIndoorMerchantRequestMessage.prototype.getMessageId = function() {
  return 5661;
};

HouseKickIndoorMerchantRequestMessage.prototype.getClassName = function() {
  return 'HouseKickIndoorMerchantRequestMessage';
};

module.exports.id = 5661;
module.exports.class = HouseKickIndoorMerchantRequestMessage;