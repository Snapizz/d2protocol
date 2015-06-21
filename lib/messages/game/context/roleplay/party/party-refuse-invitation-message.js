var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyRefuseInvitationMessage = module.exports = function() {


    return this;
};

require('util').inherits(PartyRefuseInvitationMessage, require('./abstract-party-message.js'));

PartyRefuseInvitationMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyRefuseInvitationMessage(output);
};

PartyRefuseInvitationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyRefuseInvitationMessage(input);
};

PartyRefuseInvitationMessage.prototype.serializeAs_PartyRefuseInvitationMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
};

PartyRefuseInvitationMessage.prototype.deserializeAs_PartyRefuseInvitationMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
};

PartyRefuseInvitationMessage.prototype.getMessageId = function() {
    return 5582;
};

PartyRefuseInvitationMessage.prototype.getClassName = function() {
    return 'PartyRefuseInvitationMessage';
};

module.exports.id = 5582;