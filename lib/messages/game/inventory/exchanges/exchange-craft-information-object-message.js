var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeCraftInformationObjectMessage = function() {
    this.playerId = 0;
};

require('util').inherits(ExchangeCraftInformationObjectMessage, require('./exchange-craft-result-with-object-id-message.js').class);

ExchangeCraftInformationObjectMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeCraftInformationObjectMessage(output);
};

ExchangeCraftInformationObjectMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeCraftInformationObjectMessage(input);
};

ExchangeCraftInformationObjectMessage.prototype.serializeAs_ExchangeCraftInformationObjectMessage = function(param1) {
    this.serializeAs_ExchangeCraftResultWithObjectIdMessage(param1);
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
    } else {
        param1.writeVarInt(this.playerId);
        return;
    }
};

ExchangeCraftInformationObjectMessage.prototype.deserializeAs_ExchangeCraftInformationObjectMessage = function(param1) {
    this.deserializeAs_ExchangeCraftResultWithObjectIdMessage(param1);
    this.playerId = param1.readVarUhInt();
    if (this.playerId < 0) {
        throw new Error("Forbidden value (" + this.playerId + ") on element of ExchangeCraftInformationObjectMessage.playerId.");
    } else {
        return;
    }
};

ExchangeCraftInformationObjectMessage.prototype.getMessageId = function() {
    return 5794;
};

ExchangeCraftInformationObjectMessage.prototype.getClassName = function() {
    return 'ExchangeCraftInformationObjectMessage';
};

module.exports.id = 5794;
module.exports.class = ExchangeCraftInformationObjectMessage;
module.exports.getInstance = function() {
    return new ExchangeCraftInformationObjectMessage;
};