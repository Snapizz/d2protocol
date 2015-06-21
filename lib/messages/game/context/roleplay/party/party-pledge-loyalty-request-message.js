var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyPledgeLoyaltyRequestMessage = function() {
    this.loyal = false;
};

require('util').inherits(PartyPledgeLoyaltyRequestMessage, require('./abstract-party-message.js').class);

PartyPledgeLoyaltyRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyPledgeLoyaltyRequestMessage(output);
};

PartyPledgeLoyaltyRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyPledgeLoyaltyRequestMessage(input);
};

PartyPledgeLoyaltyRequestMessage.prototype.serializeAs_PartyPledgeLoyaltyRequestMessage = function(param1) {
    this.serializeAs_AbstractPartyMessageAs_AbstractPartyMessage(param1);
    param1.writeBoolean(this.loyal);
};

PartyPledgeLoyaltyRequestMessage.prototype.deserializeAs_PartyPledgeLoyaltyRequestMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.loyal = param1.readBoolean();
};

PartyPledgeLoyaltyRequestMessage.prototype.getMessageId = function() {
    return 6269;
};

PartyPledgeLoyaltyRequestMessage.prototype.getClassName = function() {
    return 'PartyPledgeLoyaltyRequestMessage';
};

module.exports.id = 6269;
module.exports.class = PartyPledgeLoyaltyRequestMessage;
module.exports.getInstance = function() {
    return new PartyPledgeLoyaltyRequestMessage;
};