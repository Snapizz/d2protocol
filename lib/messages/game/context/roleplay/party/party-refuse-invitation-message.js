var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

PartyRefuseInvitationMessage.prototype.serializeAs_PartyRefuseInvitationMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
};

PartyRefuseInvitationMessage.prototype.deserializeAs_PartyRefuseInvitationMessage = function(param1) {
  this.deserialize(param1);
};

PartyRefuseInvitationMessage.prototype.getMessageId = function() {
  return 5582;
};

PartyRefuseInvitationMessage.prototype.getClassName = function() {
  return 'PartyRefuseInvitationMessage';
};

module.exports.id = 5582;
module.exports.class = PartyRefuseInvitationMessage;