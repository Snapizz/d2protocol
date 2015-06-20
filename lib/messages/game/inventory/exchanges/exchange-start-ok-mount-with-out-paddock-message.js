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

ExchangeStartOkMountWithOutPaddockMessage.prototype.serializeAs_ExchangeStartOkMountWithOutPaddockMessage = function(output) {
  output.writeShort(this.stabledMountsDescription.length);
  var _i1 = 0;
  while (_i1 < this.stabledMountsDescription.length) {
    (this.stabledMountsDescription[_i1]).serializeAs_MountClientData(output);
    _i1++;
  };
};

ExchangeStartOkMountWithOutPaddockMessage.prototype.deserializeAs_ExchangeStartOkMountWithOutPaddockMessage = function(input) {
  var _item1;
  var _stabledMountsDescriptionLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _stabledMountsDescriptionLen) {
    _item1 = new MountClientData();
    _item1.deserialize(input);
    this.stabledMountsDescription.push(_item1);
    _i1++;
  };
};

ExchangeStartOkMountWithOutPaddockMessage.prototype.getMessageId = function() {
  return 5991;
};

ExchangeStartOkMountWithOutPaddockMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkMountWithOutPaddockMessage';
};

module.exports.id = 5991;
module.exports.class = ExchangeStartOkMountWithOutPaddockMessage;