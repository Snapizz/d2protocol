var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyNameSetErrorMessage = module.exports = function() {
    this.result = 0;

    return this;
};

require('util').inherits(PartyNameSetErrorMessage, require('./abstract-party-message.js'));

PartyNameSetErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyNameSetErrorMessage(output);
};

PartyNameSetErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyNameSetErrorMessage(input);
};

PartyNameSetErrorMessage.prototype.serializeAs_PartyNameSetErrorMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    param1.writeByte(this.result);
};

PartyNameSetErrorMessage.prototype.deserializeAs_PartyNameSetErrorMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.result = param1.readByte();
    if (this.result < 0) {
        throw new Error("Forbidden value (" + this.result + ") on element of PartyNameSetErrorMessage.result.");
    } else {
        return;
    }
};

PartyNameSetErrorMessage.prototype.getMessageId = function() {
    return 6501;
};

PartyNameSetErrorMessage.prototype.getClassName = function() {
    return 'PartyNameSetErrorMessage';
};

module.exports.id = 6501;