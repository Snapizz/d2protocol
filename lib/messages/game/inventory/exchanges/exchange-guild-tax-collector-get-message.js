var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeGuildTaxCollectorGetMessage = function() {
  this.collectorName = "";
  this.worldX = 0;
  this.worldY = 0;
  this.mapId = 0;
  this.subAreaId = 0;
  this.userName = "";
  this.experience = 0;
  this.objectsInfos = [];
};

util.inherits(ExchangeGuildTaxCollectorGetMessage, BaseMessage);

ExchangeGuildTaxCollectorGetMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeGuildTaxCollectorGetMessage(output);
};

ExchangeGuildTaxCollectorGetMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeGuildTaxCollectorGetMessage(input);
};

ExchangeGuildTaxCollectorGetMessage.prototype.serializeAs_ExchangeGuildTaxCollectorGetMessage = function(output) {
  output.writeUTF(this.collectorName);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
  output.writeInt(this.mapId);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
  output.writeUTF(this.userName);
  if ((((this.experience < -9007199254740992)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element experience.")));
  };
  output.writeDouble(this.experience);
  output.writeShort(this.objectsInfos.length);
  var _i8;
  while (_i8 < this.objectsInfos.length) {
    (this.objectsInfos[_i8]).serializeAs_ObjectItemQuantity(output);
    _i8++;
  };
};

ExchangeGuildTaxCollectorGetMessage.prototype.deserializeAs_ExchangeGuildTaxCollectorGetMessage = function(input) {
  var _item8;
  this.collectorName = input.readUTF();
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of ExchangeGuildTaxCollectorGetMessage.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of ExchangeGuildTaxCollectorGetMessage.worldY.")));
  };
  this.mapId = input.readInt();
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of ExchangeGuildTaxCollectorGetMessage.subAreaId.")));
  };
  this.userName = input.readUTF();
  this.experience = input.readDouble();
  if ((((this.experience < -9007199254740992)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element of ExchangeGuildTaxCollectorGetMessage.experience.")));
  };
  var _objectsInfosLen = input.readUnsignedShort();
  var _i8;
  while (_i8 < _objectsInfosLen) {
    _item8 = new ObjectItemQuantity();
    _item8.deserialize(input);
    this.objectsInfos.push(_item8);
    _i8++;
  };
};

ExchangeGuildTaxCollectorGetMessage.prototype.getMessageId = function() {
  return 5762;
};

ExchangeGuildTaxCollectorGetMessage.prototype.getClassName = function() {
  return 'ExchangeGuildTaxCollectorGetMessage';
};

module.exports.id = 5762;
module.exports.class = ExchangeGuildTaxCollectorGetMessage;