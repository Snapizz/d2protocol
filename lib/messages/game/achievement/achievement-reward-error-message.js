var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AchievementRewardErrorMessage = function() {
    this.achievementId = 0;
};

require('util').inherits(AchievementRewardErrorMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AchievementRewardErrorMessage();
};

AchievementRewardErrorMessage.prototype.serialize = function(output) {
    this.serializeAs_AchievementRewardErrorMessage(output);
};

AchievementRewardErrorMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AchievementRewardErrorMessage(input);
};

AchievementRewardErrorMessage.prototype.serializeAs_AchievementRewardErrorMessage = function(param1) {
    param1.writeShort(this.achievementId);
};

AchievementRewardErrorMessage.prototype.deserializeAs_AchievementRewardErrorMessage = function(param1) {
    this.achievementId = param1.readShort();
};

AchievementRewardErrorMessage.prototype.getMessageId = function() {
    return 6375;
};

AchievementRewardErrorMessage.prototype.getClassName = function() {
    return 'AchievementRewardErrorMessage';
};

module.exports.id = 6375;
module.exports.AchievementRewardErrorMessage = AchievementRewardErrorMessage;