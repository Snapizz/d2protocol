var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyInvitationDetailsRequestMessage = function() {

};

require('util').inherits(PartyInvitationDetailsRequestMessage, require('./abstract-party-message.js').class);

PartyInvitationDetailsRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyInvitationDetailsRequestMessage(output);
};

PartyInvitationDetailsRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyInvitationDetailsRequestMessage(input);
};

PartyInvitationDetailsRequestMessage.prototype.serializeAs_PartyInvitationDetailsRequestMessage = function(param1) {
    this.serializeAs_AbstractPartyMessageAs_AbstractPartyMessage(param1);
};

PartyInvitationDetailsRequestMessage.prototype.deserializeAs_PartyInvitationDetailsRequestMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
};

PartyInvitationDetailsRequestMessage.prototype.getMessageId = function() {
    return 6264;
};

PartyInvitationDetailsRequestMessage.prototype.getClassName = function() {
    return 'PartyInvitationDetailsRequestMessage';
};

module.exports.id = 6264;
module.exports.class = PartyInvitationDetailsRequestMessage;
module.exports.getInstance = function() {
    return new PartyInvitationDetailsRequestMessage;
};