var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeSetCraftRecipeMessage = function() {
  this.objectGID = 0;
};

util.inherits(ExchangeSetCraftRecipeMessage, BaseMessage);

ExchangeSetCraftRecipeMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeSetCraftRecipeMessage(output);
};

ExchangeSetCraftRecipeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeSetCraftRecipeMessage(input);
};

ExchangeSetCraftRecipeMessage.prototype.serializeAs_ExchangeSetCraftRecipeMessage = function(param1) {
  if (this.objectGID < 0) {
    throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
  } else {
    param1.writeVarShort(this.objectGID);
    return;
  }
};

ExchangeSetCraftRecipeMessage.prototype.deserializeAs_ExchangeSetCraftRecipeMessage = function(param1) {
  this.objectGID = param1.readVarUhShort();
  if (this.objectGID < 0) {
    throw new Error("Forbidden value (" + this.objectGID + ") on element of ExchangeSetCraftRecipeMessage.objectGID.");
  } else {
    return;
  }
};

ExchangeSetCraftRecipeMessage.prototype.getMessageId = function() {
  return 6389;
};

ExchangeSetCraftRecipeMessage.prototype.getClassName = function() {
  return 'ExchangeSetCraftRecipeMessage';
};

module.exports.id = 6389;
module.exports.class = ExchangeSetCraftRecipeMessage;
module.exports.getInstance = function() {
  return new ExchangeSetCraftRecipeMessage();
};