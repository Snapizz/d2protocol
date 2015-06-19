var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage = function() {
  this.allow = false;
};

util.inherits(ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage, BaseMessage);

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(output);
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(input);
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.serializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage = function(output) {
  output.writeBoolean(this.allow);
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage = function(input) {
  this.allow = input.readBoolean();
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.getMessageId = function() {
  return 6021;
};

ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.getClassName = function() {
  return 'ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage';
};

module.exports.id = 6021;
module.exports.class = ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage;