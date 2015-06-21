var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyLoyaltyStatusMessage = module.exports = function() {
    this.loyal = false;

    return this;
};

require('util').inherits(PartyLoyaltyStatusMessage, require('./abstract-party-message.js'));

PartyLoyaltyStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyLoyaltyStatusMessage(output);
};

PartyLoyaltyStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyLoyaltyStatusMessage(input);
};

PartyLoyaltyStatusMessage.prototype.serializeAs_PartyLoyaltyStatusMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    param1.writeBoolean(this.loyal);
};

PartyLoyaltyStatusMessage.prototype.deserializeAs_PartyLoyaltyStatusMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.loyal = param1.readBoolean();
};

PartyLoyaltyStatusMessage.prototype.getMessageId = function() {
    return 6270;
};

PartyLoyaltyStatusMessage.prototype.getClassName = function() {
    return 'PartyLoyaltyStatusMessage';
};

module.exports.id = 6270;