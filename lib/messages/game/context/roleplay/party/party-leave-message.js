var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyLeaveMessage = function() {

};

require('util').inherits(PartyLeaveMessage, require('./abstract-party-message.js'));

module.exports = function() {
    return new PartyLeaveMessage();
};

PartyLeaveMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyLeaveMessage(output);
};

PartyLeaveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyLeaveMessage(input);
};

PartyLeaveMessage.prototype.serializeAs_PartyLeaveMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
};

PartyLeaveMessage.prototype.deserializeAs_PartyLeaveMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
};

PartyLeaveMessage.prototype.getMessageId = function() {
    return 5594;
};

PartyLeaveMessage.prototype.getClassName = function() {
    return 'PartyLeaveMessage';
};

module.exports.id = 5594;
module.exports.PartyLeaveMessage = PartyLeaveMessage;