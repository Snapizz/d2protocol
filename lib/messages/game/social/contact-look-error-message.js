var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ContactLookErrorMessage = module.exports = function() {
    this.requestId = 0;

    return this;
};

require('util').inherits(ContactLookErrorMessage, d2com.NetworkMessage.class);

ContactLookErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_ContactLookErrorMessage(output);
};

ContactLookErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ContactLookErrorMessage(input);
};

ContactLookErrorMessage.prototype.serializeAs_ContactLookErrorMessage = function(param1) {
    if (this.requestId < 0) {
        throw new Error("Forbidden value (" + this.requestId + ") on element requestId.");
    } else {
        param1.writeVarInt(this.requestId);
        return;
    }
};

ContactLookErrorMessage.prototype.deserializeAs_ContactLookErrorMessage = function(param1) {
    this.requestId = param1.readVarUhInt();
    if (this.requestId < 0) {
        throw new Error("Forbidden value (" + this.requestId + ") on element of ContactLookErrorMessage.requestId.");
    } else {
        return;
    }
};

ContactLookErrorMessage.prototype.getMessageId = function() {
    return 6045;
};

ContactLookErrorMessage.prototype.getClassName = function() {
    return 'ContactLookErrorMessage';
};

module.exports.id = 6045;