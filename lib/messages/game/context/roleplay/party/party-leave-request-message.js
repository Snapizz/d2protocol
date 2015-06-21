var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyLeaveRequestMessage = function() {

};

require('util').inherits(PartyLeaveRequestMessage, require('./abstract-party-message.js'));

module.exports = function() {
    return new PartyLeaveRequestMessage();
};

PartyLeaveRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyLeaveRequestMessage(output);
};

PartyLeaveRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyLeaveRequestMessage(input);
};

PartyLeaveRequestMessage.prototype.serializeAs_PartyLeaveRequestMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
};

PartyLeaveRequestMessage.prototype.deserializeAs_PartyLeaveRequestMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
};

PartyLeaveRequestMessage.prototype.getMessageId = function() {
    return 5593;
};

PartyLeaveRequestMessage.prototype.getClassName = function() {
    return 'PartyLeaveRequestMessage';
};

module.exports.id = 5593;
module.exports.PartyLeaveRequestMessage = PartyLeaveRequestMessage;