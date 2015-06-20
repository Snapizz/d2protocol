var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  this.serializeAs_AbstractPartyEventMessage(param1);
  this.guest.serializeAs_PartyGuestInformations(param1);
};

PartyNewGuestMessage.prototype.deserializeAs_PartyNewGuestMessage = function(input) {
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