var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var EmotePlayErrorMessage = function() {
    this.emoteId = 0;
};

require('util').inherits(EmotePlayErrorMessage, d2com.NetworkMessage.class);

EmotePlayErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_EmotePlayErrorMessage(output);
};

EmotePlayErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_EmotePlayErrorMessage(input);
};

EmotePlayErrorMessage.prototype.serializeAs_EmotePlayErrorMessage = function(param1) {
    if (this.emoteId < 0 || this.emoteId > 255) {
        throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
    } else {
        param1.writeByte(this.emoteId);
        return;
    }
};

EmotePlayErrorMessage.prototype.deserializeAs_EmotePlayErrorMessage = function(param1) {
    this.emoteId = param1.readUnsignedByte();
    if (this.emoteId < 0 || this.emoteId > 255) {
        throw new Error("Forbidden value (" + this.emoteId + ") on element of EmotePlayErrorMessage.emoteId.");
    } else {
        return;
    }
};

EmotePlayErrorMessage.prototype.getMessageId = function() {
    return 5688;
};

EmotePlayErrorMessage.prototype.getClassName = function() {
    return 'EmotePlayErrorMessage';
};

module.exports.id = 5688;
module.exports.class = EmotePlayErrorMessage;
module.exports.getInstance = function() {
    return new EmotePlayErrorMessage;
};