var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CharacterSelectedSuccessMessage = function() {
  this.infos;
  this.isCollectingStats = false;
};

util.inherits(CharacterSelectedSuccessMessage, BaseMessage);

CharacterSelectedSuccessMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectedSuccessMessage(output);
};

CharacterSelectedSuccessMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectedSuccessMessage(input);
};

CharacterSelectedSuccessMessage.prototype.serializeAs_CharacterSelectedSuccessMessage = function(output) {
  this.infos.serializeAs_CharacterBaseInformations(output);
  output.writeBoolean(this.isCollectingStats);
};

CharacterSelectedSuccessMessage.prototype.deserializeAs_CharacterSelectedSuccessMessage = function(input) {
  this.infos = new CharacterBaseInformations();
  this.infos.deserialize(input);
  this.isCollectingStats = input.readBoolean();
};

CharacterSelectedSuccessMessage.prototype.getMessageId = function() {
  return 153;
};

CharacterSelectedSuccessMessage.prototype.getClassName = function() {
  return 'CharacterSelectedSuccessMessage';
};

module.exports.id = 153;
module.exports.class = CharacterSelectedSuccessMessage;