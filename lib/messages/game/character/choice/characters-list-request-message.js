var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

CharactersListRequestMessage.prototype.serializeAs_CharactersListRequestMessage = function(output) {

};

CharactersListRequestMessage.prototype.deserializeAs_CharactersListRequestMessage = function(input) {

};

CharactersListRequestMessage.prototype.getMessageId = function() {
  return 150;
};

CharactersListRequestMessage.prototype.getClassName = function() {
  return 'CharactersListRequestMessage';
};

module.exports.id = 150;
module.exports.class = CharactersListRequestMessage;