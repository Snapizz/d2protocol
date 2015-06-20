var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var CharacterSelectedErrorMessage = function() {

};

util.inherits(CharacterSelectedErrorMessage, BaseMessage);

CharacterSelectedErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectedErrorMessage(output);
};

CharacterSelectedErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectedErrorMessage(input);
};

CharacterSelectedErrorMessage.prototype.serializeAs_CharacterSelectedErrorMessage = function(param1) {

};

CharacterSelectedErrorMessage.prototype.deserializeAs_CharacterSelectedErrorMessage = function(param1) {

};

CharacterSelectedErrorMessage.prototype.getMessageId = function() {
  return 5836;
};

CharacterSelectedErrorMessage.prototype.getClassName = function() {
  return 'CharacterSelectedErrorMessage';
};

module.exports.id = 5836;
module.exports.class = CharacterSelectedErrorMessage;
module.exports.getInstance = function() {
  return new CharacterSelectedErrorMessage();
};