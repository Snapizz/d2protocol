var d2com = require('d2com'),
  BaseMessage = require('./character-selection-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterSelectionWithRemodelMessage = function() {
  this.remodel;
};

util.inherits(CharacterSelectionWithRemodelMessage, BaseMessage);

CharacterSelectionWithRemodelMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectionWithRemodelMessage(output);
};

CharacterSelectionWithRemodelMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectionWithRemodelMessage(input);
};

CharacterSelectionWithRemodelMessage.prototype.serializeAs_CharacterSelectionWithRemodelMessage = function(output) {
  this.serializeAs_CharacterSelectionMessage(output);
  this.remodel.serializeAs_RemodelingInformation(output);
};

CharacterSelectionWithRemodelMessage.prototype.deserializeAs_CharacterSelectionWithRemodelMessage = function(input) {
  this.deserialize(input);
  this.remodel = new RemodelingInformation();
  this.remodel.deserialize(input);
};

CharacterSelectionWithRemodelMessage.prototype.getMessageId = function() {
  return 6549;
};

CharacterSelectionWithRemodelMessage.prototype.getClassName = function() {
  return 'CharacterSelectionWithRemodelMessage';
};

module.exports.id = 6549;
module.exports.class = CharacterSelectionWithRemodelMessage;