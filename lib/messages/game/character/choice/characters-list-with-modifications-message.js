var d2com = require('d2com'),
  BaseMessage = require('./characters-list-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharactersListWithModificationsMessage = function() {
  this.charactersToRecolor = [];
  this.charactersToRename = [];
  this.unusableCharacters = [];
  this.charactersToRelook = [];
};

util.inherits(CharactersListWithModificationsMessage, BaseMessage);

CharactersListWithModificationsMessage.prototype.serialize = function(output) {
  this.serializeAs_CharactersListWithModificationsMessage(output);
};

CharactersListWithModificationsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharactersListWithModificationsMessage(input);
};

CharactersListWithModificationsMessage.prototype.serializeAs_CharactersListWithModificationsMessage = function(output) {
  this.serializeAs_CharactersListMessage(output);
  output.writeShort(this.charactersToRecolor.length);
  var _i1 = 0;
  while (_i1 < this.charactersToRecolor.length) {
    (this.charactersToRecolor[_i1]).serializeAs_CharacterToRecolorInformation(output);
    _i1++;
  };
  output.writeShort(this.charactersToRename.length);
  var _i2 = 0;
  while (_i2 < this.charactersToRename.length) {
    output.writeInt(this.charactersToRename[_i2]);
    _i2++;
  };
  output.writeShort(this.unusableCharacters.length);
  var _i3 = 0;
  while (_i3 < this.unusableCharacters.length) {
    output.writeInt(this.unusableCharacters[_i3]);
    _i3++;
  };
  output.writeShort(this.charactersToRelook.length);
  var _i4 = 0;
  while (_i4 < this.charactersToRelook.length) {
    (this.charactersToRelook[_i4]).serializeAs_CharacterToRelookInformation(output);
    _i4++;
  };
};

CharactersListWithModificationsMessage.prototype.deserializeAs_CharactersListWithModificationsMessage = function(input) {
  var _item1;
  var _val2 = 0;
  var _val3 = 0;
  var _item4;
  this.deserialize(input);
  var _charactersToRecolorLen = input.readUnsignedShort();
  var _i1 = 0;
  while (_i1 < _charactersToRecolorLen) {
    _item1 = new CharacterToRecolorInformation();
    _item1.deserialize(input);
    this.charactersToRecolor.push(_item1);
    _i1++;
  };
  var _charactersToRenameLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _charactersToRenameLen) {
    _val2 = input.readInt();
    this.charactersToRename.push(_val2);
    _i2++;
  };
  var _unusableCharactersLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _unusableCharactersLen) {
    _val3 = input.readInt();
    this.unusableCharacters.push(_val3);
    _i3++;
  };
  var _charactersToRelookLen = input.readUnsignedShort();
  var _i4 = 0;
  while (_i4 < _charactersToRelookLen) {
    _item4 = new CharacterToRelookInformation();
    _item4.deserialize(input);
    this.charactersToRelook.push(_item4);
    _i4++;
  };
};

CharactersListWithModificationsMessage.prototype.getMessageId = function() {
  return 6120;
};

CharactersListWithModificationsMessage.prototype.getClassName = function() {
  return 'CharactersListWithModificationsMessage';
};

module.exports.id = 6120;
module.exports.class = CharactersListWithModificationsMessage;