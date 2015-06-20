var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharactersListErrorMessage = function() {

};

util.inherits(CharactersListErrorMessage, BaseMessage);

CharactersListErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_CharactersListErrorMessage(output);
};

CharactersListErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharactersListErrorMessage(input);
};

CharactersListErrorMessage.prototype.serializeAs_CharactersListErrorMessage = function(param1) {

};

CharactersListErrorMessage.prototype.deserializeAs_CharactersListErrorMessage = function(param1) {

};

CharactersListErrorMessage.prototype.getMessageId = function() {
  return 5545;
};

CharactersListErrorMessage.prototype.getClassName = function() {
  return 'CharactersListErrorMessage';
};

module.exports.id = 5545;
module.exports.class = CharactersListErrorMessage;