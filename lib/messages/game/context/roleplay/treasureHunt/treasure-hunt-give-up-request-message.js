var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TreasureHuntGiveUpRequestMessage = module.exports = function() {
    this.questType = 0;

    return this;
};

require('util').inherits(TreasureHuntGiveUpRequestMessage, d2com.NetworkMessage.class);

TreasureHuntGiveUpRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_TreasureHuntGiveUpRequestMessage(output);
};

TreasureHuntGiveUpRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TreasureHuntGiveUpRequestMessage(input);
};

TreasureHuntGiveUpRequestMessage.prototype.serializeAs_TreasureHuntGiveUpRequestMessage = function(param1) {
    param1.writeByte(this.questType);
};

TreasureHuntGiveUpRequestMessage.prototype.deserializeAs_TreasureHuntGiveUpRequestMessage = function(param1) {
    this.questType = param1.readByte();
    if (this.questType < 0) {
        throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntGiveUpRequestMessage.questType.");
    } else {
        return;
    }
};

TreasureHuntGiveUpRequestMessage.prototype.getMessageId = function() {
    return 6487;
};

TreasureHuntGiveUpRequestMessage.prototype.getClassName = function() {
    return 'TreasureHuntGiveUpRequestMessage';
};

module.exports.id = 6487;