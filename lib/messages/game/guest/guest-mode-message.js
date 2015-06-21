var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var GuestModeMessage = function() {
    this.active = false;
};

require('util').inherits(GuestModeMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new GuestModeMessage();
};

GuestModeMessage.prototype.serialize = function(output) {
    this.serializeAs_GuestModeMessage(output);
};

GuestModeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_GuestModeMessage(input);
};

GuestModeMessage.prototype.serializeAs_GuestModeMessage = function(param1) {
    param1.writeBoolean(this.active);
};

GuestModeMessage.prototype.deserializeAs_GuestModeMessage = function(param1) {
    this.active = param1.readBoolean();
};

GuestModeMessage.prototype.getMessageId = function() {
    return 6505;
};

GuestModeMessage.prototype.getClassName = function() {
    return 'GuestModeMessage';
};

module.exports.id = 6505;
module.exports.GuestModeMessage = GuestModeMessage;