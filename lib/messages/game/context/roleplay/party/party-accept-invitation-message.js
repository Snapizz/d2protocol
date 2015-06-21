var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyAcceptInvitationMessage = function() {

};

require('util').inherits(PartyAcceptInvitationMessage, require('./abstract-party-message.js').class);

PartyAcceptInvitationMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyAcceptInvitationMessage(output);
};

PartyAcceptInvitationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyAcceptInvitationMessage(input);
};

PartyAcceptInvitationMessage.prototype.serializeAs_PartyAcceptInvitationMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
};

PartyAcceptInvitationMessage.prototype.deserializeAs_PartyAcceptInvitationMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
};

PartyAcceptInvitationMessage.prototype.getMessageId = function() {
    return 5580;
};

PartyAcceptInvitationMessage.prototype.getClassName = function() {
    return 'PartyAcceptInvitationMessage';
};

module.exports.id = 5580;
module.exports.class = PartyAcceptInvitationMessage;
module.exports.getInstance = function() {
    return new PartyAcceptInvitationMessage;
};