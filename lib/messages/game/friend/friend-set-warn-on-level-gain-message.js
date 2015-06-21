var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendSetWarnOnLevelGainMessage = module.exports = function() {
    this.enable = false;

    return this;
};

require('util').inherits(FriendSetWarnOnLevelGainMessage, d2com.NetworkMessage.class);

FriendSetWarnOnLevelGainMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendSetWarnOnLevelGainMessage(output);
};

FriendSetWarnOnLevelGainMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendSetWarnOnLevelGainMessage(input);
};

FriendSetWarnOnLevelGainMessage.prototype.serializeAs_FriendSetWarnOnLevelGainMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

FriendSetWarnOnLevelGainMessage.prototype.deserializeAs_FriendSetWarnOnLevelGainMessage = function(param1) {
    this.enable = param1.readBoolean();
};

FriendSetWarnOnLevelGainMessage.prototype.getMessageId = function() {
    return 6077;
};

FriendSetWarnOnLevelGainMessage.prototype.getClassName = function() {
    return 'FriendSetWarnOnLevelGainMessage';
};

module.exports.id = 6077;