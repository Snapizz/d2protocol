var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeStartOkNpcTradeMessage = function() {
    this.npcId = 0;
};

require('util').inherits(ExchangeStartOkNpcTradeMessage, d2com.NetworkMessage.class);

ExchangeStartOkNpcTradeMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeStartOkNpcTradeMessage(output);
};

ExchangeStartOkNpcTradeMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeStartOkNpcTradeMessage(input);
};

ExchangeStartOkNpcTradeMessage.prototype.serializeAs_ExchangeStartOkNpcTradeMessage = function(param1) {
    param1.writeInt(this.npcId);
};

ExchangeStartOkNpcTradeMessage.prototype.deserializeAs_ExchangeStartOkNpcTradeMessage = function(param1) {
    this.npcId = param1.readInt();
};

ExchangeStartOkNpcTradeMessage.prototype.getMessageId = function() {
    return 5785;
};

ExchangeStartOkNpcTradeMessage.prototype.getClassName = function() {
    return 'ExchangeStartOkNpcTradeMessage';
};

module.exports.id = 5785;
module.exports.class = ExchangeStartOkNpcTradeMessage;
module.exports.getInstance = function() {
    return new ExchangeStartOkNpcTradeMessage;
};