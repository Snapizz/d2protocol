var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyDeletedMessage = function() {

};

require('util').inherits(PartyDeletedMessage, require('./abstract-party-message.js').AbstractPartyMessage);

module.exports = function() {
    return new PartyDeletedMessage();
};

PartyDeletedMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyDeletedMessage(output);
};

PartyDeletedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyDeletedMessage(input);
};

PartyDeletedMessage.prototype.serializeAs_PartyDeletedMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
};

PartyDeletedMessage.prototype.deserializeAs_PartyDeletedMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
};

PartyDeletedMessage.prototype.getMessageId = function() {
    return 6261;
};

PartyDeletedMessage.prototype.getClassName = function() {
    return 'PartyDeletedMessage';
};

module.exports.id = 6261;
module.exports.PartyDeletedMessage = PartyDeletedMessage;