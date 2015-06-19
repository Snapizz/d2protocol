var BaseMessage = require('./abstract-character-information.js').class,
  util = require('util');

var CharacterMinimalInformations = function() {
  this.level = 0;
  this.name = "";
};

util.inherits(CharacterMinimalInformations, BaseMessage);

CharacterMinimalInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalInformations(output);
};

CharacterMinimalInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalInformations(input);
};

CharacterMinimalInformations.prototype.serializeAs_CharacterMinimalInformations = function(output) {
  this.serializeAs_AbstractCharacterInformation(output);
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  output.writeUTF(this.name);
};

CharacterMinimalInformations.prototype.deserializeAs_CharacterMinimalInformations = function(input) {
  this.deserialize(input);
  this.level = input.readUnsignedByte();
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of CharacterMinimalInformations.level.")));
  };
  this.name = input.readUTF();
};

CharacterMinimalInformations.prototype.getTypeId = function() {
  return 110;
};

CharacterMinimalInformations.prototype.getClassName = function() {
  return 'CharacterMinimalInformations';
};

module.exports.id = 110;
module.exports.class = CharacterMinimalInformations;