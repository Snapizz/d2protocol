var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var OnConnectionEventMessage = function() {
    this.eventType = 0;
};

require('util').inherits(OnConnectionEventMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new OnConnectionEventMessage();
};

OnConnectionEventMessage.prototype.serialize = function(output) {
    this.serializeAs_OnConnectionEventMessage(output);
};

OnConnectionEventMessage.prototype.deserialize = function(input) {
    this.deserializeAs_OnConnectionEventMessage(input);
};

OnConnectionEventMessage.prototype.serializeAs_OnConnectionEventMessage = function(param1) {
    param1.writeByte(this.eventType);
};

OnConnectionEventMessage.prototype.deserializeAs_OnConnectionEventMessage = function(param1) {
    this.eventType = param1.readByte();
    if (this.eventType < 0) {
        throw new Error("Forbidden value (" + this.eventType + ") on element of OnConnectionEventMessage.eventType.");
    } else {
        return;
    }
};

OnConnectionEventMessage.prototype.getMessageId = function() {
    return 5726;
};

OnConnectionEventMessage.prototype.getClassName = function() {
    return 'OnConnectionEventMessage';
};

module.exports.id = 5726;
module.exports.OnConnectionEventMessage = OnConnectionEventMessage;