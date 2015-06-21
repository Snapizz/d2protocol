var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var EmoteRemoveMessage = function() {
    this.emoteId = 0;
};

require('util').inherits(EmoteRemoveMessage, d2com.NetworkMessage.class);

EmoteRemoveMessage.prototype.serialize = function(output) {
    this.serializeAs_EmoteRemoveMessage(output);
};

EmoteRemoveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_EmoteRemoveMessage(input);
};

EmoteRemoveMessage.prototype.serializeAs_EmoteRemoveMessage = function(param1) {
    if (this.emoteId < 0 || this.emoteId > 255) {
        throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
    } else {
        param1.writeByte(this.emoteId);
        return;
    }
};

EmoteRemoveMessage.prototype.deserializeAs_EmoteRemoveMessage = function(param1) {
    this.emoteId = param1.readUnsignedByte();
    if (this.emoteId < 0 || this.emoteId > 255) {
        throw new Error("Forbidden value (" + this.emoteId + ") on element of EmoteRemoveMessage.emoteId.");
    } else {
        return;
    }
};

EmoteRemoveMessage.prototype.getMessageId = function() {
    return 5687;
};

EmoteRemoveMessage.prototype.getClassName = function() {
    return 'EmoteRemoveMessage';
};

module.exports.id = 5687;
module.exports.class = EmoteRemoveMessage;
module.exports.getInstance = function() {
    return new EmoteRemoveMessage;
};