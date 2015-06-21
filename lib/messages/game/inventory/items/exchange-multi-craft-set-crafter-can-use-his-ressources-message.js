var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage = module.exports = function() {
    this.allow = false;

    return this;
};

require('util').inherits(ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage, d2com.NetworkMessage.class);

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(output);
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(input);
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.serializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage = function(param1) {
    param1.writeBoolean(this.allow);
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage = function(param1) {
    this.allow = param1.readBoolean();
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.getMessageId = function() {
    return 6021;
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.getClassName = function() {
    return 'ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage';
};

module.exports.id = 6021;