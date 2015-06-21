var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyInvitationArenaRequestMessage = module.exports = function() {


    return this;
};

require('util').inherits(PartyInvitationArenaRequestMessage, require('./party-invitation-request-message.js'));

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
    this.deserializeAs_PartyInvitationRequestMessage(param1);
};

PartyInvitationArenaRequestMessage.prototype.getMessageId = function() {
    return 6283;
};

PartyInvitationArenaRequestMessage.prototype.getClassName = function() {
    return 'PartyInvitationArenaRequestMessage';
};

module.exports.id = 6283;