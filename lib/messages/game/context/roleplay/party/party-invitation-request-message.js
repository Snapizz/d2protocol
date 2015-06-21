var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyInvitationRequestMessage = module.exports = function() {
    this.name = "";

    return this;
};

require('util').inherits(PartyInvitationRequestMessage, d2com.NetworkMessage.class);

PartyInvitationRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyInvitationRequestMessage(output);
};

PartyInvitationRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyInvitationRequestMessage(input);
};

PartyInvitationRequestMessage.prototype.serializeAs_PartyInvitationRequestMessage = function(param1) {
    param1.writeUTF(this.name);
};

PartyInvitationRequestMessage.prototype.deserializeAs_PartyInvitationRequestMessage = function(param1) {
    this.name = param1.readUTF();
};

PartyInvitationRequestMessage.prototype.getMessageId = function() {
    return 5585;
};

PartyInvitationRequestMessage.prototype.getClassName = function() {
    return 'PartyInvitationRequestMessage';
};

module.exports.id = 5585;