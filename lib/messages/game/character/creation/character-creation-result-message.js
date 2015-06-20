var d2com = require('d2com'),
  BaseMessage = require('./character-creation-result-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var CharacterCreationResultMessage = function() {
  this.result = 1;
};

util.inherits(CharacterCreationResultMessage, BaseMessage);

CharacterCreationResultMessage.prototype.serialize = function(output) {
  this.serializeAs_CharacterCreationResultMessage(output);
};

CharacterCreationResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterCreationResultMessage(input);
};

CharacterCreationResultMessage.prototype.serializeAs_CharacterCreationResultMessage = function(param1) {
  param1.writeByte(this.result);
};

CharacterCreationResultMessage.prototype.deserializeAs_CharacterCreationResultMessage = function(param1) {
  this.result = param1.readByte();
  if (this.result < 0) {
    throw new Error("Forbidden value (" + this.result + ") on element of CharacterCreationResultMessage.result.");
  } else {
    return;
  }
};

CharacterCreationResultMessage.prototype.getMessageId = function() {
  return 161;
};

CharacterCreationResultMessage.prototype.getClassName = function() {
  return 'CharacterCreationResultMessage';
};

module.exports.id = 161;
module.exports.class = CharacterCreationResultMessage;
module.exports.getInstance = function() {
  return new CharacterCreationResultMessage();
};