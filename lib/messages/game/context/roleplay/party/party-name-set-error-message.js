var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
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

PartyNameSetErrorMessage.prototype.serializeAs_PartyNameSetErrorMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeByte(this.result);
};

PartyNameSetErrorMessage.prototype.deserializeAs_PartyNameSetErrorMessage = function(input) {
  this.deserialize(input);
  this.result = input.readByte();
  if (this.result < 0) {
    throw (new Error((("Forbidden value (" + this.result) + ") on element of PartyNameSetErrorMessage.result.")));
  };
};

PartyNameSetErrorMessage.prototype.getMessageId = function() {
  return 6501;
};

PartyNameSetErrorMessage.prototype.getClassName = function() {
  return 'PartyNameSetErrorMessage';
};

module.exports.id = 6501;
module.exports.class = PartyNameSetErrorMessage;