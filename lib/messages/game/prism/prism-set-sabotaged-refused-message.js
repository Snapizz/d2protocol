var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismSetSabotagedRefusedMessage = function() {
    this.subAreaId = 0;
    this.reason = 0;
};

require('util').inherits(PrismSetSabotagedRefusedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PrismSetSabotagedRefusedMessage();
};

PrismSetSabotagedRefusedMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismSetSabotagedRefusedMessage(output);
};

PrismSetSabotagedRefusedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismSetSabotagedRefusedMessage(input);
};

PrismSetSabotagedRefusedMessage.prototype.serializeAs_PrismSetSabotagedRefusedMessage = function(param1) {
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
    } else {
        param1.writeVarShort(this.subAreaId);
        param1.writeByte(this.reason);
        return;
    }
};

PrismSetSabotagedRefusedMessage.prototype.deserializeAs_PrismSetSabotagedRefusedMessage = function(param1) {
    this.subAreaId = param1.readVarUhShort();
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismSetSabotagedRefusedMessage.subAreaId.");
    } else {
        this.reason = param1.readByte();
        return;
    }
};

PrismSetSabotagedRefusedMessage.prototype.getMessageId = function() {
    return 6466;
};

PrismSetSabotagedRefusedMessage.prototype.getClassName = function() {
    return 'PrismSetSabotagedRefusedMessage';
};

module.exports.id = 6466;
module.exports.PrismSetSabotagedRefusedMessage = PrismSetSabotagedRefusedMessage;