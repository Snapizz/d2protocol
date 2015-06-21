var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendWarnOnLevelGainStateMessage = function() {
    this.enable = false;
};

require('util').inherits(FriendWarnOnLevelGainStateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new FriendWarnOnLevelGainStateMessage();
};

FriendWarnOnLevelGainStateMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendWarnOnLevelGainStateMessage(output);
};

FriendWarnOnLevelGainStateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendWarnOnLevelGainStateMessage(input);
};

FriendWarnOnLevelGainStateMessage.prototype.serializeAs_FriendWarnOnLevelGainStateMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

FriendWarnOnLevelGainStateMessage.prototype.deserializeAs_FriendWarnOnLevelGainStateMessage = function(param1) {
    this.enable = param1.readBoolean();
};

FriendWarnOnLevelGainStateMessage.prototype.getMessageId = function() {
    return 6078;
};

FriendWarnOnLevelGainStateMessage.prototype.getClassName = function() {
    return 'FriendWarnOnLevelGainStateMessage';
};

module.exports.id = 6078;
module.exports.FriendWarnOnLevelGainStateMessage = FriendWarnOnLevelGainStateMessage;