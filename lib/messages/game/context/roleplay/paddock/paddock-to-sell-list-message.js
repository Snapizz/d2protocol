var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PaddockToSellListMessage = function() {
  this.pageIndex = 0;
  this.totalPage = 0;
  this.paddockList = [];
};

util.inherits(PaddockToSellListMessage, BaseMessage);

PaddockToSellListMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockToSellListMessage(output);
};

PaddockToSellListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockToSellListMessage(input);
};

PaddockToSellListMessage.prototype.serializeAs_PaddockToSellListMessage = function(output) {
  if (this.pageIndex < 0) {
    throw (new Error((("Forbidden value (" + this.pageIndex) + ") on element pageIndex.")));
  };
  output.writeVarShort(this.pageIndex);
  if (this.totalPage < 0) {
    throw (new Error((("Forbidden value (" + this.totalPage) + ") on element totalPage.")));
  };
  output.writeVarShort(this.totalPage);
  output.writeShort(this.paddockList.length);
  var _i3 = 0;
  while (_i3 < this.paddockList.length) {
    (this.paddockList[_i3]).serializeAs_PaddockInformationsForSell(output);
    _i3++;
  };
};

PaddockToSellListMessage.prototype.deserializeAs_PaddockToSellListMessage = function(input) {
  var _item3;
  this.pageIndex = input.readVarUhShort();
  if (this.pageIndex < 0) {
    throw (new Error((("Forbidden value (" + this.pageIndex) + ") on element of PaddockToSellListMessage.pageIndex.")));
  };
  this.totalPage = input.readVarUhShort();
  if (this.totalPage < 0) {
    throw (new Error((("Forbidden value (" + this.totalPage) + ") on element of PaddockToSellListMessage.totalPage.")));
  };
  var _paddockListLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _paddockListLen) {
    _item3 = new PaddockInformationsForSell();
    _item3.deserialize(input);
    this.paddockList.push(_item3);
    _i3++;
  };
};

PaddockToSellListMessage.prototype.getMessageId = function() {
  return 6138;
};

PaddockToSellListMessage.prototype.getClassName = function() {
  return 'PaddockToSellListMessage';
};

module.exports.id = 6138;
module.exports.class = PaddockToSellListMessage;