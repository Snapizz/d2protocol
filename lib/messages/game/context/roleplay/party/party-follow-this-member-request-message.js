var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyFollowThisMemberRequestMessage = module.exports = function() {
    this.enabled = false;

    return this;
};

require('util').inherits(PartyFollowThisMemberRequestMessage, require('./party-follow-member-request-message.js'));

PartyFollowThisMemberRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyFollowThisMemberRequestMessage(output);
};

PartyFollowThisMemberRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyFollowThisMemberRequestMessage(input);
};

PartyFollowThisMemberRequestMessage.prototype.serializeAs_PartyFollowThisMemberRequestMessage = function(param1) {
    this.serializeAs_PartyFollowMemberRequestMessage(param1);
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