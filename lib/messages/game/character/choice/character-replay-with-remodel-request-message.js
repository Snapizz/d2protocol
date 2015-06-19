var d2com = require('d2com'),
  BaseMessage = require('../replay/character-replay-request-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterReplayWithRemodelRequestMessage = function() {
  this.remodel;
};

util.inherits(CharacterReplayWithRemodelRequestMessage, BaseMessage);

CharacterReplayWithRemodelRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterReplayWithRemodelRequestMessage(output);
};

CharacterReplayWithRemodelRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterReplayWithRemodelRequestMessage(input);
};

CharacterReplayWithRemodelRequestMessage.prototype.serializeAs_CharacterReplayWithRemodelRequestMessage = function(output) {
  this.serializeAs_CharacterReplayRequestMessage(output);
  this.remodel.serializeAs_RemodelingInformation(output);
};

CharacterReplayWithRemodelRequestMessage.prototype.deserializeAs_CharacterReplayWithRemodelRequestMessage = function(input) {
  this.deserialize(input);
  this.remodel = new RemodelingInformation();
  this.remodel.deserialize(input);
};

CharacterReplayWithRemodelRequestMessage.prototype.getMessageId = function() {
  return 6551;
};

CharacterReplayWithRemodelRequestMessage.prototype.getClassName = function() {
  return 'CharacterReplayWithRemodelRequestMessage';
};

module.exports.id = 6551;
module.exports.class = CharacterReplayWithRemodelRequestMessage;