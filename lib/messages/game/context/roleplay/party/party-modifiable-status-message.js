var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyModifiableStatusMessage = function() {
  this.enabled = false;
};

util.inherits(PartyModifiableStatusMessage, BaseMessage);

PartyModifiableStatusMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyModifiableStatusMessage(output);
};

PartyModifiableStatusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyModifiableStatusMessage(input);
};

PartyModifiableStatusMessage.prototype.serializeAs_PartyModifiableStatusMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeBoolean(this.enabled);
};

PartyModifiableStatusMessage.prototype.deserializeAs_PartyModifiableStatusMessage = function(input) {
  this.deserialize(input);
  this.enabled = input.readBoolean();
};

PartyModifiableStatusMessage.prototype.getMessageId = function() {
  return 6277;
};

PartyModifiableStatusMessage.prototype.getClassName = function() {
  return 'PartyModifiableStatusMessage';
};

module.exports.id = 6277;
module.exports.class = PartyModifiableStatusMessage;