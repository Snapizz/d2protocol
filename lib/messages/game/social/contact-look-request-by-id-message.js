var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var ContactLookRequestByIdMessage = function() {
    this.playerId = 0;
};

require('util').inherits(ContactLookRequestByIdMessage, require('./contact-look-request-message.js').class);

ContactLookRequestByIdMessage.prototype.serialize = function(output) {
    this.serializeAs_ContactLookRequestByIdMessage(output);
};

ContactLookRequestByIdMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ContactLookRequestByIdMessage(input);
};

ContactLookRequestByIdMessage.prototype.serializeAs_ContactLookRequestByIdMessage = function(param1) {
    this.serializeAs_ContactLookRequestMessageAs_ContactLookRequestMessage(param1);
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
        param1.writeVarInt(this.playerId);
        return;
    }
};

ContactLookRequestByIdMessage.prototype.deserializeAs_ContactLookRequestByIdMessage = function(param1) {
    this.deserializeAs_ContactLookRequestMessage(param1);
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element of ContactLookRequestByIdMessage.playerId.");
    } else {
        return;
    }
};

ContactLookRequestByIdMessage.prototype.getMessageId = function() {
    return 5935;
};

ContactLookRequestByIdMessage.prototype.getClassName = function() {
    return 'ContactLookRequestByIdMessage';
};

module.exports.id = 5935;
module.exports.class = ContactLookRequestByIdMessage;
module.exports.getInstance = function() {
    return new ContactLookRequestByIdMessage;
};