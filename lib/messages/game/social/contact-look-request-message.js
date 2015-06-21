var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ContactLookRequestMessage = function() {
    this.requestId = 0;
    this.contactType = 0;
};

require('util').inherits(ContactLookRequestMessage, d2com.NetworkMessage.class);

ContactLookRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_ContactLookRequestMessage(output);
};

ContactLookRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ContactLookRequestMessage(input);
};

ContactLookRequestMessage.prototype.serializeAs_ContactLookRequestMessage = function(param1) {
    if (this.requestId < 0 || this.requestId > 255) {
        throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
    } else {
        param1.writeByte(this.requestId);
        param1.writeByte(this.contactType);
        return;
    }
};

ContactLookRequestMessage.prototype.deserializeAs_ContactLookRequestMessage = function(param1) {
    this.requestId = param1.readUnsignedByte();
    if (this.requestId < 0 || this.requestId > 255) {
        throw new Error("Forbidden value (" + this.requestId + ") on element of ContactLookRequestMessage.requestId.");
    } else {
        this.contactType = param1.readByte();
        if (this.contactType < 0) {
            throw new Error("Forbidden value (" + this.contactType + ") on element of ContactLookRequestMessage.contactType.");
        } else {
            return;
        }
    }
};

ContactLookRequestMessage.prototype.getMessageId = function() {
    return 5932;
};

ContactLookRequestMessage.prototype.getClassName = function() {
    return 'ContactLookRequestMessage';
};

module.exports.id = 5932;
module.exports.class = ContactLookRequestMessage;
module.exports.getInstance = function() {
    return new ContactLookRequestMessage;
};