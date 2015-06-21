var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendDeleteResultMessage = function() {
    this.success = false;
    this.name = "";
};

require('util').inherits(FriendDeleteResultMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new FriendDeleteResultMessage();
};

FriendDeleteResultMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendDeleteResultMessage(output);
};

FriendDeleteResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendDeleteResultMessage(input);
};

FriendDeleteResultMessage.prototype.serializeAs_FriendDeleteResultMessage = function(param1) {
    param1.writeBoolean(this.success);
    param1.writeUTF(this.name);
};

FriendDeleteResultMessage.prototype.deserializeAs_FriendDeleteResultMessage = function(param1) {
    this.success = param1.readBoolean();
    this.name = param1.readUTF();
};

FriendDeleteResultMessage.prototype.getMessageId = function() {
    return 5601;
};

FriendDeleteResultMessage.prototype.getClassName = function() {
    return 'FriendDeleteResultMessage';
};

module.exports.id = 5601;
module.exports.FriendDeleteResultMessage = FriendDeleteResultMessage;