var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyRestrictedMessage = function() {
  this.restricted = false;
};

util.inherits(PartyRestrictedMessage, BaseMessage);

PartyRestrictedMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyRestrictedMessage(output);
};

PartyRestrictedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyRestrictedMessage(input);
};

PartyRestrictedMessage.prototype.serializeAs_PartyRestrictedMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeBoolean(this.restricted);
};

PartyRestrictedMessage.prototype.deserializeAs_PartyRestrictedMessage = function(input) {
  this.deserialize(input);
  this.restricted = input.readBoolean();
};

PartyRestrictedMessage.prototype.getMessageId = function() {
  return 6175;
};

PartyRestrictedMessage.prototype.getClassName = function() {
  return 'PartyRestrictedMessage';
};

module.exports.id = 6175;
module.exports.class = PartyRestrictedMessage;