var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var LifePointsRegenEndMessage = function() {
    this.lifePointsGained = 0;
};

require('util').inherits(LifePointsRegenEndMessage, require('./update-life-points-message.js').UpdateLifePointsMessage);

module.exports = function() {
    return new LifePointsRegenEndMessage();
};

LifePointsRegenEndMessage.prototype.serialize = function(output) {
    this.serializeAs_LifePointsRegenEndMessage(output);
};

LifePointsRegenEndMessage.prototype.deserialize = function(input) {
    this.deserializeAs_LifePointsRegenEndMessage(input);
};

LifePointsRegenEndMessage.prototype.serializeAs_LifePointsRegenEndMessage = function(param1) {
    this.serializeAs_UpdateLifePointsMessage(param1);
    if (this.lifePointsGained < 0) {
        throw new Error("Forbidden value (" + this.lifePointsGained + ") on element lifePointsGained.");
    } else {
        param1.writeVarInt(this.lifePointsGained);
        return;
    }
};

LifePointsRegenEndMessage.prototype.deserializeAs_LifePointsRegenEndMessage = function(param1) {
    this.deserializeAs_UpdateLifePointsMessage(param1);
    this.lifePointsGained = param1.readVarUhInt();
    if (this.lifePointsGained < 0) {
        throw new Error("Forbidden value (" + this.lifePointsGained + ") on element of LifePointsRegenEndMessage.lifePointsGained.");
    } else {
        return;
    }
};

LifePointsRegenEndMessage.prototype.getMessageId = function() {
    return 5686;
};

LifePointsRegenEndMessage.prototype.getClassName = function() {
    return 'LifePointsRegenEndMessage';
};

module.exports.id = 5686;
module.exports.LifePointsRegenEndMessage = LifePointsRegenEndMessage;