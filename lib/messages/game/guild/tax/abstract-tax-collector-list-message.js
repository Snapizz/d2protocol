var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var TaxCollectorInformations = require('../../../../types/game/guild/tax/tax-collector-informations.js').class;

var AbstractTaxCollectorListMessage = function() {
    this.informations = [];
};

require('util').inherits(AbstractTaxCollectorListMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new AbstractTaxCollectorListMessage();
};

AbstractTaxCollectorListMessage.prototype.serialize = function(output) {
    this.serializeAs_AbstractTaxCollectorListMessage(output);
};

AbstractTaxCollectorListMessage.prototype.deserialize = function(input) {
    this.deserializeAs_AbstractTaxCollectorListMessage(input);
};

AbstractTaxCollectorListMessage.prototype.serializeAs_AbstractTaxCollectorListMessage = function(param1) {
    param1.writeShort(this.informations.length);
    var _loc2_ = 0;
    while (_loc2_ < this.informations.length) {
        param1.writeShort((this.informations[_loc2_]).getTypeId());
        (this.informations[_loc2_]).serialize(param1);
        _loc2_++;
    }
};

AbstractTaxCollectorListMessage.prototype.deserializeAs_AbstractTaxCollectorListMessage = function(param1) {
    var _loc4_ = 0;
    var _loc5_ = null;
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
        _loc5_ = ProtocolTypeManager.getInstance(TaxCollectorInformations, _loc4_);
        _loc5_.deserialize(param1);
        this.informations.push(_loc5_);
        _loc3_++;
    }
};

AbstractTaxCollectorListMessage.prototype.getMessageId = function() {
    return 6568;
};

AbstractTaxCollectorListMessage.prototype.getClassName = function() {
    return 'AbstractTaxCollectorListMessage';
};

module.exports.id = 6568;
module.exports.AbstractTaxCollectorListMessage = AbstractTaxCollectorListMessage;