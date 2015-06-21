var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyFollowThisMemberRequestMessage = function() {
    this.enabled = false;
};

require('util').inherits(PartyFollowThisMemberRequestMessage, require('./party-follow-member-request-message.js').class);

PartyFollowThisMemberRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyFollowThisMemberRequestMessage(output);
};

PartyFollowThisMemberRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyFollowThisMemberRequestMessage(input);
};

PartyFollowThisMemberRequestMessage.prototype.serializeAs_PartyFollowThisMemberRequestMessage = function(param1) {
    this.serializeAs_PartyFollowMemberRequestMessageAs_PartyFollowMemberRequestMessage(param1);
    param1.writeBoolean(this.enabled);
};

PartyFollowThisMemberRequestMessage.prototype.deserializeAs_PartyFollowThisMemberRequestMessage = function(param1) {
    this.deserializeAs_PartyFollowMemberRequestMessage(param1);
    this.enabled = param1.readBoolean();
};

PartyFollowThisMemberRequestMessage.prototype.getMessageId = function() {
    return 5588;
};

PartyFollowThisMemberRequestMessage.prototype.getClassName = function() {
    return 'PartyFollowThisMemberRequestMessage';
};

module.exports.id = 5588;
module.exports.class = PartyFollowThisMemberRequestMessage;
module.exports.getInstance = function() {
    return new PartyFollowThisMemberRequestMessage;
};