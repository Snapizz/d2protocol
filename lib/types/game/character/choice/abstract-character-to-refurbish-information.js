var BaseMessage = require('../abstract-character-information.js').class,
  util = require('util');

var AbstractCharacterToRefurbishInformation = function() {
  this.colors = [];
  this.cosmeticId = 0;
};

util.inherits(AbstractCharacterToRefurbishInformation, BaseMessage);

AbstractCharacterToRefurbishInformation.prototype.serialize = function(output) {
  this.serializeAs_AbstractCharacterToRefurbishInformation(output);
};

AbstractCharacterToRefurbishInformation.prototype.deserialize = function(input) {
  this.deserializeAs_AbstractCharacterToRefurbishInformation(input);
};

AbstractCharacterToRefurbishInformation.prototype.serializeAs_AbstractCharacterToRefurbishInformation = function(output) {
  this.serializeAs_AbstractCharacterInformation(output);
  output.writeShort(this.colors.length);
  var _i1 = 0;
  while (_i1 < this.colors.length) {
    output.writeInt(this.colors[_i1]);
    _i1++;
  };
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element cosmeticId.")));
  };
  output.writeVarInt(this.cosmeticId);
};

AbstractCharacterToRefurbishInformation.prototype.deserializeAs_AbstractCharacterToRefurbishInformation = function(input) {
  var _val1 = 0;
  this.deserialize(input);
  var _colorsLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _colorsLen) {
    _val1 = input.readInt();
    this.colors.push(_val1);
    _i1++;
  };
  this.cosmeticId = input.readVarUhInt();
  if (this.cosmeticId < 0) {
    throw (new Error((("Forbidden value (" + this.cosmeticId) + ") on element of AbstractCharacterToRefurbishInformation.cosmeticId.")));
  };
};

AbstractCharacterToRefurbishInformation.prototype.getTypeId = function() {
  return 475;
};

AbstractCharacterToRefurbishInformation.prototype.getClassName = function() {
  return 'AbstractCharacterToRefurbishInformation';
};

module.exports.id = 475;
module.exports.class = AbstractCharacterToRefurbishInformation;