var BaseMessage = require('./item.js').class,
  util = require('util');

var ObjectItemToSell = function() {
  this.objectGID = 0;
  this.effects = [];
  this.objectUID = 0;
  this.quantity = 0;
  this.objectPrice = 0;
};

util.inherits(ObjectItemToSell, BaseMessage);

ObjectItemToSell.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemToSell(output);
};

ObjectItemToSell.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemToSell(input);
};

ObjectItemToSell.prototype.serializeAs_ObjectItemToSell = function(output) {
  this.serializeAs_Item(output);
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element objectGID.")));
  };
  output.writeVarShort(this.objectGID);
  output.writeShort(this.effects.length);
  var _i2;
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
};

ObjectItemToSell.prototype.deserializeAs_ObjectItemToSell = function(input) {
  var _id2;
  var _item2;
  this.deserialize(input);
  this.objectGID = input.readVarUhShort();
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element of ObjectItemToSell.objectGID.")));
  };
  var _effectsLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _effectsLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(ObjectEffect, _id2);
    _item2.deserialize(input);
    this.effects.push(_item2);
    _i2++;
  };
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectItemToSell.objectUID.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectItemToSell.quantity.")));
  };
  this.objectPrice = input.readVarUhInt();
  if (this.objectPrice < 0) {
    throw (new Error((("Forbidden value (" + this.objectPrice) + ") on element of ObjectItemToSell.objectPrice.")));
  };
};

ObjectItemToSell.prototype.getTypeId = function() {
  return 120;
};

ObjectItemToSell.prototype.getClassName = function() {
  return 'ObjectItemToSell';
};

module.exports.id = 120;
module.exports.class = ObjectItemToSell;