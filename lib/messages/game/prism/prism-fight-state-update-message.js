var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismFightStateUpdateMessage = function() {
    this.state = 0;
};

require('util').inherits(PrismFightStateUpdateMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PrismFightStateUpdateMessage();
};

PrismFightStateUpdateMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismFightStateUpdateMessage(output);
};

PrismFightStateUpdateMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismFightStateUpdateMessage(input);
};

PrismFightStateUpdateMessage.prototype.serializeAs_PrismFightStateUpdateMessage = function(param1) {
    if (this.state < 0) {
        throw new Error("Forbidden value (" + this.state + ") on element state.");
    } else {
        param1.writeByte(this.state);
        return;
    }
};

PrismFightStateUpdateMessage.prototype.deserializeAs_PrismFightStateUpdateMessage = function(param1) {
    this.state = param1.readByte();
    if (this.state < 0) {
        throw new Error("Forbidden value (" + this.state + ") on element of PrismFightStateUpdateMessage.state.");
    } else {
        return;
    }
};

PrismFightStateUpdateMessage.prototype.getMessageId = function() {
    return 6040;
};

PrismFightStateUpdateMessage.prototype.getClassName = function() {
    return 'PrismFightStateUpdateMessage';
};

module.exports.id = 6040;
module.exports.PrismFightStateUpdateMessage = PrismFightStateUpdateMessage;