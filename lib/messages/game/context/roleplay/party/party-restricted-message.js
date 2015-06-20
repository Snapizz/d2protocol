var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeBoolean(this.restricted);
};

PartyRestrictedMessage.prototype.deserializeAs_PartyRestrictedMessage = function(input) {
  this.deserialize(param1);
  this.restricted = param1.readBoolean();
};

PartyRestrictedMessage.prototype.getMessageId = function() {
  return 6175;
};

PartyRestrictedMessage.prototype.getClassName = function() {
  return 'PartyRestrictedMessage';
};

module.exports.id = 6175;
module.exports.class = PartyRestrictedMessage;