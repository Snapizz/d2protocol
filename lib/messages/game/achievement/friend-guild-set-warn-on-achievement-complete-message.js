var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendGuildSetWarnOnAchievementCompleteMessage = function() {
    this.enable = false;
};

require('util').inherits(FriendGuildSetWarnOnAchievementCompleteMessage, d2com.NetworkMessage.class);

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(output);
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendGuildSetWarnOnAchievementCompleteMessage(input);
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.serializeAs_FriendGuildSetWarnOnAchievementCompleteMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.deserializeAs_FriendGuildSetWarnOnAchievementCompleteMessage = function(param1) {
    this.enable = param1.readBoolean();
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.getMessageId = function() {
    return 6382;
};

FriendGuildSetWarnOnAchievementCompleteMessage.prototype.getClassName = function() {
    return 'FriendGuildSetWarnOnAchievementCompleteMessage';
};

module.exports.id = 6382;
module.exports.class = FriendGuildSetWarnOnAchievementCompleteMessage;
module.exports.getInstance = function() {
    return new FriendGuildSetWarnOnAchievementCompleteMessage;
};