var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyInvitationRequestMessage = function() {
  this.name = "";
};

util.inherits(PartyInvitationRequestMessage, BaseMessage);

PartyInvitationRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationRequestMessage(output);
};

PartyInvitationRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationRequestMessage(input);
};

PartyInvitationRequestMessage.prototype.serializeAs_PartyInvitationRequestMessage = function(param1) {
  param1.writeUTF(this.name);
};

PartyInvitationRequestMessage.prototype.deserializeAs_PartyInvitationRequestMessage = function(param1) {
  this.name = param1.readUTF();
};

PartyInvitationRequestMessage.prototype.getMessageId = function() {
  return 5585;
};

PartyInvitationRequestMessage.prototype.getClassName = function() {
  return 'PartyInvitationRequestMessage';
};

module.exports.id = 5585;
module.exports.class = PartyInvitationRequestMessage;