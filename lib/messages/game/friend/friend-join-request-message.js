var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendJoinRequestMessage = module.exports = function() {
    this.name = "";

    return this;
};

require('util').inherits(FriendJoinRequestMessage, d2com.NetworkMessage.class);

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