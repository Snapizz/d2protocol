var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChatClientMultiMessage = function() {
    this.channel = 0;
};

require('util').inherits(ChatClientMultiMessage, require('./chat-abstract-client-message.js').class);

ChatClientMultiMessage.prototype.serialize = function(output) {
    this.serializeAs_ChatClientMultiMessage(output);
};

ChatClientMultiMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChatClientMultiMessage(input);
};

ChatClientMultiMessage.prototype.serializeAs_ChatClientMultiMessage = function(param1) {
    this.serializeAs_ChatAbstractClientMessageAs_ChatAbstractClientMessage(param1);
    param1.writeByte(this.channel);
};

ChatClientMultiMessage.prototype.deserializeAs_ChatClientMultiMessage = function(param1) {
    this.deserializeAs_ChatAbstractClientMessage(param1);
    this.channel = param1.readByte();
    if (this.channel < 0) {
        throw new Error("Forbidden value (" + this.channel + ") on element of ChatClientMultiMessage.channel.");
    } else {
        return;
    }
};

ChatClientMultiMessage.prototype.getMessageId = function() {
    return 861;
};

ChatClientMultiMessage.prototype.getClassName = function() {
    return 'ChatClientMultiMessage';
};

module.exports.id = 861;
module.exports.class = ChatClientMultiMessage;
module.exports.getInstance = function() {
    return new ChatClientMultiMessage;
};