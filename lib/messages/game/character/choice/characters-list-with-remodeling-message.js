var d2com = require('d2com'),
  BaseMessage = require('./characters-list-with-remodeling-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var CharactersListWithRemodelingMessage = function() {
  this.charactersToRemodel = [];
};

util.inherits(CharactersListWithRemodelingMessage, BaseMessage);

CharactersListWithRemodelingMessage.prototype.serialize = function(output) {
  this.serializeAs_CharactersListWithRemodelingMessage(output);
};

CharactersListWithRemodelingMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharactersListWithRemodelingMessage(input);
};

CharactersListWithRemodelingMessage.prototype.serializeAs_CharactersListWithRemodelingMessage = function(param1) {
  this.serializeAs_CharactersListMessage(param1);
  param1.writeShort(this.charactersToRemodel.length);
  var _loc2_ = 0;
  while (_loc2_ < this.charactersToRemodel.length) {
    (this.charactersToRemodel[_loc2_]).serializeAs_CharacterToRemodelInformations(param1);
    _loc2_++;
  }
};

CharactersListWithRemodelingMessage.prototype.deserializeAs_CharactersListWithRemodelingMessage = function(param1) {
  var _loc4_ = null;
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = new CharacterToRemodelInformations();
    _loc4_.deserialize(param1);
    this.charactersToRemodel.push(_loc4_);
    _loc3_++;
  }
};

CharactersListWithRemodelingMessage.prototype.getMessageId = function() {
  return 6550;
};

CharactersListWithRemodelingMessage.prototype.getClassName = function() {
  return 'CharactersListWithRemodelingMessage';
};

module.exports.id = 6550;
module.exports.class = CharactersListWithRemodelingMessage;
module.exports.getInstance = function() {
  return new CharactersListWithRemodelingMessage();
};