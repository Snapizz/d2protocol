var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var RemodelingInformation = require('../../../../types/game/character/choice/remodeling-information.js').class;

var CharacterReplayWithRemodelRequestMessage = function() {
  this.remodel = new RemodelingInformation();
};

util.inherits(CharacterReplayWithRemodelRequestMessage, BaseMessage);

CharacterReplayWithRemodelRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterReplayWithRemodelRequestMessage(output);
};

CharacterReplayWithRemodelRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterReplayWithRemodelRequestMessage(input);
};

CharacterReplayWithRemodelRequestMessage.prototype.serializeAs_CharacterReplayWithRemodelRequestMessage = function(param1) {
  this.serializeAs_CharacterReplayRequestMessage(param1);
  this.remodel.serializeAs_RemodelingInformation(param1);
};

CharacterReplayWithRemodelRequestMessage.prototype.deserializeAs_CharacterReplayWithRemodelRequestMessage = function(param1) {
  this.deserialize(param1);
  this.remodel = new RemodelingInformation();
  this.remodel.deserialize(param1);
};

CharacterReplayWithRemodelRequestMessage.prototype.getMessageId = function() {
  return 6551;
};

CharacterReplayWithRemodelRequestMessage.prototype.getClassName = function() {
  return 'CharacterReplayWithRemodelRequestMessage';
};

module.exports.id = 6551;
module.exports.class = CharacterReplayWithRemodelRequestMessage;
module.exports.getInstance = function() {
  return new CharacterReplayWithRemodelRequestMessage();
};