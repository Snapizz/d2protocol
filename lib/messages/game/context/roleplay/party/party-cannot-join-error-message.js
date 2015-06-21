var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var PartyCannotJoinErrorMessage = function() {
    this.reason = 0;
};

require('util').inherits(PartyCannotJoinErrorMessage, require('./abstract-party-message.js').class);

PartyCannotJoinErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyCannotJoinErrorMessage(output);
};

PartyCannotJoinErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyCannotJoinErrorMessage(input);
};

PartyCannotJoinErrorMessage.prototype.serializeAs_PartyCannotJoinErrorMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    param1.writeByte(this.reason);
};

PartyCannotJoinErrorMessage.prototype.deserializeAs_PartyCannotJoinErrorMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of PartyCannotJoinErrorMessage.reason.");
    } else {
        return;
    }
};

PartyCannotJoinErrorMessage.prototype.getMessageId = function() {
    return 5583;
};

PartyCannotJoinErrorMessage.prototype.getClassName = function() {
    return 'PartyCannotJoinErrorMessage';
};

module.exports.id = 5583;
module.exports.class = PartyCannotJoinErrorMessage;
module.exports.getInstance = function() {
    return new PartyCannotJoinErrorMessage;
};