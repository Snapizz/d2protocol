var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeStartOkNpcShopMessage = function() {
  this.npcSellerId = 0;
  this.tokenId = 0;
  this.objectsInfos = [];
};

util.inherits(ExchangeStartOkNpcShopMessage, BaseMessage);

ExchangeStartOkNpcShopMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeStartOkNpcShopMessage(output);
};

ExchangeStartOkNpcShopMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeStartOkNpcShopMessage(input);
};

ExchangeStartOkNpcShopMessage.prototype.serializeAs_ExchangeStartOkNpcShopMessage = function(output) {
  output.writeInt(this.npcSellerId);
  if (this.tokenId < 0) {
    throw (new Error((("Forbidden value (" + this.tokenId) + ") on element tokenId.")));
  };
  output.writeVarShort(this.tokenId);
  output.writeShort(this.objectsInfos.length);
  var _i3 = 0;
  while (_i3 < this.objectsInfos.length) {
    (this.objectsInfos[_i3]).serializeAs_ObjectItemToSellInNpcShop(output);
    _i3++;
  };
};

ExchangeStartOkNpcShopMessage.prototype.deserializeAs_ExchangeStartOkNpcShopMessage = function(input) {
  var _item3;
  this.npcSellerId = input.readInt();
  this.tokenId = input.readVarUhShort();
  if (this.tokenId < 0) {
    throw (new Error((("Forbidden value (" + this.tokenId) + ") on element of ExchangeStartOkNpcShopMessage.tokenId.")));
  };
  var _objectsInfosLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _objectsInfosLen) {
    _item3 = new ObjectItemToSellInNpcShop();
    _item3.deserialize(input);
    this.objectsInfos.push(_item3);
    _i3++;
  };
};

ExchangeStartOkNpcShopMessage.prototype.getMessageId = function() {
  return 5761;
};

ExchangeStartOkNpcShopMessage.prototype.getClassName = function() {
  return 'ExchangeStartOkNpcShopMessage';
};

module.exports.id = 5761;
module.exports.class = ExchangeStartOkNpcShopMessage;