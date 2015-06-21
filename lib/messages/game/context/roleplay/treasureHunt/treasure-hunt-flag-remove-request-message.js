var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TreasureHuntFlagRemoveRequestMessage = module.exports = function() {
    this.questType = 0;
    this.index = 0;

    return this;
};

require('util').inherits(TreasureHuntFlagRemoveRequestMessage, d2com.NetworkMessage.class);

TreasureHuntFlagRemoveRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_TreasureHuntFlagRemoveRequestMessage(output);
};

TreasureHuntFlagRemoveRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TreasureHuntFlagRemoveRequestMessage(input);
};

TreasureHuntFlagRemoveRequestMessage.prototype.serializeAs_TreasureHuntFlagRemoveRequestMessage = function(param1) {
    param1.writeByte(this.questType);
    if (this.index < 0) {
        throw new Error("Forbidden value (" + this.index + ") on element index.");
    } else {
        param1.writeByte(this.index);
        return;
    }
};

TreasureHuntFlagRemoveRequestMessage.prototype.deserializeAs_TreasureHuntFlagRemoveRequestMessage = function(param1) {
    this.questType = param1.readByte();
    if (this.questType < 0) {
        throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntFlagRemoveRequestMessage.questType.");
    } else {
        this.index = param1.readByte();
        if (this.index < 0) {
            throw new Error("Forbidden value (" + this.index + ") on element of TreasureHuntFlagRemoveRequestMessage.index.");
        } else {
            return;
        }
    }
};

TreasureHuntFlagRemoveRequestMessage.prototype.getMessageId = function() {
    return 6510;
};

TreasureHuntFlagRemoveRequestMessage.prototype.getClassName = function() {
    return 'TreasureHuntFlagRemoveRequestMessage';
};

module.exports.id = 6510;