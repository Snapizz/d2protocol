var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChatClientPrivateMessage = function() {
    this.receiver = "";
};

require('util').inherits(ChatClientPrivateMessage, require('./chat-abstract-client-message.js').ChatAbstractClientMessage);

module.exports = function() {
    return new ChatClientPrivateMessage();
};

ChatClientPrivateMessage.prototype.serialize = function(output) {
    this.serializeAs_ChatClientPrivateMessage(output);
};

ChatClientPrivateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChatClientPrivateMessage(input);
};

ChatClientPrivateMessage.prototype.serializeAs_ChatClientPrivateMessage = function(param1) {
    this.serializeAs_ChatAbstractClientMessage(param1);
    param1.writeUTF(this.receiver);
};

ChatClientPrivateMessage.prototype.deserializeAs_ChatClientPrivateMessage = function(param1) {
    this.deserializeAs_ChatAbstractClientMessage(param1);
    this.receiver = param1.readUTF();
};

ChatClientPrivateMessage.prototype.getMessageId = function() {
    return 851;
};

ChatClientPrivateMessage.prototype.getClassName = function() {
    return 'ChatClientPrivateMessage';
};

module.exports.id = 851;
module.exports.ChatClientPrivateMessage = ChatClientPrivateMessage;