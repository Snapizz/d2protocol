var d2com = require('d2com'),
  BaseMessage = require('./character-selection-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterSelectionWithRenameMessage = function() {
  this.name = "";
};

util.inherits(CharacterSelectionWithRenameMessage, BaseMessage);

CharacterSelectionWithRenameMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectionWithRenameMessage(output);
};

CharacterSelectionWithRenameMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectionWithRenameMessage(input);
};

CharacterSelectionWithRenameMessage.prototype.serializeAs_CharacterSelectionWithRenameMessage = function(output) {
  this.serializeAs_CharacterSelectionMessage(output);
  output.writeUTF(this.name);
};

CharacterSelectionWithRenameMessage.prototype.deserializeAs_CharacterSelectionWithRenameMessage = function(input) {
  this.deserialize(input);
  this.name = input.readUTF();
};

CharacterSelectionWithRenameMessage.prototype.getMessageId = function() {
  return 6121;
};

CharacterSelectionWithRenameMessage.prototype.getClassName = function() {
  return 'CharacterSelectionWithRenameMessage';
};

module.exports.id = 6121;
module.exports.class = CharacterSelectionWithRenameMessage;