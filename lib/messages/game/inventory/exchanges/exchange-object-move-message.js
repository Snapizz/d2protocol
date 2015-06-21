var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectMoveMessage = function() {
    this.objectUID = 0;
    this.quantity = 0;
};

require('util').inherits(ExchangeObjectMoveMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new ExchangeObjectMoveMessage();
};

ExchangeObjectMoveMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectMoveMessage(output);
};

ExchangeObjectMoveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectMoveMessage(input);
};

ExchangeObjectMoveMessage.prototype.serializeAs_ExchangeObjectMoveMessage = function(param1) {
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
    } else {
        param1.writeVarInt(this.objectUID);
        param1.writeVarInt(this.quantity);
        return;
    }
};

ExchangeObjectMoveMessage.prototype.deserializeAs_ExchangeObjectMoveMessage = function(param1) {
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeObjectMoveMessage.objectUID.");
    } else {
        this.quantity = param1.readVarInt();
        return;
    }
};

ExchangeObjectMoveMessage.prototype.getMessageId = function() {
    return 5518;
};

ExchangeObjectMoveMessage.prototype.getClassName = function() {
    return 'ExchangeObjectMoveMessage';
};

module.exports.id = 5518;
module.exports.ExchangeObjectMoveMessage = ExchangeObjectMoveMessage;