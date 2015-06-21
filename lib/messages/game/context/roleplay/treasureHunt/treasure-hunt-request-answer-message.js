var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TreasureHuntRequestAnswerMessage = module.exports = function() {
    this.questType = 0;
    this.result = 0;

    return this;
};

require('util').inherits(TreasureHuntRequestAnswerMessage, d2com.NetworkMessage.class);

TreasureHuntRequestAnswerMessage.prototype.serialize = function(output) {
    this.serializeAs_TreasureHuntRequestAnswerMessage(output);
};

TreasureHuntRequestAnswerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TreasureHuntRequestAnswerMessage(input);
};

TreasureHuntRequestAnswerMessage.prototype.serializeAs_TreasureHuntRequestAnswerMessage = function(param1) {
    param1.writeByte(this.questType);
    param1.writeByte(this.result);
};

TreasureHuntRequestAnswerMessage.prototype.deserializeAs_TreasureHuntRequestAnswerMessage = function(param1) {
    this.questType = param1.readByte();
    if (this.questType < 0) {
        throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntRequestAnswerMessage.questType.");
    } else {
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error("Forbidden value (" + this.result + ") on element of TreasureHuntRequestAnswerMessage.result.");
        } else {
            return;
        }
    }
};

TreasureHuntRequestAnswerMessage.prototype.getMessageId = function() {
    return 6489;
};

TreasureHuntRequestAnswerMessage.prototype.getClassName = function() {
    return 'TreasureHuntRequestAnswerMessage';
};

module.exports.id = 6489;