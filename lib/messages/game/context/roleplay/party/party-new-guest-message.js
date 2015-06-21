var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations.js').class;

var PartyNewGuestMessage = function() {
    this.guest = new PartyGuestInformations();
};

require('util').inherits(PartyNewGuestMessage, require('./abstract-party-event-message.js').class);

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
    this.deserializeAs_AbstractPartyEventMessage(param1);
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
    return new PartyNewGuestMessage;
};