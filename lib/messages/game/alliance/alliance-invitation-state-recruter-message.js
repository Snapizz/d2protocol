var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceInvitationStateRecruterMessage = function() {
    this.recrutedName = "";
    this.invitationState = 0;
};

require('util').inherits(AllianceInvitationStateRecruterMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AllianceInvitationStateRecruterMessage();
};

AllianceInvitationStateRecruterMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceInvitationStateRecruterMessage(output);
};

AllianceInvitationStateRecruterMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceInvitationStateRecruterMessage(input);
};

AllianceInvitationStateRecruterMessage.prototype.serializeAs_AllianceInvitationStateRecruterMessage = function(param1) {
    param1.writeUTF(this.recrutedName);
    param1.writeByte(this.invitationState);
};

AllianceInvitationStateRecruterMessage.prototype.deserializeAs_AllianceInvitationStateRecruterMessage = function(param1) {
    this.recrutedName = param1.readUTF();
    this.invitationState = param1.readByte();
    if (this.invitationState < 0) {
        throw new Error("Forbidden value (" + this.invitationState + ") on element of AllianceInvitationStateRecruterMessage.invitationState.");
    } else {
        return;
    }
};

AllianceInvitationStateRecruterMessage.prototype.getMessageId = function() {
    return 6396;
};

AllianceInvitationStateRecruterMessage.prototype.getClassName = function() {
    return 'AllianceInvitationStateRecruterMessage';
};

module.exports.id = 6396;
module.exports.AllianceInvitationStateRecruterMessage = AllianceInvitationStateRecruterMessage;