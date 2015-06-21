var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TreasureHuntFlagRequestAnswerMessage = module.exports = function() {
    this.questType = 0;
    this.result = 0;
    this.index = 0;

    return this;
};

require('util').inherits(TreasureHuntFlagRequestAnswerMessage, d2com.NetworkMessage.class);

TreasureHuntFlagRequestAnswerMessage.prototype.serialize = function(output) {
    this.serializeAs_TreasureHuntFlagRequestAnswerMessage(output);
};

TreasureHuntFlagRequestAnswerMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TreasureHuntFlagRequestAnswerMessage(input);
};

TreasureHuntFlagRequestAnswerMessage.prototype.serializeAs_TreasureHuntFlagRequestAnswerMessage = function(param1) {
    param1.writeByte(this.questType);
    param1.writeByte(this.result);
    if (this.index < 0) {
        throw new Error("Forbidden value (" + this.index + ") on element index.");
    } else {
        param1.writeByte(this.index);
        return;
    }
};

TreasureHuntFlagRequestAnswerMessage.prototype.deserializeAs_TreasureHuntFlagRequestAnswerMessage = function(param1) {
    this.questType = param1.readByte();
    if (this.questType < 0) {
        throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntFlagRequestAnswerMessage.questType.");
    } else {
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error("Forbidden value (" + this.result + ") on element of TreasureHuntFlagRequestAnswerMessage.result.");
        } else {
            this.index = param1.readByte();
            if (this.index < 0) {
                throw new Error("Forbidden value (" + this.index + ") on element of TreasureHuntFlagRequestAnswerMessage.index.");
            } else {
                return;
            }
        }
    }
};

TreasureHuntFlagRequestAnswerMessage.prototype.getMessageId = function() {
    return 6507;
};

TreasureHuntFlagRequestAnswerMessage.prototype.getClassName = function() {
    return 'TreasureHuntFlagRequestAnswerMessage';
};

module.exports.id = 6507;