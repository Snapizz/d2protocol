var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartedWithPodsMessage = function() {
    this.firstCharacterId = 0;
    this.firstCharacterCurrentWeight = 0;
    this.firstCharacterMaxWeight = 0;
    this.secondCharacterId = 0;
    this.secondCharacterCurrentWeight = 0;
    this.secondCharacterMaxWeight = 0;
};

require('util').inherits(ExchangeStartedWithPodsMessage, require('./exchange-started-message.js').ExchangeStartedMessage);

module.exports = function() {
    return new ExchangeStartedWithPodsMessage();
};

ExchangeStartedWithPodsMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartedWithPodsMessage(output);
};

ExchangeStartedWithPodsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartedWithPodsMessage(input);
};

ExchangeStartedWithPodsMessage.prototype.serializeAs_ExchangeStartedWithPodsMessage = function(param1) {
    this.serializeAs_ExchangeStartedMessage(param1);
    param1.writeInt(this.firstCharacterId);
    if (this.firstCharacterCurrentWeight < 0) {
        throw new Error("Forbidden value (" + this.firstCharacterCurrentWeight + ") on element firstCharacterCurrentWeight.");
    } else {
        param1.writeVarInt(this.firstCharacterCurrentWeight);
        if (this.firstCharacterMaxWeight < 0) {
            throw new Error("Forbidden value (" + this.firstCharacterMaxWeight + ") on element firstCharacterMaxWeight.");
        } else {
            param1.writeVarInt(this.firstCharacterMaxWeight);
            param1.writeInt(this.secondCharacterId);
            if (this.secondCharacterCurrentWeight < 0) {
                throw new Error("Forbidden value (" + this.secondCharacterCurrentWeight + ") on element secondCharacterCurrentWeight.");
            } else {
                param1.writeVarInt(this.secondCharacterCurrentWeight);
                if (this.secondCharacterMaxWeight < 0) {
                    throw new Error("Forbidden value (" + this.secondCharacterMaxWeight + ") on element secondCharacterMaxWeight.");
                } else {
                    param1.writeVarInt(this.secondCharacterMaxWeight);
                    return;
                }
            }
        }
    }
};

ExchangeStartedWithPodsMessage.prototype.deserializeAs_ExchangeStartedWithPodsMessage = function(param1) {
    this.deserializeAs_ExchangeStartedMessage(param1);
    this.firstCharacterId = param1.readInt();
    this.firstCharacterCurrentWeight = param1.readVarUhInt();
    if (this.firstCharacterCurrentWeight < 0) {
        throw new Error("Forbidden value (" + this.firstCharacterCurrentWeight + ") on element of ExchangeStartedWithPodsMessage.firstCharacterCurrentWeight.");
    } else {
        this.firstCharacterMaxWeight = param1.readVarUhInt();
        if (this.firstCharacterMaxWeight < 0) {
            throw new Error("Forbidden value (" + this.firstCharacterMaxWeight + ") on element of ExchangeStartedWithPodsMessage.firstCharacterMaxWeight.");
        } else {
            this.secondCharacterId = param1.readInt();
            this.secondCharacterCurrentWeight = param1.readVarUhInt();
            if (this.secondCharacterCurrentWeight < 0) {
                throw new Error("Forbidden value (" + this.secondCharacterCurrentWeight + ") on element of ExchangeStartedWithPodsMessage.secondCharacterCurrentWeight.");
            } else {
                this.secondCharacterMaxWeight = param1.readVarUhInt();
                if (this.secondCharacterMaxWeight < 0) {
                    throw new Error("Forbidden value (" + this.secondCharacterMaxWeight + ") on element of ExchangeStartedWithPodsMessage.secondCharacterMaxWeight.");
                } else {
                    return;
                }
            }
        }
    }
};

ExchangeStartedWithPodsMessage.prototype.getMessageId = function() {
    return 6129;
};

ExchangeStartedWithPodsMessage.prototype.getClassName = function() {
    return 'ExchangeStartedWithPodsMessage';
};

module.exports.id = 6129;
module.exports.ExchangeStartedWithPodsMessage = ExchangeStartedWithPodsMessage;