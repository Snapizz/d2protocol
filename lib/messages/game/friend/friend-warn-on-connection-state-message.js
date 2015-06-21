var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendWarnOnConnectionStateMessage = function() {
    this.enable = false;
};

require('util').inherits(FriendWarnOnConnectionStateMessage, d2com.NetworkMessage.class);

FriendWarnOnConnectionStateMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendWarnOnConnectionStateMessage(output);
};

FriendWarnOnConnectionStateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendWarnOnConnectionStateMessage(input);
};

FriendWarnOnConnectionStateMessage.prototype.serializeAs_FriendWarnOnConnectionStateMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

FriendWarnOnConnectionStateMessage.prototype.deserializeAs_FriendWarnOnConnectionStateMessage = function(param1) {
    this.enable = param1.readBoolean();
};

FriendWarnOnConnectionStateMessage.prototype.getMessageId = function() {
    return 5630;
};

FriendWarnOnConnectionStateMessage.prototype.getClassName = function() {
    return 'FriendWarnOnConnectionStateMessage';
};

module.exports.id = 5630;
module.exports.class = FriendWarnOnConnectionStateMessage;
module.exports.getInstance = function() {
    return new FriendWarnOnConnectionStateMessage;
};