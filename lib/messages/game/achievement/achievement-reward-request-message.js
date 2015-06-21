var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var AchievementRewardRequestMessage = function() {
    this.achievementId = 0;
};

require('util').inherits(AchievementRewardRequestMessage, d2com.NetworkMessage.class);

AchievementRewardRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_AchievementRewardRequestMessage(output);
};

AchievementRewardRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AchievementRewardRequestMessage(input);
};

AchievementRewardRequestMessage.prototype.serializeAs_AchievementRewardRequestMessage = function(param1) {
    param1.writeShort(this.achievementId);
};

AchievementRewardRequestMessage.prototype.deserializeAs_AchievementRewardRequestMessage = function(param1) {
    this.achievementId = param1.readShort();
};

AchievementRewardRequestMessage.prototype.getMessageId = function() {
    return 6377;
};

AchievementRewardRequestMessage.prototype.getClassName = function() {
    return 'AchievementRewardRequestMessage';
};

module.exports.id = 6377;
module.exports.class = AchievementRewardRequestMessage;
module.exports.getInstance = function() {
    return new AchievementRewardRequestMessage;
};