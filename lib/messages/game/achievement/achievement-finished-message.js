var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var AchievementFinishedMessage = function() {
    this.id = 0;
    this.finishedlevel = 0;
};

require('util').inherits(AchievementFinishedMessage, d2com.NetworkMessage.class);

AchievementFinishedMessage.prototype.serialize = function(output) {
    this.serializeAs_AchievementFinishedMessage(output);
};

AchievementFinishedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AchievementFinishedMessage(input);
};

AchievementFinishedMessage.prototype.serializeAs_AchievementFinishedMessage = function(param1) {
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element id.");
    } else {
        param1.writeVarShort(this.id);
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error("Forbidden value (" + this.finishedlevel + ") on element finishedlevel.");
        } else {
            param1.writeByte(this.finishedlevel);
            return;
        }
    }
};

AchievementFinishedMessage.prototype.deserializeAs_AchievementFinishedMessage = function(param1) {
    this.id = param1.readVarUhShort();
    if (this.id < 0) {
        throw new Error("Forbidden value (" + this.id + ") on element of AchievementFinishedMessage.id.");
    } else {
        this.finishedlevel = param1.readUnsignedByte();
        if (this.finishedlevel < 0 || this.finishedlevel > 200) {
            throw new Error("Forbidden value (" + this.finishedlevel + ") on element of AchievementFinishedMessage.finishedlevel.");
        } else {
            return;
        }
    }
};

AchievementFinishedMessage.prototype.getMessageId = function() {
    return 6208;
};

AchievementFinishedMessage.prototype.getClassName = function() {
    return 'AchievementFinishedMessage';
};

module.exports.id = 6208;
module.exports.class = AchievementFinishedMessage;
module.exports.getInstance = function() {
    return new AchievementFinishedMessage;
};