var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var PrismFightRemovedMessage = function() {
    this.subAreaId = 0;
};

require('util').inherits(PrismFightRemovedMessage, d2com.NetworkMessage.class);

PrismFightRemovedMessage.prototype.serialize = function(output) {
    this.serializeAs_PrismFightRemovedMessage(output);
};

PrismFightRemovedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PrismFightRemovedMessage(input);
};

PrismFightRemovedMessage.prototype.serializeAs_PrismFightRemovedMessage = function(param1) {
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
    } else {
        param1.writeVarShort(this.subAreaId);
        return;
    }
};

PrismFightRemovedMessage.prototype.deserializeAs_PrismFightRemovedMessage = function(param1) {
    this.subAreaId = param1.readVarUhShort();
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element of PrismFightRemovedMessage.subAreaId.");
    } else {
        return;
    }
};

PrismFightRemovedMessage.prototype.getMessageId = function() {
    return 6453;
};

PrismFightRemovedMessage.prototype.getClassName = function() {
    return 'PrismFightRemovedMessage';
};

module.exports.id = 6453;
module.exports.class = PrismFightRemovedMessage;
module.exports.getInstance = function() {
    return new PrismFightRemovedMessage;
};