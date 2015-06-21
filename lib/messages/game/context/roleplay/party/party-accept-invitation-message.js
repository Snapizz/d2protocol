var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyAcceptInvitationMessage = module.exports = function() {


    return this;
};

require('util').inherits(PartyAcceptInvitationMessage, require('./abstract-party-message.js'));

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