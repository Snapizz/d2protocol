var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyRefuseInvitationMessage = function() {

};

util.inherits(PartyRefuseInvitationMessage, BaseMessage);

PartyRefuseInvitationMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyRefuseInvitationMessage(output);
};

PartyRefuseInvitationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyRefuseInvitationMessage(input);
};

PartyRefuseInvitationMessage.prototype.serializeAs_PartyRefuseInvitationMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
};

PartyRefuseInvitationMessage.prototype.deserializeAs_PartyRefuseInvitationMessage = function(input) {
  this.deserialize(input);
};

PartyRefuseInvitationMessage.prototype.getMessageId = function() {
  return 5582;
};

PartyRefuseInvitationMessage.prototype.getClassName = function() {
  return 'PartyRefuseInvitationMessage';
};

module.exports.id = 5582;
module.exports.class = PartyRefuseInvitationMessage;