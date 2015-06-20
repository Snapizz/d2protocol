var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations.js');

var PartyUpdateMessage = function() {
  this.memberInformations = new PartyMemberInformations();
};

util.inherits(PartyUpdateMessage, BaseMessage);

PartyUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyUpdateMessage(output);
};

PartyUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyUpdateMessage(input);
};

PartyUpdateMessage.prototype.serializeAs_PartyUpdateMessage = function(param1) {
  this.serializeAs_AbstractPartyEventMessage(param1);
  param1.writeShort(this.memberInformations.getTypeId());
  this.memberInformations.serialize(param1);
};

PartyUpdateMessage.prototype.deserializeAs_PartyUpdateMessage = function(param1) {
  this.deserialize(param1);
  var _loc2_ = param1.readUnsignedShort();
  this.memberInformations = ProtocolTypeManager.getInstance(PartyMemberInformations, _loc2_);
  this.memberInformations.deserialize(param1);
};

PartyUpdateMessage.prototype.getMessageId = function() {
  return 5575;
};

PartyUpdateMessage.prototype.getClassName = function() {
  return 'PartyUpdateMessage';
};

module.exports.id = 5575;
module.exports.class = PartyUpdateMessage;
module.exports.getInstance = function() {
  return new PartyUpdateMessage();
};