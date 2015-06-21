var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceInvitationMessage = module.exports = function() {
    this.targetId = 0;

    return this;
};

require('util').inherits(AllianceInvitationMessage, d2com.NetworkMessage.class);

AllianceInvitationMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceInvitationMessage(output);
};

AllianceInvitationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceInvitationMessage(input);
};

AllianceInvitationMessage.prototype.serializeAs_AllianceInvitationMessage = function(param1) {
    if (this.targetId < 0) {
        throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
    } else {
        param1.writeVarInt(this.targetId);
        return;
    }
};

AllianceInvitationMessage.prototype.deserializeAs_AllianceInvitationMessage = function(param1) {
    this.targetId = param1.readVarUhInt();
    if (this.targetId < 0) {
        throw new Error("Forbidden value (" + this.targetId + ") on element of AllianceInvitationMessage.targetId.");
    } else {
        return;
    }
};

AllianceInvitationMessage.prototype.getMessageId = function() {
    return 6395;
};

AllianceInvitationMessage.prototype.getClassName = function() {
    return 'AllianceInvitationMessage';
};

module.exports.id = 6395;