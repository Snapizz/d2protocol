var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendDeleteRequestMessage = function() {
    this.accountId = 0;
};

require('util').inherits(FriendDeleteRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new FriendDeleteRequestMessage();
};

FriendDeleteRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendDeleteRequestMessage(output);
};

FriendDeleteRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendDeleteRequestMessage(input);
};

FriendDeleteRequestMessage.prototype.serializeAs_FriendDeleteRequestMessage = function(param1) {
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
    } else {
        param1.writeInt(this.accountId);
        return;
    }
};

FriendDeleteRequestMessage.prototype.deserializeAs_FriendDeleteRequestMessage = function(param1) {
    this.accountId = param1.readInt();
    if (this.accountId < 0) {
        throw new Error("Forbidden value (" + this.accountId + ") on element of FriendDeleteRequestMessage.accountId.");
    } else {
        return;
    }
};

FriendDeleteRequestMessage.prototype.getMessageId = function() {
    return 5603;
};

FriendDeleteRequestMessage.prototype.getClassName = function() {
    return 'FriendDeleteRequestMessage';
};

module.exports.id = 5603;
module.exports.FriendDeleteRequestMessage = FriendDeleteRequestMessage;