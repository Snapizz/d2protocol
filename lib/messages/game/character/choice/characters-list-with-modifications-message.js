var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_CharactersListMessage(param1);
  param1.writeShort(this.charactersToRecolor.length);
  var _loc2_ = 0;
  while (_loc2_ < this.charactersToRecolor.length) {
    (this.charactersToRecolor[_loc2_]).serializeAs_CharacterToRecolorInformation(param1);
    _loc2_++;
  }
  param1.writeShort(this.charactersToRename.length);
  var _loc3_ = 0;
  while (_loc3_ < this.charactersToRename.length) {
    param1.writeInt(this.charactersToRename[_loc3_]);
    _loc3_++;
  }
  param1.writeShort(this.unusableCharacters.length);
  var _loc4_ = 0;
  while (_loc4_ < this.unusableCharacters.length) {
    param1.writeInt(this.unusableCharacters[_loc4_]);
    _loc4_++;
  }
  param1.writeShort(this.charactersToRelook.length);
  var _loc5_ = 0;
  while (_loc5_ < this.charactersToRelook.length) {
    (this.charactersToRelook[_loc5_]).serializeAs_CharacterToRelookInformation(param1);
    _loc5_++;
  }
};

CharactersListWithModificationsMessage.prototype.deserializeAs_CharactersListWithModificationsMessage = function(input) {
  var _loc10_ = null;
  var _loc11_ = 0;
  var _loc12_ = 0;
  var _loc13_ = null;
  super.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc10_ = new CharacterToRecolorInformation();
    _loc10_.deserialize(param1);
    this.charactersToRecolor.push(_loc10_);
    _loc3_++;
  }
  var _loc4_ = param1.readUnsignedShort();
  var _loc5_ = 0;
  while (_loc5_ < _loc4_) {
    _loc11_ = param1.readInt();
    this.charactersToRename.push(_loc11_);
    _loc5_++;
  }
  var _loc6_ = param1.readUnsignedShort();
  var _loc7_ = 0;
  while (_loc7_ < _loc6_) {
    _loc12_ = param1.readInt();
    this.unusableCharacters.push(_loc12_);
    _loc7_++;
  }
  var _loc8_ = param1.readUnsignedShort();
  var _loc9_ = 0;
  while (_loc9_ < _loc8_) {
    _loc13_ = new CharacterToRelookInformation();
    _loc13_.deserialize(param1);
    this.charactersToRelook.push(_loc13_);
    _loc9_++;
  }
};

CharactersListWithModificationsMessage.prototype.getMessageId = function() {
  return 6120;
};

CharactersListWithModificationsMessage.prototype.getClassName = function() {
  return 'CharactersListWithModificationsMessage';
};

module.exports.id = 6120;
module.exports.class = CharactersListWithModificationsMessage;