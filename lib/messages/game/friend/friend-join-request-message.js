var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendJoinRequestMessage = function() {
    this.name = "";
};

require('util').inherits(FriendJoinRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new FriendJoinRequestMessage();
};

FriendJoinRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendJoinRequestMessage(output);
};

FriendJoinRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendJoinRequestMessage(input);
};

FriendJoinRequestMessage.prototype.serializeAs_FriendJoinRequestMessage = function(param1) {
    param1.writeUTF(this.name);
};

FriendJoinRequestMessage.prototype.deserializeAs_FriendJoinRequestMessage = function(param1) {
    this.name = param1.readUTF();
};

FriendJoinRequestMessage.prototype.getMessageId = function() {
    return 5605;
};

FriendJoinRequestMessage.prototype.getClassName = function() {
    return 'FriendJoinRequestMessage';
};

module.exports.id = 5605;
module.exports.FriendJoinRequestMessage = FriendJoinRequestMessage;