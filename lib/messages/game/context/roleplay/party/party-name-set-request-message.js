var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyNameSetRequestMessage = function() {
    this.partyName = "";
};

require('util').inherits(PartyNameSetRequestMessage, require('./abstract-party-message.js').AbstractPartyMessage);

module.exports = function() {
    return new PartyNameSetRequestMessage();
};

PartyNameSetRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyNameSetRequestMessage(output);
};

PartyNameSetRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyNameSetRequestMessage(input);
};

PartyNameSetRequestMessage.prototype.serializeAs_PartyNameSetRequestMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    param1.writeUTF(this.partyName);
};

PartyNameSetRequestMessage.prototype.deserializeAs_PartyNameSetRequestMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.partyName = param1.readUTF();
};

PartyNameSetRequestMessage.prototype.getMessageId = function() {
    return 6503;
};

PartyNameSetRequestMessage.prototype.getClassName = function() {
    return 'PartyNameSetRequestMessage';
};

module.exports.id = 6503;
module.exports.PartyNameSetRequestMessage = PartyNameSetRequestMessage;