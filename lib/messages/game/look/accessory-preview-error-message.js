var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AccessoryPreviewErrorMessage = function() {
    this.error = 0;
};

require('util').inherits(AccessoryPreviewErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AccessoryPreviewErrorMessage();
};

AccessoryPreviewErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_AccessoryPreviewErrorMessage(output);
};

AccessoryPreviewErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AccessoryPreviewErrorMessage(input);
};

AccessoryPreviewErrorMessage.prototype.serializeAs_AccessoryPreviewErrorMessage = function(param1) {
    param1.writeByte(this.error);
};

AccessoryPreviewErrorMessage.prototype.deserializeAs_AccessoryPreviewErrorMessage = function(param1) {
    this.error = param1.readByte();
    if (this.error < 0) {
        throw new Error("Forbidden value (" + this.error + ") on element of AccessoryPreviewErrorMessage.error.");
    } else {
        return;
    }
};

AccessoryPreviewErrorMessage.prototype.getMessageId = function() {
    return 6521;
};

AccessoryPreviewErrorMessage.prototype.getClassName = function() {
    return 'AccessoryPreviewErrorMessage';
};

module.exports.id = 6521;
module.exports.AccessoryPreviewErrorMessage = AccessoryPreviewErrorMessage;