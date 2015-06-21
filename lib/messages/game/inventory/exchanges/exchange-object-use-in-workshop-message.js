var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeObjectUseInWorkshopMessage = function() {
    this.objectUID = 0;
    this.quantity = 0;
};

require('util').inherits(ExchangeObjectUseInWorkshopMessage, d2com.NetworkMessage.class);

ExchangeObjectUseInWorkshopMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeObjectUseInWorkshopMessage(output);
};

ExchangeObjectUseInWorkshopMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeObjectUseInWorkshopMessage(input);
};

ExchangeObjectUseInWorkshopMessage.prototype.serializeAs_ExchangeObjectUseInWorkshopMessage = function(param1) {
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
    } else {
        param1.writeVarInt(this.objectUID);
        param1.writeVarInt(this.quantity);
        return;
    }
};

ExchangeObjectUseInWorkshopMessage.prototype.deserializeAs_ExchangeObjectUseInWorkshopMessage = function(param1) {
    this.objectUID = param1.readVarUhInt();
    if (this.objectUID < 0) {
        throw new Error("Forbidden value (" + this.objectUID + ") on element of ExchangeObjectUseInWorkshopMessage.objectUID.");
    } else {
        this.quantity = param1.readVarInt();
        return;
    }
};

ExchangeObjectUseInWorkshopMessage.prototype.getMessageId = function() {
    return 6004;
};

ExchangeObjectUseInWorkshopMessage.prototype.getClassName = function() {
    return 'ExchangeObjectUseInWorkshopMessage';
};

module.exports.id = 6004;
module.exports.class = ExchangeObjectUseInWorkshopMessage;
module.exports.getInstance = function() {
    return new ExchangeObjectUseInWorkshopMessage;
};