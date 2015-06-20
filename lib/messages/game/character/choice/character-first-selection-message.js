var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var CharacterFirstSelectionMessage = function() {
  this.doTutorial = false;
};

util.inherits(CharacterFirstSelectionMessage, BaseMessage);

CharacterFirstSelectionMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterFirstSelectionMessage(output);
};

CharacterFirstSelectionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterFirstSelectionMessage(input);
};

CharacterFirstSelectionMessage.prototype.serializeAs_CharacterFirstSelectionMessage = function(param1) {
  this.serializeAs_CharacterSelectionMessage(param1);
  param1.writeBoolean(this.doTutorial);
};

CharacterFirstSelectionMessage.prototype.deserializeAs_CharacterFirstSelectionMessage = function(param1) {
  this.deserialize(param1);
  this.doTutorial = param1.readBoolean();
};

CharacterFirstSelectionMessage.prototype.getMessageId = function() {
  return 6084;
};

CharacterFirstSelectionMessage.prototype.getClassName = function() {
  return 'CharacterFirstSelectionMessage';
};

module.exports.id = 6084;
module.exports.class = CharacterFirstSelectionMessage;
module.exports.getInstance = function() {
  return new CharacterFirstSelectionMessage();
};