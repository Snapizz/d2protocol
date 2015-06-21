var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChatServerCopyMessage = function() {
    this.receiverId = 0;
    this.receiverName = "";
};

require('util').inherits(ChatServerCopyMessage, require('./chat-abstract-server-message.js').class);

ChatServerCopyMessage.prototype.serialize = function(output) {
    this.serializeAs_ChatServerCopyMessage(output);
};

ChatServerCopyMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChatServerCopyMessage(input);
};

ChatServerCopyMessage.prototype.serializeAs_ChatServerCopyMessage = function(param1) {
    this.serializeAs_ChatAbstractServerMessageAs_ChatAbstractServerMessage(param1);
    if (this.receiverId < 0) {
        throw new Error("Forbidden value (" + this.receiverId + ") on element receiverId.");
    } else {
        param1.writeVarInt(this.receiverId);
        param1.writeUTF(this.receiverName);
        return;
    }
};

ChatServerCopyMessage.prototype.deserializeAs_ChatServerCopyMessage = function(param1) {
    this.deserializeAs_ChatAbstractServerMessage(param1);
    this.receiverId = param1.readVarUhInt();
    if (this.receiverId < 0) {
        throw new Error("Forbidden value (" + this.receiverId + ") on element of ChatServerCopyMessage.receiverId.");
    } else {
        this.receiverName = param1.readUTF();
        return;
    }
};

ChatServerCopyMessage.prototype.getMessageId = function() {
    return 882;
};

ChatServerCopyMessage.prototype.getClassName = function() {
    return 'ChatServerCopyMessage';
};

module.exports.id = 882;
module.exports.class = ChatServerCopyMessage;
module.exports.getInstance = function() {
    return new ChatServerCopyMessage;
};