var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyFollowStatusUpdateMessage = function() {
    this.success = false;
    this.followedId = 0;
};

require('util').inherits(PartyFollowStatusUpdateMessage, require('./abstract-party-message.js').class);

PartyFollowStatusUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyFollowStatusUpdateMessage(output);
};

PartyFollowStatusUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyFollowStatusUpdateMessage(input);
};

PartyFollowStatusUpdateMessage.prototype.serializeAs_PartyFollowStatusUpdateMessage = function(param1) {
    this.serializeAs_AbstractPartyMessageAs_AbstractPartyMessage(param1);
    param1.writeBoolean(this.success);
    if (this.followedId < 0) {
        throw new Error("Forbidden value (" + this.followedId + ") on element followedId.");
    } else {
        param1.writeVarInt(this.followedId);
        return;
    }
};

PartyFollowStatusUpdateMessage.prototype.deserializeAs_PartyFollowStatusUpdateMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.success = param1.readBoolean();
    this.followedId = param1.readVarUhInt();
    if (this.followedId < 0) {
        throw new Error("Forbidden value (" + this.followedId + ") on element of PartyFollowStatusUpdateMessage.followedId.");
    } else {
        return;
    }
};

PartyFollowStatusUpdateMessage.prototype.getMessageId = function() {
    return 5581;
};

PartyFollowStatusUpdateMessage.prototype.getClassName = function() {
    return 'PartyFollowStatusUpdateMessage';
};

module.exports.id = 5581;
module.exports.class = PartyFollowStatusUpdateMessage;
module.exports.getInstance = function() {
    return new PartyFollowStatusUpdateMessage;
};