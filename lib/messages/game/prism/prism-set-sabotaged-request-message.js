var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var PrismSetSabotagedRequestMessage = function() {
    this.subAreaId = 0;
};

require('util').inherits(PrismSetSabotagedRequestMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new PrismSetSabotagedRequestMessage();
};

PrismSetSabotagedRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismSetSabotagedRequestMessage(output);
};

PrismSetSabotagedRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismSetSabotagedRequestMessage(input);
};

PrismSetSabotagedRequestMessage.prototype.serializeAs_PrismSetSabotagedRequestMessage = function(param1) {
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
    } else {
        param1.writeVarShort(this.subAreaId);
        return;
    }
};

PrismSetSabotagedRequestMessage.prototype.deserializeAs_PrismSetSabotagedRequestMessage = function(param1) {
    this.subAreaId = param1.readVarUhShort();
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismSetSabotagedRequestMessage.subAreaId.");
    } else {
        return;
    }
};

PrismSetSabotagedRequestMessage.prototype.getMessageId = function() {
    return 6468;
};

PrismSetSabotagedRequestMessage.prototype.getClassName = function() {
    return 'PrismSetSabotagedRequestMessage';
};

module.exports.id = 6468;
module.exports.PrismSetSabotagedRequestMessage = PrismSetSabotagedRequestMessage;