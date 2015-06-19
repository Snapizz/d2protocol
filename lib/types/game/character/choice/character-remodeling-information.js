var BaseMessage = require('../abstract-character-information.js').class,
  util = require('util');

var CharacterRemodelingInformation = function() {
  this.name = "";
  this.breed = 0;
  this.sex = false;
  this.cosmeticId = 0;
  this.colors = [];
};

util.inherits(CharacterRemodelingInformation, BaseMessage);

CharacterRemodelingInformation.prototype.serialize = function(output) {
  this.serializeAs_CharacterRemodelingInformation(output);
};

CharacterRemodelingInformation.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterRemodelingInformation(input);
};

CharacterRemodelingInformation.prototype.serializeAs_CharacterRemodelingInformation = function(output) {
  this.serializeAs_AbstractCharacterInformation(output);
  output.writeUTF(this.name);
  output.writeByte(this.breed);
  output.writeBoolean(this.sex);
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element cosmeticId.")));
  };
  output.writeVarShort(this.cosmeticId);
  output.writeShort(this.colors.length);
  var _i5;
  while (_i5 < this.colors.length) {
    output.writeInt(this.colors[_i5]);
    _i5++;
  };
};

CharacterRemodelingInformation.prototype.deserializeAs_CharacterRemodelingInformation = function(input) {
  var _val5;
  this.deserialize(input);
  this.name = input.readUTF();
  this.breed = input.readByte();
  this.sex = input.readBoolean();
  this.cosmeticId = input.readVarUhShort();
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element of CharacterRemodelingInformation.cosmeticId.")));
  };
  var _colorsLen = input.readUnsignedShort();
  var _i5;
  while (_i5 < _colorsLen) {
    _val5 = input.readInt();
    this.colors.push(_val5);
    _i5++;
  };
};

CharacterRemodelingInformation.prototype.getTypeId = function() {
  return 479;
};

CharacterRemodelingInformation.prototype.getClassName = function() {
  return 'CharacterRemodelingInformation';
};

module.exports.id = 479;
module.exports.class = CharacterRemodelingInformation;