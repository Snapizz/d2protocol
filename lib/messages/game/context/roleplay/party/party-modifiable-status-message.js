var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyModifiableStatusMessage = module.exports = function() {
    this.enabled = false;

    return this;
};

require('util').inherits(PartyModifiableStatusMessage, require('./abstract-party-message.js'));

PartyModifiableStatusMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyModifiableStatusMessage(output);
};

PartyModifiableStatusMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyModifiableStatusMessage(input);
};

PartyModifiableStatusMessage.prototype.serializeAs_PartyModifiableStatusMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    param1.writeBoolean(this.enabled);
};

PartyModifiableStatusMessage.prototype.deserializeAs_PartyModifiableStatusMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.enabled = param1.readBoolean();
};

PartyModifiableStatusMessage.prototype.getMessageId = function() {
    return 6277;
};

PartyModifiableStatusMessage.prototype.getClassName = function() {
    return 'PartyModifiableStatusMessage';
};

module.exports.id = 6277;