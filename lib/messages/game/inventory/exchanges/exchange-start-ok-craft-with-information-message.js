var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartOkCraftWithInformationMessage = function() {
    this.skillId = 0;
};

require('util').inherits(ExchangeStartOkCraftWithInformationMessage, require('./exchange-start-ok-craft-message.js').ExchangeStartOkCraftMessage);

module.exports = function() {
    return new ExchangeStartOkCraftWithInformationMessage();
};

ExchangeStartOkCraftWithInformationMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartOkCraftWithInformationMessage(output);
};

ExchangeStartOkCraftWithInformationMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartOkCraftWithInformationMessage(input);
};

ExchangeStartOkCraftWithInformationMessage.prototype.serializeAs_ExchangeStartOkCraftWithInformationMessage = function(param1) {
    this.serializeAs_ExchangeStartOkCraftMessage(param1);
    if (this.skillId < 0) {
        throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
    } else {
        param1.writeVarInt(this.skillId);
        return;
    }
};

ExchangeStartOkCraftWithInformationMessage.prototype.deserializeAs_ExchangeStartOkCraftWithInformationMessage = function(param1) {
    this.deserializeAs_ExchangeStartOkCraftMessage(param1);
    this.skillId = param1.readVarUhInt();
    if (this.skillId < 0) {
        throw new Error("Forbidden value (" + this.skillId + ") on element of ExchangeStartOkCraftWithInformationMessage.skillId.");
    } else {
        return;
    }
};

ExchangeStartOkCraftWithInformationMessage.prototype.getMessageId = function() {
    return 5941;
};

ExchangeStartOkCraftWithInformationMessage.prototype.getClassName = function() {
    return 'ExchangeStartOkCraftWithInformationMessage';
};

module.exports.id = 5941;
module.exports.ExchangeStartOkCraftWithInformationMessage = ExchangeStartOkCraftWithInformationMessage;