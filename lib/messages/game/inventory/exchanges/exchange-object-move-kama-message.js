var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectMoveKamaMessage = function() {
    this.quantity = 0;
};

require('util').inherits(ExchangeObjectMoveKamaMessage, d2com.NetworkMessage.class);

ExchangeObjectMoveKamaMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectMoveKamaMessage(output);
};

ExchangeObjectMoveKamaMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectMoveKamaMessage(input);
};

ExchangeObjectMoveKamaMessage.prototype.serializeAs_ExchangeObjectMoveKamaMessage = function(param1) {
    param1.writeVarInt(this.quantity);
};

ExchangeObjectMoveKamaMessage.prototype.deserializeAs_ExchangeObjectMoveKamaMessage = function(param1) {
    this.quantity = param1.readVarInt();
};

ExchangeObjectMoveKamaMessage.prototype.getMessageId = function() {
    return 5520;
};

ExchangeObjectMoveKamaMessage.prototype.getClassName = function() {
    return 'ExchangeObjectMoveKamaMessage';
};

module.exports.id = 5520;
module.exports.class = ExchangeObjectMoveKamaMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectMoveKamaMessage;
};