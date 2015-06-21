var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ChatAdminServerMessage = function() {

};

require('util').inherits(ChatAdminServerMessage, require('./chat-server-message.js'));

module.exports = function() {
    return new ChatAdminServerMessage();
};

ChatAdminServerMessage.prototype.serialize = function(output) {
    this.serializeAs_ChatAdminServerMessage(output);
};

ChatAdminServerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ChatAdminServerMessage(input);
};

ChatAdminServerMessage.prototype.serializeAs_ChatAdminServerMessage = function(param1) {
    this.serializeAs_ChatServerMessage(param1);
};

ChatAdminServerMessage.prototype.deserializeAs_ChatAdminServerMessage = function(param1) {
    this.deserializeAs_ChatServerMessage(param1);
};

ChatAdminServerMessage.prototype.getMessageId = function() {
    return 6135;
};

ChatAdminServerMessage.prototype.getClassName = function() {
    return 'ChatAdminServerMessage';
};

module.exports.id = 6135;
module.exports.ChatAdminServerMessage = ChatAdminServerMessage;