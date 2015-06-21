var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyStopFollowRequestMessage = function() {

};

require('util').inherits(PartyStopFollowRequestMessage, require('./abstract-party-message.js').class);

PartyStopFollowRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyStopFollowRequestMessage(output);
};

PartyStopFollowRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyStopFollowRequestMessage(input);
};

PartyStopFollowRequestMessage.prototype.serializeAs_PartyStopFollowRequestMessage = function(param1) {
    this.serializeAs_AbstractPartyMessageAs_AbstractPartyMessage(param1);
};

PartyStopFollowRequestMessage.prototype.deserializeAs_PartyStopFollowRequestMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
};

PartyStopFollowRequestMessage.prototype.getMessageId = function() {
    return 5574;
};

PartyStopFollowRequestMessage.prototype.getClassName = function() {
    return 'PartyStopFollowRequestMessage';
};

module.exports.id = 5574;
module.exports.class = PartyStopFollowRequestMessage;
module.exports.getInstance = function() {
    return new PartyStopFollowRequestMessage;
};