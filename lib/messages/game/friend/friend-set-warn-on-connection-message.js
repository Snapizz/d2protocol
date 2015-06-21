var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var FriendSetWarnOnConnectionMessage = function() {
    this.enable = false;
};

require('util').inherits(FriendSetWarnOnConnectionMessage, d2com.NetworkMessage.class);

FriendSetWarnOnConnectionMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendSetWarnOnConnectionMessage(output);
};

FriendSetWarnOnConnectionMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendSetWarnOnConnectionMessage(input);
};

FriendSetWarnOnConnectionMessage.prototype.serializeAs_FriendSetWarnOnConnectionMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

FriendSetWarnOnConnectionMessage.prototype.deserializeAs_FriendSetWarnOnConnectionMessage = function(param1) {
    this.enable = param1.readBoolean();
};

FriendSetWarnOnConnectionMessage.prototype.getMessageId = function() {
    return 5602;
};

FriendSetWarnOnConnectionMessage.prototype.getClassName = function() {
    return 'FriendSetWarnOnConnectionMessage';
};

module.exports.id = 5602;
module.exports.class = FriendSetWarnOnConnectionMessage;
module.exports.getInstance = function() {
    return new FriendSetWarnOnConnectionMessage;
};