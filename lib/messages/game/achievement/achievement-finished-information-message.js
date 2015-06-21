var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var AchievementFinishedInformationMessage = function() {
    this.name = "";
    this.playerId = 0;
};

require('util').inherits(AchievementFinishedInformationMessage, require('./achievement-finished-message.js').AchievementFinishedMessage);

module.exports = function() {
    return new AchievementFinishedInformationMessage();
};

AchievementFinishedInformationMessage.prototype.serialize = function(output) {
    this.serializeAs_AchievementFinishedInformationMessage(output);
};

AchievementFinishedInformationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AchievementFinishedInformationMessage(input);
};

AchievementFinishedInformationMessage.prototype.serializeAs_AchievementFinishedInformationMessage = function(param1) {
    this.serializeAs_AchievementFinishedMessage(param1);
    param1.writeUTF(this.name);
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
        param1.writeVarInt(this.playerId);
        return;
    }
};

AchievementFinishedInformationMessage.prototype.deserializeAs_AchievementFinishedInformationMessage = function(param1) {
    this.deserializeAs_AchievementFinishedMessage(param1);
    this.name = param1.readUTF();
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element of AchievementFinishedInformationMessage.playerId.");
    } else {
        return;
    }
};

AchievementFinishedInformationMessage.prototype.getMessageId = function() {
    return 6381;
};

AchievementFinishedInformationMessage.prototype.getClassName = function() {
    return 'AchievementFinishedInformationMessage';
};

module.exports.id = 6381;
module.exports.AchievementFinishedInformationMessage = AchievementFinishedInformationMessage;