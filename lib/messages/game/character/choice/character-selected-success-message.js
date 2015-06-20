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

CharacterSelectedSuccessMessage.prototype.serializeAs_CharacterSelectedSuccessMessage = function(param1) {
  this.infos.serializeAs_CharacterBaseInformations(param1);
  param1.writeBoolean(this.isCollectingStats);
};

CharacterSelectedSuccessMessage.prototype.deserializeAs_CharacterSelectedSuccessMessage = function(param1) {
  this.infos = new CharacterBaseInformations();
  this.infos.deserialize(param1);
  this.isCollectingStats = param1.readBoolean();
};

CharacterSelectedSuccessMessage.prototype.getMessageId = function() {
  return 153;
};

CharacterSelectedSuccessMessage.prototype.getClassName = function() {
  return 'CharacterSelectedSuccessMessage';
};

module.exports.id = 153;
module.exports.class = CharacterSelectedSuccessMessage;