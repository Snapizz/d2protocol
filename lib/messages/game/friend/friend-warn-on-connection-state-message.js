var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendWarnOnConnectionStateMessage = module.exports = function() {
    this.enable = false;

    return this;
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