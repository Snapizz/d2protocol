var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyKickedByMessage = function() {
    this.kickerId = 0;
};

require('util').inherits(PartyKickedByMessage, require('./abstract-party-message.js').class);

PartyKickedByMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyKickedByMessage(output);
};

PartyKickedByMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyKickedByMessage(input);
};

PartyKickedByMessage.prototype.serializeAs_PartyKickedByMessage = function(param1) {
    this.serializeAs_AbstractPartyMessageAs_AbstractPartyMessage(param1);
    if (this.kickerId < 0) {
        throw new Error("Forbidden value (" + this.kickerId + ") on element kickerId.");
    } else {
        param1.writeVarInt(this.kickerId);
        return;
    }
};

PartyKickedByMessage.prototype.deserializeAs_PartyKickedByMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.kickerId = param1.readVarUhInt();
    if (this.kickerId < 0) {
        throw new Error("Forbidden value (" + this.kickerId + ") on element of PartyKickedByMessage.kickerId.");
    } else {
        return;
    }
};

PartyKickedByMessage.prototype.getMessageId = function() {
    return 5590;
};

PartyKickedByMessage.prototype.getClassName = function() {
    return 'PartyKickedByMessage';
};

module.exports.id = 5590;
module.exports.class = PartyKickedByMessage;
module.exports.getInstance = function() {
    return new PartyKickedByMessage;
};