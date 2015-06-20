var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkTaxCollectorMessage = function() {
  this.collectorId = 0;
  this.objectsInfos = [];
  this.goldInfo = 0;
};

util.inherits(ExchangeStartOkTaxCollectorMessage, BaseMessage);

ExchangeStartOkTaxCollectorMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkTaxCollectorMessage(output);
};

ExchangeStartOkTaxCollectorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkTaxCollectorMessage(input);
};

ExchangeStartOkTaxCollectorMessage.prototype.serializeAs_ExchangeStartOkTaxCollectorMessage = function(output) {
  output.writeInt(this.collectorId);
  output.writeShort(this.objectsInfos.length);
  var _i2 = 0;
  while (_i2 < this.objectsInfos.length) {
    (this.objectsInfos[_i2]).serializeAs_ObjectItem(output);
    _i2++;
  };
  if (this.goldInfo < 0) {
    throw (new Error((("Forbidden value (" + this.goldInfo) + ") on element goldInfo.")));
  };
  output.writeVarInt(this.goldInfo);
};

ExchangeStartOkTaxCollectorMessage.prototype.deserializeAs_ExchangeStartOkTaxCollectorMessage = function(input) {
  var _item2;
  this.collectorId = input.readInt();
  var _objectsInfosLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _objectsInfosLen) {
    _item2 = new ObjectItem();
    _item2.deserialize(input);
    this.objectsInfos.push(_item2);
    _i2++;
  };
  this.goldInfo = input.readVarUhInt();
  if (this.goldInfo < 0) {
    throw (new Error((("Forbidden value (" + this.goldInfo) + ") on element of ExchangeStartOkTaxCollectorMessage.goldInfo.")));
  };
};

ExchangeStartOkTaxCollectorMessage.prototype.getMessageId = function() {
  return 5780;
};

ExchangeStartOkTaxCollectorMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkTaxCollectorMessage';
};

module.exports.id = 5780;
module.exports.class = ExchangeStartOkTaxCollectorMessage;