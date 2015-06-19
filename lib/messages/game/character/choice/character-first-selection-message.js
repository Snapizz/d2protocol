var d2com = require('d2com'),
  BaseMessage = require('./character-selection-message.js').class,
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

CharacterFirstSelectionMessage.prototype.serializeAs_CharacterFirstSelectionMessage = function(output) {
  this.serializeAs_CharacterSelectionMessage(output);
  output.writeBoolean(this.doTutorial);
};

CharacterFirstSelectionMessage.prototype.deserializeAs_CharacterFirstSelectionMessage = function(input) {
  this.deserialize(input);
  this.doTutorial = input.readBoolean();
};

CharacterFirstSelectionMessage.prototype.getMessageId = function() {
  return 6084;
};

CharacterFirstSelectionMessage.prototype.getClassName = function() {
  return 'CharacterFirstSelectionMessage';
};

module.exports.id = 6084;
module.exports.class = CharacterFirstSelectionMessage;