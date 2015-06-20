var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  this.serializeAs_CharacterSelectionMessage(param1);
  this.remodel.serializeAs_RemodelingInformation(param1);
};

CharacterSelectionWithRemodelMessage.prototype.deserializeAs_CharacterSelectionWithRemodelMessage = function(input) {
  this.deserialize(param1);
  this.remodel = new RemodelingInformation();
  this.remodel.deserialize(param1);
};

CharacterSelectionWithRemodelMessage.prototype.getMessageId = function() {
  return 6549;
};

CharacterSelectionWithRemodelMessage.prototype.getClassName = function() {
  return 'CharacterSelectionWithRemodelMessage';
};

module.exports.id = 6549;
module.exports.class = CharacterSelectionWithRemodelMessage;