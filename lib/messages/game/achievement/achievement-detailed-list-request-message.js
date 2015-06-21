var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AchievementDetailedListRequestMessage = module.exports = function() {
    this.categoryId = 0;

    return this;
};

require('util').inherits(AchievementDetailedListRequestMessage, d2com.NetworkMessage.class);

AchievementDetailedListRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_AchievementDetailedListRequestMessage(output);
};

AchievementDetailedListRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AchievementDetailedListRequestMessage(input);
};

AchievementDetailedListRequestMessage.prototype.serializeAs_AchievementDetailedListRequestMessage = function(param1) {
    if (this.categoryId < 0) {
        throw new Error("Forbidden value (" + this.categoryId + ") on element categoryId.");
    } else {
        param1.writeVarShort(this.categoryId);
        return;
    }
};

AchievementDetailedListRequestMessage.prototype.deserializeAs_AchievementDetailedListRequestMessage = function(param1) {
    this.categoryId = param1.readVarUhShort();
    if (this.categoryId < 0) {
        throw new Error("Forbidden value (" + this.categoryId + ") on element of AchievementDetailedListRequestMessage.categoryId.");
    } else {
        return;
    }
};

AchievementDetailedListRequestMessage.prototype.getMessageId = function() {
    return 6357;
};

AchievementDetailedListRequestMessage.prototype.getClassName = function() {
    return 'AchievementDetailedListRequestMessage';
};

module.exports.id = 6357;