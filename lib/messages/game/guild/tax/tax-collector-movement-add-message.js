var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var TaxCollectorInformations = require('../../../../types/game/guild/tax/tax-collector-informations.js').class;

var TaxCollectorMovementAddMessage = module.exports = function() {
    this.informations = new TaxCollectorInformations();

    return this;
};

require('util').inherits(TaxCollectorMovementAddMessage, d2com.NetworkMessage.class);

TaxCollectorMovementAddMessage.prototype.serialize = function(output) {
    this.serializeAs_TaxCollectorMovementAddMessage(output);
};

TaxCollectorMovementAddMessage.prototype.deserialize = function(input) {
    this.deserializeAs_TaxCollectorMovementAddMessage(input);
};

TaxCollectorMovementAddMessage.prototype.serializeAs_TaxCollectorMovementAddMessage = function(param1) {
    param1.writeShort(this.informations.getTypeId());
    this.informations.serialize(param1);
};

TaxCollectorMovementAddMessage.prototype.deserializeAs_TaxCollectorMovementAddMessage = function(param1) {
    var _loc2_ = param1.readUnsignedShort();
    this.informations = ProtocolTypeManager.getInstance(TaxCollectorInformations, _loc2_);
    this.informations.deserialize(param1);
};

TaxCollectorMovementAddMessage.prototype.getMessageId = function() {
    return 5917;
};

TaxCollectorMovementAddMessage.prototype.getClassName = function() {
    return 'TaxCollectorMovementAddMessage';
};

module.exports.id = 5917;