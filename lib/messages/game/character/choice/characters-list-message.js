var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

CharactersListMessage.prototype.serializeAs_CharactersListMessage = function(param1) {
  this.serializeAs_BasicCharactersListMessage(param1);
  param1.writeBoolean(this.hasStartupActions);
};

CharactersListMessage.prototype.deserializeAs_CharactersListMessage = function(param1) {
  this.deserialize(param1);
  this.hasStartupActions = param1.readBoolean();
};

CharactersListMessage.prototype.getMessageId = function() {
  return 151;
};

CharactersListMessage.prototype.getClassName = function() {
  return 'CharactersListMessage';
};

module.exports.id = 151;
module.exports.class = CharactersListMessage;