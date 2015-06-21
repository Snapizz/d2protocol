var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AchievementRewardSuccessMessage = function() {
    this.achievementId = 0;
};

require('util').inherits(AchievementRewardSuccessMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AchievementRewardSuccessMessage();
};

AchievementRewardSuccessMessage.prototype.serialize = function(output) {
    this.serializeAs_AchievementRewardSuccessMessage(output);
};

AchievementRewardSuccessMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AchievementRewardSuccessMessage(input);
};

AchievementRewardSuccessMessage.prototype.serializeAs_AchievementRewardSuccessMessage = function(param1) {
    param1.writeShort(this.achievementId);
};

AchievementRewardSuccessMessage.prototype.deserializeAs_AchievementRewardSuccessMessage = function(param1) {
    this.achievementId = param1.readShort();
};

AchievementRewardSuccessMessage.prototype.getMessageId = function() {
    return 6376;
};

AchievementRewardSuccessMessage.prototype.getClassName = function() {
    return 'AchievementRewardSuccessMessage';
};

module.exports.id = 6376;
module.exports.AchievementRewardSuccessMessage = AchievementRewardSuccessMessage;