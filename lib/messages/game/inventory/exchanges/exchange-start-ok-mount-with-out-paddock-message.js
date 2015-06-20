var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var ExchangeStartOkMountWithOutPaddockMessage = function() {
  this.stabledMountsDescription = [];
};

util.inherits(ExchangeStartOkMountWithOutPaddockMessage, BaseMessage);

ExchangeStartOkMountWithOutPaddockMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkMountWithOutPaddockMessage(output);
};

ExchangeStartOkMountWithOutPaddockMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkMountWithOutPaddockMessage(input);
};

ExchangeStartOkMountWithOutPaddockMessage.prototype.serializeAs_ExchangeStartOkMountWithOutPaddockMessage = function(param1) {
  param1.writeShort(this.stabledMountsDescription.length);
  var _loc2_ = 0;
  while (_loc2_ < this.stabledMountsDescription.length) {
    (this.stabledMountsDescription[_loc2_]).serializeAs_MountClientData(param1);
    _loc2_++;
  }
};

ExchangeStartOkMountWithOutPaddockMessage.prototype.deserializeAs_ExchangeStartOkMountWithOutPaddockMessage = function(param1) {
  var _loc4_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new MountClientData();
    _loc4_.deserialize(param1);
    this.stabledMountsDescription.push(_loc4_);
    _loc3_++;
  }
};

ExchangeStartOkMountWithOutPaddockMessage.prototype.getMessageId = function() {
  return 5991;
};

ExchangeStartOkMountWithOutPaddockMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkMountWithOutPaddockMessage';
};

module.exports.id = 5991;
module.exports.class = ExchangeStartOkMountWithOutPaddockMessage;