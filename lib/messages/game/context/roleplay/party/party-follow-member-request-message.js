var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyFollowMemberRequestMessage = function() {
    this.playerId = 0;
};

require('util').inherits(PartyFollowMemberRequestMessage, require('./abstract-party-message.js'));

module.exports = function() {
    return new PartyFollowMemberRequestMessage();
};

PartyFollowMemberRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyFollowMemberRequestMessage(output);
};

PartyFollowMemberRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyFollowMemberRequestMessage(input);
};

PartyFollowMemberRequestMessage.prototype.serializeAs_PartyFollowMemberRequestMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
        param1.writeVarInt(this.playerId);
        return;
    }
};

PartyFollowMemberRequestMessage.prototype.deserializeAs_PartyFollowMemberRequestMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element of PartyFollowMemberRequestMessage.playerId.");
    } else {
        return;
    }
};

PartyFollowMemberRequestMessage.prototype.getMessageId = function() {
    return 5577;
};

PartyFollowMemberRequestMessage.prototype.getClassName = function() {
    return 'PartyFollowMemberRequestMessage';
};

module.exports.id = 5577;
module.exports.PartyFollowMemberRequestMessage = PartyFollowMemberRequestMessage;