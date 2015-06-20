var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var PartyInvitationArenaRequestMessage = function() {

};

util.inherits(PartyInvitationArenaRequestMessage, BaseMessage);

PartyInvitationArenaRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationArenaRequestMessage(output);
};

PartyInvitationArenaRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationArenaRequestMessage(input);
};

PartyInvitationArenaRequestMessage.prototype.serializeAs_PartyInvitationArenaRequestMessage = function(param1) {
  this.serializeAs_PartyInvitationRequestMessage(param1);
};

PartyInvitationArenaRequestMessage.prototype.deserializeAs_PartyInvitationArenaRequestMessage = function(param1) {
  super.deserialize(param1);
};

PartyInvitationArenaRequestMessage.prototype.getMessageId = function() {
  return 6283;
};

PartyInvitationArenaRequestMessage.prototype.getClassName = function() {
  return 'PartyInvitationArenaRequestMessage';
};

module.exports.id = 6283;
module.exports.class = PartyInvitationArenaRequestMessage;
module.exports.getInstance = function() {
  return new PartyInvitationArenaRequestMessage();
};