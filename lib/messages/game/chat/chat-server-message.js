var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChatServerMessage = function() {
    this.senderId = 0;
    this.senderName = "";
    this.senderAccountId = 0;
};

require('util').inherits(ChatServerMessage, require('./chat-abstract-server-message.js').class);

ChatServerMessage.prototype.serialize = function(output) {
    this.serializeAs_ChatServerMessage(output);
};

ChatServerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChatServerMessage(input);
};

ChatServerMessage.prototype.serializeAs_ChatServerMessage = function(param1) {
    this.serializeAs_ChatAbstractServerMessageAs_ChatAbstractServerMessage(param1);
    param1.writeInt(this.senderId);
    param1.writeUTF(this.senderName);
    if (this.senderAccountId < 0) {
        throw new Error("Forbidden value (" + this.senderAccountId + ") on element senderAccountId.");
    } else {
        param1.writeInt(this.senderAccountId);
        return;
    }
};

ChatServerMessage.prototype.deserializeAs_ChatServerMessage = function(param1) {
    this.deserializeAs_ChatAbstractServerMessage(param1);
    this.senderId = param1.readInt();
    this.senderName = param1.readUTF();
    this.senderAccountId = param1.readInt();
    if (this.senderAccountId < 0) {
        throw new Error("Forbidden value (" + this.senderAccountId + ") on element of ChatServerMessage.senderAccountId.");
    } else {
        return;
    }
};

ChatServerMessage.prototype.getMessageId = function() {
    return 881;
};

ChatServerMessage.prototype.getClassName = function() {
    return 'ChatServerMessage';
};

module.exports.id = 881;
module.exports.class = ChatServerMessage;
module.exports.getInstance = function() {
    return new ChatServerMessage;
};