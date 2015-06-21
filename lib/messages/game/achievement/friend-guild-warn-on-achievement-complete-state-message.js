var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var FriendGuildWarnOnAchievementCompleteStateMessage = function() {
    this.enable = false;
};

require('util').inherits(FriendGuildWarnOnAchievementCompleteStateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new FriendGuildWarnOnAchievementCompleteStateMessage();
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.serialize = function(output) {
    this.serializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(output);
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_FriendGuildWarnOnAchievementCompleteStateMessage(input);
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.serializeAs_FriendGuildWarnOnAchievementCompleteStateMessage = function(param1) {
    param1.writeBoolean(this.enable);
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.deserializeAs_FriendGuildWarnOnAchievementCompleteStateMessage = function(param1) {
    this.enable = param1.readBoolean();
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.getMessageId = function() {
    return 6383;
};

FriendGuildWarnOnAchievementCompleteStateMessage.prototype.getClassName = function() {
    return 'FriendGuildWarnOnAchievementCompleteStateMessage';
};

module.exports.id = 6383;
module.exports.FriendGuildWarnOnAchievementCompleteStateMessage = FriendGuildWarnOnAchievementCompleteStateMessage;