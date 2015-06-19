var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeSetCraftRecipeMessage.prototype.serializeAs_ExchangeSetCraftRecipeMessage = function(output) {
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element objectGID.")));
  };
  output.writeVarShort(this.objectGID);
};

ExchangeSetCraftRecipeMessage.prototype.deserializeAs_ExchangeSetCraftRecipeMessage = function(input) {
  this.objectGID = input.readVarUhShort();
  if (this.objectGID < 0) {
    throw (new Error((("Forbidden value (" + this.objectGID) + ") on element of ExchangeSetCraftRecipeMessage.objectGID.")));
  };
};

ExchangeSetCraftRecipeMessage.prototype.getMessageId = function() {
  return 6389;
};

ExchangeSetCraftRecipeMessage.prototype.getClassName = function() {
  return 'ExchangeSetCraftRecipeMessage';
};

module.exports.id = 6389;
module.exports.class = ExchangeSetCraftRecipeMessage;