var d2com = require('d2com'),
  BaseMessage = require('./basic-characters-list-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharactersListMessage = function() {
  this.hasStartupActions = false;
};

util.inherits(CharactersListMessage, BaseMessage);

CharactersListMessage.prototype.serialize = function(output) {
  this.serializeAs_CharactersListMessage(output);
};

CharactersListMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharactersListMessage(input);
};

CharactersListMessage.prototype.serializeAs_CharactersListMessage = function(output) {
  this.serializeAs_BasicCharactersListMessage(output);
  output.writeBoolean(this.hasStartupActions);
};

CharactersListMessage.prototype.deserializeAs_CharactersListMessage = function(input) {
  this.deserialize(input);
  this.hasStartupActions = input.readBoolean();
};

CharactersListMessage.prototype.getMessageId = function() {
  return 151;
};

CharactersListMessage.prototype.getClassName = function() {
  return 'CharactersListMessage';
};

module.exports.id = 151;
module.exports.class = CharactersListMessage;