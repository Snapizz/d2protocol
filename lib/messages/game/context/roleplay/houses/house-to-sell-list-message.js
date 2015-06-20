var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseToSellListMessage = function() {
  this.pageIndex = 0;
  this.totalPage = 0;
  this.houseList = [];
};

util.inherits(HouseToSellListMessage, BaseMessage);

HouseToSellListMessage.prototype.serialize = function(output) {
  this.serializeAs_HouseToSellListMessage(output);
};

HouseToSellListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HouseToSellListMessage(input);
};

HouseToSellListMessage.prototype.serializeAs_HouseToSellListMessage = function(output) {
  if (this.pageIndex < 0) {
    throw (new Error((("Forbidden value (" + this.pageIndex) + ") on element pageIndex.")));
  };
  output.writeVarShort(this.pageIndex);
  if (this.totalPage < 0) {
    throw (new Error((("Forbidden value (" + this.totalPage) + ") on element totalPage.")));
  };
  output.writeVarShort(this.totalPage);
  output.writeShort(this.houseList.length);
  var _i3 = 0;
  while (_i3 < this.houseList.length) {
    (this.houseList[_i3]).serializeAs_HouseInformationsForSell(output);
    _i3++;
  };
};

HouseToSellListMessage.prototype.deserializeAs_HouseToSellListMessage = function(input) {
  var _item3;
  this.pageIndex = input.readVarUhShort();
  if (this.pageIndex < 0) {
    throw (new Error((("Forbidden value (" + this.pageIndex) + ") on element of HouseToSellListMessage.pageIndex.")));
  };
  this.totalPage = input.readVarUhShort();
  if (this.totalPage < 0) {
    throw (new Error((("Forbidden value (" + this.totalPage) + ") on element of HouseToSellListMessage.totalPage.")));
  };
  var _houseListLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _houseListLen) {
    _item3 = new HouseInformationsForSell();
    _item3.deserialize(input);
    this.houseList.push(_item3);
    _i3++;
  };
};

HouseToSellListMessage.prototype.getMessageId = function() {
  return 6140;
};

HouseToSellListMessage.prototype.getClassName = function() {
  return 'HouseToSellListMessage';
};

module.exports.id = 6140;
module.exports.class = HouseToSellListMessage;