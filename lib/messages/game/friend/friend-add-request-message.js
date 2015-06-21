var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendAddRequestMessage = function() {
    this.name = "";
};

require('util').inherits(FriendAddRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new FriendAddRequestMessage();
};

FriendAddRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendAddRequestMessage(output);
};

FriendAddRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendAddRequestMessage(input);
};

FriendAddRequestMessage.prototype.serializeAs_FriendAddRequestMessage = function(param1) {
    param1.writeUTF(this.name);
};

FriendAddRequestMessage.prototype.deserializeAs_FriendAddRequestMessage = function(param1) {
    this.name = param1.readUTF();
};

FriendAddRequestMessage.prototype.getMessageId = function() {
    return 4004;
};

FriendAddRequestMessage.prototype.getClassName = function() {
    return 'FriendAddRequestMessage';
};

module.exports.id = 4004;
module.exports.FriendAddRequestMessage = FriendAddRequestMessage;