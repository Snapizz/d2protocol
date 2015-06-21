var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChatSmileyRequestMessage = function() {
    this.smileyId = 0;
};

require('util').inherits(ChatSmileyRequestMessage, d2com.NetworkMessage.class);

ChatSmileyRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_ChatSmileyRequestMessage(output);
};

ChatSmileyRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChatSmileyRequestMessage(input);
};

ChatSmileyRequestMessage.prototype.serializeAs_ChatSmileyRequestMessage = function(param1) {
    if (this.smileyId < 0) {
        throw new Error("Forbidden value (" + this.smileyId + ") on element smileyId.");
    } else {
        param1.writeByte(this.smileyId);
        return;
    }
};

ChatSmileyRequestMessage.prototype.deserializeAs_ChatSmileyRequestMessage = function(param1) {
    this.smileyId = param1.readByte();
    if (this.smileyId < 0) {
        throw new Error("Forbidden value (" + this.smileyId + ") on element of ChatSmileyRequestMessage.smileyId.");
    } else {
        return;
    }
};

ChatSmileyRequestMessage.prototype.getMessageId = function() {
    return 800;
};

ChatSmileyRequestMessage.prototype.getClassName = function() {
    return 'ChatSmileyRequestMessage';
};

module.exports.id = 800;
module.exports.class = ChatSmileyRequestMessage;
module.exports.getInstance = function() {
    return new ChatSmileyRequestMessage;
};