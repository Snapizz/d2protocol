var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyLeaderUpdateMessage = module.exports = function() {
    this.partyLeaderId = 0;

    return this;
};

require('util').inherits(PartyLeaderUpdateMessage, require('./abstract-party-event-message.js'));

PartyLeaderUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyLeaderUpdateMessage(output);
};

PartyLeaderUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyLeaderUpdateMessage(input);
};

PartyLeaderUpdateMessage.prototype.serializeAs_PartyLeaderUpdateMessage = function(param1) {
    this.serializeAs_AbstractPartyEventMessage(param1);
    if (this.partyLeaderId < 0) {
        throw new Error("Forbidden value (" + this.partyLeaderId + ") on element partyLeaderId.");
    } else {
        param1.writeVarInt(this.partyLeaderId);
        return;
    }
};

PartyLeaderUpdateMessage.prototype.deserializeAs_PartyLeaderUpdateMessage = function(param1) {
    this.deserializeAs_AbstractPartyEventMessage(param1);
    this.partyLeaderId = param1.readVarUhInt();
    if (this.partyLeaderId < 0) {
        throw new Error("Forbidden value (" + this.partyLeaderId + ") on element of PartyLeaderUpdateMessage.partyLeaderId.");
    } else {
        return;
    }
};

PartyLeaderUpdateMessage.prototype.getMessageId = function() {
    return 5578;
};

PartyLeaderUpdateMessage.prototype.getClassName = function() {
    return 'PartyLeaderUpdateMessage';
};

module.exports.id = 5578;