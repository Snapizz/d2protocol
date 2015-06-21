var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var AllianceInvitationAnswerMessage = function() {
    this.accept = false;
};

require('util').inherits(AllianceInvitationAnswerMessage, d2com.NetworkMessage.class);

AllianceInvitationAnswerMessage.prototype.serialize = function(output) {
    this.serializeAs_AllianceInvitationAnswerMessage(output);
};

AllianceInvitationAnswerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AllianceInvitationAnswerMessage(input);
};

AllianceInvitationAnswerMessage.prototype.serializeAs_AllianceInvitationAnswerMessage = function(param1) {
    param1.writeBoolean(this.accept);
};

AllianceInvitationAnswerMessage.prototype.deserializeAs_AllianceInvitationAnswerMessage = function(param1) {
    this.accept = param1.readBoolean();
};

AllianceInvitationAnswerMessage.prototype.getMessageId = function() {
    return 6401;
};

AllianceInvitationAnswerMessage.prototype.getClassName = function() {
    return 'AllianceInvitationAnswerMessage';
};

module.exports.id = 6401;
module.exports.class = AllianceInvitationAnswerMessage;
module.exports.getInstance = function() {
    return new AllianceInvitationAnswerMessage;
};