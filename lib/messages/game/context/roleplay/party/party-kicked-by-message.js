var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyKickedByMessage = module.exports = function() {
    this.kickerId = 0;

    return this;
};

require('util').inherits(PartyKickedByMessage, require('./abstract-party-message.js'));

PartyKickedByMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyKickedByMessage(output);
};

PartyKickedByMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyKickedByMessage(input);
};

PartyKickedByMessage.prototype.serializeAs_PartyKickedByMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
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