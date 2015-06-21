var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyNameUpdateMessage = function() {
    this.partyName = "";
};

require('util').inherits(PartyNameUpdateMessage, require('./abstract-party-message.js'));

module.exports = function() {
    return new PartyNameUpdateMessage();
};

PartyNameUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyNameUpdateMessage(output);
};

PartyNameUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyNameUpdateMessage(input);
};

PartyNameUpdateMessage.prototype.serializeAs_PartyNameUpdateMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    param1.writeUTF(this.partyName);
};

PartyNameUpdateMessage.prototype.deserializeAs_PartyNameUpdateMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.partyName = param1.readUTF();
};

PartyNameUpdateMessage.prototype.getMessageId = function() {
    return 6502;
};

PartyNameUpdateMessage.prototype.getClassName = function() {
    return 'PartyNameUpdateMessage';
};

module.exports.id = 6502;
module.exports.PartyNameUpdateMessage = PartyNameUpdateMessage;