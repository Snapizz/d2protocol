var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyRestrictedMessage = module.exports = function() {
    this.restricted = false;

    return this;
};

require('util').inherits(PartyRestrictedMessage, require('./abstract-party-message.js'));

PartyRestrictedMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyRestrictedMessage(output);
};

PartyRestrictedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyRestrictedMessage(input);
};

PartyRestrictedMessage.prototype.serializeAs_PartyRestrictedMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    param1.writeBoolean(this.restricted);
};

PartyRestrictedMessage.prototype.deserializeAs_PartyRestrictedMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.restricted = param1.readBoolean();
};

PartyRestrictedMessage.prototype.getMessageId = function() {
    return 6175;
};

PartyRestrictedMessage.prototype.getClassName = function() {
    return 'PartyRestrictedMessage';
};

module.exports.id = 6175;