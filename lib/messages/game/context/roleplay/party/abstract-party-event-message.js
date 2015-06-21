var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AbstractPartyEventMessage = function() {

};

require('util').inherits(AbstractPartyEventMessage, require('./abstract-party-message.js').AbstractPartyMessage);

module.exports = function() {
    return new AbstractPartyEventMessage();
};

AbstractPartyEventMessage.prototype.serialize = function(output) {
    this.serializeAs_AbstractPartyEventMessage(output);
};

AbstractPartyEventMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AbstractPartyEventMessage(input);
};

AbstractPartyEventMessage.prototype.serializeAs_AbstractPartyEventMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
};

AbstractPartyEventMessage.prototype.deserializeAs_AbstractPartyEventMessage = function(param1) {
    this.deserializeAs_AbstractPartyMessage(param1);
};

AbstractPartyEventMessage.prototype.getMessageId = function() {
    return 6273;
};

AbstractPartyEventMessage.prototype.getClassName = function() {
    return 'AbstractPartyEventMessage';
};

module.exports.id = 6273;
module.exports.AbstractPartyEventMessage = AbstractPartyEventMessage;