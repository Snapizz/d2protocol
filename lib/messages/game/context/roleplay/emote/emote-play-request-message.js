var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var EmotePlayRequestMessage = module.exports = function() {
    this.emoteId = 0;

    return this;
};

require('util').inherits(EmotePlayRequestMessage, d2com.NetworkMessage.class);

EmotePlayRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_EmotePlayRequestMessage(output);
};

EmotePlayRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_EmotePlayRequestMessage(input);
};

EmotePlayRequestMessage.prototype.serializeAs_EmotePlayRequestMessage = function(param1) {
    if (this.emoteId < 0 || this.emoteId > 255) {
        throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
    } else {
        param1.writeByte(this.emoteId);
        return;
    }
};

EmotePlayRequestMessage.prototype.deserializeAs_EmotePlayRequestMessage = function(param1) {
    this.emoteId = param1.readUnsignedByte();
    if (this.emoteId < 0 || this.emoteId > 255) {
        throw new Error("Forbidden value (" + this.emoteId + ") on element of EmotePlayRequestMessage.emoteId.");
    } else {
        return;
    }
};

EmotePlayRequestMessage.prototype.getMessageId = function() {
    return 5685;
};

EmotePlayRequestMessage.prototype.getClassName = function() {
    return 'EmotePlayRequestMessage';
};

module.exports.id = 5685;