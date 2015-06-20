var d2com = require('d2com'),
  BaseMessage = require('./exchange-start-ok-mount-with-out-paddock-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkMountMessage = function() {
  this.paddockedMountsDescription = [];
};

util.inherits(ExchangeStartOkMountMessage, BaseMessage);

ExchangeStartOkMountMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkMountMessage(output);
};

ExchangeStartOkMountMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkMountMessage(input);
};

ExchangeStartOkMountMessage.prototype.serializeAs_ExchangeStartOkMountMessage = function(output) {
  this.serializeAs_ExchangeStartOkMountWithOutPaddockMessage(output);
  output.writeShort(this.paddockedMountsDescription.length);
  var _i1 = 0;
  while (_i1 < this.paddockedMountsDescription.length) {
    (this.paddockedMountsDescription[_i1]).serializeAs_MountClientData(output);
    _i1++;
  };
};

ExchangeStartOkMountMessage.prototype.deserializeAs_ExchangeStartOkMountMessage = function(input) {
  var _item1;
  this.deserialize(input);
  var _paddockedMountsDescriptionLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _paddockedMountsDescriptionLen) {
    _item1 = new MountClientData();
    _item1.deserialize(input);
    this.paddockedMountsDescription.push(_item1);
    _i1++;
  };
};

ExchangeStartOkMountMessage.prototype.getMessageId = function() {
  return 5979;
};

ExchangeStartOkMountMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkMountMessage';
};

module.exports.id = 5979;
module.exports.class = ExchangeStartOkMountMessage;