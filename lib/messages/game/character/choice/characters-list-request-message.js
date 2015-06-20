var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var CharactersListRequestMessage = function() {

};

util.inherits(CharactersListRequestMessage, BaseMessage);

CharactersListRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharactersListRequestMessage(output);
};

CharactersListRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharactersListRequestMessage(input);
};

CharactersListRequestMessage.prototype.serializeAs_CharactersListRequestMessage = function(param1) {

};

CharactersListRequestMessage.prototype.deserializeAs_CharactersListRequestMessage = function(param1) {

};

CharactersListRequestMessage.prototype.getMessageId = function() {
  return 150;
};

CharactersListRequestMessage.prototype.getClassName = function() {
  return 'CharactersListRequestMessage';
};

module.exports.id = 150;
module.exports.class = CharactersListRequestMessage;
module.exports.getInstance = function() {
  return new CharactersListRequestMessage();
};