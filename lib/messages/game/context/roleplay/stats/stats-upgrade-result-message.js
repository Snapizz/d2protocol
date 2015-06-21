var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var StatsUpgradeResultMessage = function() {
    this.result = 0;
    this.nbCharacBoost = 0;
};

require('util').inherits(StatsUpgradeResultMessage, d2com.NetworkMessage.class);

StatsUpgradeResultMessage.prototype.serialize = function(output) {
    this.serializeAs_StatsUpgradeResultMessage(output);
};

StatsUpgradeResultMessage.prototype.deserialize = function(input) {
    this.deserializeAs_StatsUpgradeResultMessage(input);
};

StatsUpgradeResultMessage.prototype.serializeAs_StatsUpgradeResultMessage = function(param1) {
    param1.writeByte(this.result);
    if (this.nbCharacBoost < 0) {
        throw new Error("Forbidden value (" + this.nbCharacBoost + ") on element nbCharacBoost.");
    } else {
        param1.writeVarShort(this.nbCharacBoost);
        return;
    }
};

StatsUpgradeResultMessage.prototype.deserializeAs_StatsUpgradeResultMessage = function(param1) {
    this.result = param1.readByte();
    this.nbCharacBoost = param1.readVarUhShort();
    if (this.nbCharacBoost < 0) {
        throw new Error("Forbidden value (" + this.nbCharacBoost + ") on element of StatsUpgradeResultMessage.nbCharacBoost.");
    } else {
        return;
    }
};

StatsUpgradeResultMessage.prototype.getMessageId = function() {
    return 5609;
};

StatsUpgradeResultMessage.prototype.getClassName = function() {
    return 'StatsUpgradeResultMessage';
};

module.exports.id = 5609;
module.exports.class = StatsUpgradeResultMessage;
module.exports.getInstance = function() {
    return new StatsUpgradeResultMessage;
};