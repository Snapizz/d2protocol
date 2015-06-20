var BaseMessage = require('./item.js').class,
  util = require('util');

var ObjectItemMinimalInformation = function() {
  this.objectGID = 0;
  this.effects = [];
};

util.inherits(ObjectItemMinimalInformation, BaseMessage);

ObjectItemMinimalInformation.prototype.serialize = function(output) {
  this.serializeAs_ObjectItemMinimalInformation(output);
};

ObjectItemMinimalInformation.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectItemMinimalInformation(input);
};

ObjectItemMinimalInformation.prototype.serializeAs_ObjectItemMinimalInformation = function(output) {
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
};

ObjectItemMinimalInformation.prototype.deserializeAs_ObjectItemMinimalInformation = function(input) {
  var _id2 = 0;
  var _item2;
  this.deserialize(input);
  this.objectGID = input.readVarUhShort();
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element of ObjectItemMinimalInformation.objectGID.")));
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
};

ObjectItemMinimalInformation.prototype.getTypeId = function() {
  return 124;
};

ObjectItemMinimalInformation.prototype.getClassName = function() {
  return 'ObjectItemMinimalInformation';
};

module.exports.id = 124;
module.exports.class = ObjectItemMinimalInformation;