var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var TreasureHuntFlagRequestMessage = function() {
    this.questType = 0;
    this.index = 0;
};

require('util').inherits(TreasureHuntFlagRequestMessage, d2com.NetworkMessage.class);

TreasureHuntFlagRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_TreasureHuntFlagRequestMessage(output);
};

TreasureHuntFlagRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TreasureHuntFlagRequestMessage(input);
};

TreasureHuntFlagRequestMessage.prototype.serializeAs_TreasureHuntFlagRequestMessage = function(param1) {
    param1.writeByte(this.questType);
    if (this.index < 0) {
        throw new Error("Forbidden value (" + this.index + ") on element index.");
    } else {
        param1.writeByte(this.index);
        return;
    }
};

TreasureHuntFlagRequestMessage.prototype.deserializeAs_TreasureHuntFlagRequestMessage = function(param1) {
    this.questType = param1.readByte();
    if (this.questType < 0) {
        throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntFlagRequestMessage.questType.");
    } else {
        this.index = param1.readByte();
        if (this.index < 0) {
            throw new Error("Forbidden value (" + this.index + ") on element of TreasureHuntFlagRequestMessage.index.");
        } else {
            return;
        }
    }
};

TreasureHuntFlagRequestMessage.prototype.getMessageId = function() {
    return 6508;
};

TreasureHuntFlagRequestMessage.prototype.getClassName = function() {
    return 'TreasureHuntFlagRequestMessage';
};

module.exports.id = 6508;
module.exports.class = TreasureHuntFlagRequestMessage;
module.exports.getInstance = function() {
    return new TreasureHuntFlagRequestMessage;
};