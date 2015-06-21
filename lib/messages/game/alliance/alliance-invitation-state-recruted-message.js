var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceInvitationStateRecrutedMessage = function() {
    this.invitationState = 0;
};

require('util').inherits(AllianceInvitationStateRecrutedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AllianceInvitationStateRecrutedMessage();
};

AllianceInvitationStateRecrutedMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceInvitationStateRecrutedMessage(output);
};

AllianceInvitationStateRecrutedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceInvitationStateRecrutedMessage(input);
};

AllianceInvitationStateRecrutedMessage.prototype.serializeAs_AllianceInvitationStateRecrutedMessage = function(param1) {
    param1.writeByte(this.invitationState);
};

AllianceInvitationStateRecrutedMessage.prototype.deserializeAs_AllianceInvitationStateRecrutedMessage = function(param1) {
    this.invitationState = param1.readByte();
    if (this.invitationState < 0) {
        throw new Error("Forbidden value (" + this.invitationState + ") on element of AllianceInvitationStateRecrutedMessage.invitationState.");
    } else {
        return;
    }
};

AllianceInvitationStateRecrutedMessage.prototype.getMessageId = function() {
    return 6392;
};

AllianceInvitationStateRecrutedMessage.prototype.getClassName = function() {
    return 'AllianceInvitationStateRecrutedMessage';
};

module.exports.id = 6392;
module.exports.AllianceInvitationStateRecrutedMessage = AllianceInvitationStateRecrutedMessage;