var BaseMessage = require('./item.js').class,
  util = require('util');

var ObjectItem = function() {
  this.position = 63;
  this.objectGID = 0;
  this.effects = [];
  this.objectUID = 0;
  this.quantity = 0;
};

util.inherits(ObjectItem, BaseMessage);

ObjectItem.prototype.serialize = function(output) {
  this.serializeAs_ObjectItem(output);
};

ObjectItem.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItem(input);
};

ObjectItem.prototype.serializeAs_ObjectItem = function(output) {
  this.serializeAs_Item(output);
  output.writeByte(this.position);
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element objectGID.")));
  };
  output.writeVarShort(this.objectGID);
  output.writeShort(this.effects.length);
  var _i3;
  while (_i3 < this.effects.length) {
    output.writeShort((this.effects[_i3]).getTypeId());
    (this.effects[_i3]).serialize(output);
    _i3++;
  };
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ObjectItem.prototype.deserializeAs_ObjectItem = function(input) {
  var _id3;
  var _item3;
  this.deserialize(input);
  this.position = input.readUnsignedByte();
  if ((((this.position < 0)) || ((this.position > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element of ObjectItem.position.")));
  };
  this.objectGID = input.readVarUhShort();
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element of ObjectItem.objectGID.")));
  };
  var _effectsLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _effectsLen) {
    _id3 = input.readUnsignedShort();
    _item3 = ProtocolTypeManager.getInstance(ObjectEffect, _id3);
    _item3.deserialize(input);
    this.effects.push(_item3);
    _i3++;
  };
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectItem.objectUID.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectItem.quantity.")));
  };
};

ObjectItem.prototype.getTypeId = function() {
  return 37;
};

ObjectItem.prototype.getClassName = function() {
  return 'ObjectItem';
};

module.exports.id = 37;
module.exports.class = ObjectItem;