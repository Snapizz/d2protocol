var BaseMessage = require('./item.js').class,
  util = require('util');

var ObjectItemToSellInHumanVendorShop = function() {
  this.objectGID = 0;
  this.effects = [];
  this.objectUID = 0;
  this.quantity = 0;
  this.objectPrice = 0;
  this.publicPrice = 0;
};

util.inherits(ObjectItemToSellInHumanVendorShop, BaseMessage);

ObjectItemToSellInHumanVendorShop.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemToSellInHumanVendorShop(output);
};

ObjectItemToSellInHumanVendorShop.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemToSellInHumanVendorShop(input);
};

ObjectItemToSellInHumanVendorShop.prototype.serializeAs_ObjectItemToSellInHumanVendorShop = function(output) {
  this.serializeAs_Item(output);
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element objectGID.")));
  };
  output.writeVarShort(this.objectGID);
  output.writeShort(this.effects.length);
  var _i2 = 0;
  while (_i2 < this.effects.length) {
    output.writeShort((this.effects[_i2]).getTypeId());
    (this.effects[_i2]).serialize(output);
    _i2++;
  };
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
  if (this.objectPrice < 0) {
    throw (new Error((("Forbidden value (" + this.objectPrice) + ") on element objectPrice.")));
  };
  output.writeVarInt(this.objectPrice);
  if (this.publicPrice < 0) {
    throw (new Error((("Forbidden value (" + this.publicPrice) + ") on element publicPrice.")));
  };
  output.writeVarInt(this.publicPrice);
};

ObjectItemToSellInHumanVendorShop.prototype.deserializeAs_ObjectItemToSellInHumanVendorShop = function(input) {
  var _id2 = 0;
  var _item2;
  this.deserialize(input);
  this.objectGID = input.readVarUhShort();
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element of ObjectItemToSellInHumanVendorShop.objectGID.")));
  };
  var _effectsLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _effectsLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(ObjectEffect, _id2);
    _item2.deserialize(input);
    this.effects.push(_item2);
    _i2++;
  };
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectItemToSellInHumanVendorShop.objectUID.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectItemToSellInHumanVendorShop.quantity.")));
  };
  this.objectPrice = input.readVarUhInt();
  if (this.objectPrice < 0) {
    throw (new Error((("Forbidden value (" + this.objectPrice) + ") on element of ObjectItemToSellInHumanVendorShop.objectPrice.")));
  };
  this.publicPrice = input.readVarUhInt();
  if (this.publicPrice < 0) {
    throw (new Error((("Forbidden value (" + this.publicPrice) + ") on element of ObjectItemToSellInHumanVendorShop.publicPrice.")));
  };
};

ObjectItemToSellInHumanVendorShop.prototype.getTypeId = function() {
  return 359;
};

ObjectItemToSellInHumanVendorShop.prototype.getClassName = function() {
  return 'ObjectItemToSellInHumanVendorShop';
};

module.exports.id = 359;
module.exports.class = ObjectItemToSellInHumanVendorShop;