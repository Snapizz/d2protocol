var d2com = require('d2com'),
  BaseMessage = require('./party-new-guest-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations.js').class;

var PartyNewGuestMessage = function() {
  this.guest = new PartyGuestInformations();
};

util.inherits(PartyNewGuestMessage, BaseMessage);

PartyNewGuestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyNewGuestMessage(output);
};

PartyNewGuestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyNewGuestMessage(input);
};

PartyNewGuestMessage.prototype.serializeAs_PartyNewGuestMessage = function(param1) {
  this.serializeAs_AbstractPartyEventMessage(param1);
  this.guest.serializeAs_PartyGuestInformations(param1);
};

PartyNewGuestMessage.prototype.deserializeAs_PartyNewGuestMessage = function(param1) {
  this.deserialize(param1);
  this.guest = new PartyGuestInformations();
  this.guest.deserialize(param1);
};

PartyNewGuestMessage.prototype.getMessageId = function() {
  return 6260;
};

PartyNewGuestMessage.prototype.getClassName = function() {
  return 'PartyNewGuestMessage';
};

module.exports.id = 6260;
module.exports.class = PartyNewGuestMessage;
module.exports.getInstance = function() {
  return new PartyNewGuestMessage();
};