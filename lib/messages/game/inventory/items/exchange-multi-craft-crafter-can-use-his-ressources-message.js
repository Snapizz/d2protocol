var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var ExchangeMultiCraftCrafterCanUseHisRessourcesMessage = function() {
    this.allowed = false;
};

require('util').inherits(ExchangeMultiCraftCrafterCanUseHisRessourcesMessage, d2com.NetworkMessage.class);

ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.serialize = function(output) {
    this.serializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(output);
};

ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.deserialize = function(input) {
    this.deserializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(input);
};

ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.serializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage = function(param1) {
    param1.writeBoolean(this.allowed);
};

ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.deserializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage = function(param1) {
    this.allowed = param1.readBoolean();
};

ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.getMessageId = function() {
    return 6020;
};

ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.getClassName = function() {
    return 'ExchangeMultiCraftCrafterCanUseHisRessourcesMessage';
};

module.exports.id = 6020;
module.exports.class = ExchangeMultiCraftCrafterCanUseHisRessourcesMessage;
module.exports.getInstance = function() {
    return new ExchangeMultiCraftCrafterCanUseHisRessourcesMessage;
};