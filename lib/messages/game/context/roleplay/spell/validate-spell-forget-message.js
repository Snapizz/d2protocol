var d2com = require('d2com'),
  BaseMessage = require('./validate-spell-forget-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ValidateSpellForgetMessage = function() {
  this.spellId = 0;
};

util.inherits(ValidateSpellForgetMessage, BaseMessage);

ValidateSpellForgetMessage.prototype.serialize = function(output) {
  this.serializeAs_ValidateSpellForgetMessage(output);
};

ValidateSpellForgetMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ValidateSpellForgetMessage(input);
};

ValidateSpellForgetMessage.prototype.serializeAs_ValidateSpellForgetMessage = function(param1) {
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element spellId.");
  } else {
    param1.writeVarShort(this.spellId);
    return;
  }
};

ValidateSpellForgetMessage.prototype.deserializeAs_ValidateSpellForgetMessage = function(param1) {
  this.spellId = param1.readVarUhShort();
  if (this.spellId < 0) {
    throw new Error("Forbidden value (" + this.spellId + ") on element of ValidateSpellForgetMessage.spellId.");
  } else {
    return;
  }
};

ValidateSpellForgetMessage.prototype.getMessageId = function() {
  return 1700;
};

ValidateSpellForgetMessage.prototype.getClassName = function() {
  return 'ValidateSpellForgetMessage';
};

module.exports.id = 1700;
module.exports.class = ValidateSpellForgetMessage;
module.exports.getInstance = function() {
  return new ValidateSpellForgetMessage();
};