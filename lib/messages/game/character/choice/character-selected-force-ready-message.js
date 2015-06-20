var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var CharacterSelectedForceReadyMessage = function() {

};

util.inherits(CharacterSelectedForceReadyMessage, BaseMessage);

CharacterSelectedForceReadyMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterSelectedForceReadyMessage(output);
};

CharacterSelectedForceReadyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterSelectedForceReadyMessage(input);
};

CharacterSelectedForceReadyMessage.prototype.serializeAs_CharacterSelectedForceReadyMessage = function(param1) {

};

CharacterSelectedForceReadyMessage.prototype.deserializeAs_CharacterSelectedForceReadyMessage = function(param1) {

};

CharacterSelectedForceReadyMessage.prototype.getMessageId = function() {
  return 6072;
};

CharacterSelectedForceReadyMessage.prototype.getClassName = function() {
  return 'CharacterSelectedForceReadyMessage';
};

module.exports.id = 6072;
module.exports.class = CharacterSelectedForceReadyMessage;
module.exports.getInstance = function() {
  return new CharacterSelectedForceReadyMessage();
};