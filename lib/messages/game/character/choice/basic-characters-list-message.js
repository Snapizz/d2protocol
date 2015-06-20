var d2com = require('d2com'),
  BaseMessage = require('./basic-characters-list-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var BasicCharactersListMessage = function() {
  this.characters = [];
};

util.inherits(BasicCharactersListMessage, BaseMessage);

BasicCharactersListMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicCharactersListMessage(output);
};

BasicCharactersListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicCharactersListMessage(input);
};

BasicCharactersListMessage.prototype.serializeAs_BasicCharactersListMessage = function(param1) {
  param1.writeShort(this.characters.length);
  var _loc2_ = 0;
  while (_loc2_ < this.characters.length) {
    param1.writeShort((this.characters[_loc2_]).getTypeId());
    (this.characters[_loc2_]).serialize(param1);
    _loc2_++;
  }
};

BasicCharactersListMessage.prototype.deserializeAs_BasicCharactersListMessage = function(param1) {
  var _loc4_ = 0;
  var _loc5_ = null;
  var _loc2_ = param1.readUnsignedShort();
  var _loc3_ = 0;
  while (_loc3_ < _loc2_) {
    _loc4_ = param1.readUnsignedShort();
    _loc5_ = ProtocolTypeManager.getInstance(CharacterBaseInformations, _loc4_);
    _loc5_.deserialize(param1);
    this.characters.push(_loc5_);
    _loc3_++;
  }
};

BasicCharactersListMessage.prototype.getMessageId = function() {
  return 6475;
};

BasicCharactersListMessage.prototype.getClassName = function() {
  return 'BasicCharactersListMessage';
};

module.exports.id = 6475;
module.exports.class = BasicCharactersListMessage;
module.exports.getInstance = function() {
  return new BasicCharactersListMessage();
};