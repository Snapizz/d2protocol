var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-event-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyUpdateMessage = function() {
  this.memberInformations;
};

util.inherits(PartyUpdateMessage, BaseMessage);

PartyUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyUpdateMessage(output);
};

PartyUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyUpdateMessage(input);
};

PartyUpdateMessage.prototype.serializeAs_PartyUpdateMessage = function(output) {
  this.serializeAs_AbstractPartyEventMessage(output);
  output.writeShort(this.memberInformations.getTypeId());
  this.memberInformations.serialize(output);
};

PartyUpdateMessage.prototype.deserializeAs_PartyUpdateMessage = function(input) {
  this.deserialize(input);
  var _id1 = input.readUnsignedShort();
  this.memberInformations = ProtocolTypeManager.getInstance(PartyMemberInformations, _id1);
  this.memberInformations.deserialize(input);
};

PartyUpdateMessage.prototype.getMessageId = function() {
  return 5575;
};

PartyUpdateMessage.prototype.getClassName = function() {
  return 'PartyUpdateMessage';
};

module.exports.id = 5575;
module.exports.class = PartyUpdateMessage;