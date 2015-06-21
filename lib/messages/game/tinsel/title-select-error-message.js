var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TitleSelectErrorMessage = function() {
    this.reason = 0;
};

require('util').inherits(TitleSelectErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new TitleSelectErrorMessage();
};

TitleSelectErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_TitleSelectErrorMessage(output);
};

TitleSelectErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TitleSelectErrorMessage(input);
};

TitleSelectErrorMessage.prototype.serializeAs_TitleSelectErrorMessage = function(param1) {
    param1.writeByte(this.reason);
};

TitleSelectErrorMessage.prototype.deserializeAs_TitleSelectErrorMessage = function(param1) {
    this.reason = param1.readByte();
    if (this.reason < 0) {
        throw new Error("Forbidden value (" + this.reason + ") on element of TitleSelectErrorMessage.reason.");
    } else {
        return;
    }
};

TitleSelectErrorMessage.prototype.getMessageId = function() {
    return 6373;
};

TitleSelectErrorMessage.prototype.getClassName = function() {
    return 'TitleSelectErrorMessage';
};

module.exports.id = 6373;
module.exports.TitleSelectErrorMessage = TitleSelectErrorMessage;