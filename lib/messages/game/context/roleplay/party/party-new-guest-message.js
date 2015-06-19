var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-event-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyNewGuestMessage = function() {
  this.guest;
};

util.inherits(PartyNewGuestMessage, BaseMessage);

PartyNewGuestMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyNewGuestMessage(output);
};

PartyNewGuestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyNewGuestMessage(input);
};

PartyNewGuestMessage.prototype.serializeAs_PartyNewGuestMessage = function(output) {
  this.serializeAs_AbstractPartyEventMessage(output);
  this.guest.serializeAs_PartyGuestInformations(output);
};

PartyNewGuestMessage.prototype.deserializeAs_PartyNewGuestMessage = function(input) {
  this.deserialize(input);
  this.guest = new PartyGuestInformations();
  this.guest.deserialize(input);
};

PartyNewGuestMessage.prototype.getMessageId = function() {
  return 6260;
};

PartyNewGuestMessage.prototype.getClassName = function() {
  return 'PartyNewGuestMessage';
};

module.exports.id = 6260;
module.exports.class = PartyNewGuestMessage;