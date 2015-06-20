var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyNameSetErrorMessage = function() {
  this.result = 0;
};

util.inherits(PartyNameSetErrorMessage, BaseMessage);

PartyNameSetErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyNameSetErrorMessage(output);
};

PartyNameSetErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyNameSetErrorMessage(input);
};

PartyNameSetErrorMessage.prototype.serializeAs_PartyNameSetErrorMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeByte(this.result);
};

PartyNameSetErrorMessage.prototype.deserializeAs_PartyNameSetErrorMessage = function(param1) {
  this.deserialize(param1);
  this.result = param1.readByte();
  if (this.result < 0) {
    throw new Error("Forbidden value (" + this.result + ") on element of PartyNameSetErrorMessage.result.");
  } else {
    return;
  }
};

PartyNameSetErrorMessage.prototype.getMessageId = function() {
  return 6501;
};

PartyNameSetErrorMessage.prototype.getClassName = function() {
  return 'PartyNameSetErrorMessage';
};

module.exports.id = 6501;
module.exports.class = PartyNameSetErrorMessage;