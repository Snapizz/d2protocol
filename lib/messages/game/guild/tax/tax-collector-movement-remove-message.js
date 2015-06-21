var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var TaxCollectorMovementRemoveMessage = module.exports = function() {
    this.collectorId = 0;

    return this;
};

require('util').inherits(TaxCollectorMovementRemoveMessage, d2com.NetworkMessage.class);

TaxCollectorMovementRemoveMessage.prototype.serialize = function(output) {
    this.serializeAs_TaxCollectorMovementRemoveMessage(output);
};

TaxCollectorMovementRemoveMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TaxCollectorMovementRemoveMessage(input);
};

TaxCollectorMovementRemoveMessage.prototype.serializeAs_TaxCollectorMovementRemoveMessage = function(param1) {
    param1.writeInt(this.collectorId);
};

TaxCollectorMovementRemoveMessage.prototype.deserializeAs_TaxCollectorMovementRemoveMessage = function(param1) {
    this.collectorId = param1.readInt();
};

TaxCollectorMovementRemoveMessage.prototype.getMessageId = function() {
    return 5915;
};

TaxCollectorMovementRemoveMessage.prototype.getClassName = function() {
    return 'TaxCollectorMovementRemoveMessage';
};

module.exports.id = 5915;