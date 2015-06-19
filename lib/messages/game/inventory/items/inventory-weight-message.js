var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var InventoryWeightMessage = function() {
  this.weight = 0;
  this.weightMax = 0;
};

util.inherits(InventoryWeightMessage, BaseMessage);

InventoryWeightMessage.prototype.serialize = function(output) {
  this.serializeAs_InventoryWeightMessage(output);
};

InventoryWeightMessage.prototype.deserialize = function(input) {
  this.deserializeAs_InventoryWeightMessage(input);
};

InventoryWeightMessage.prototype.serializeAs_InventoryWeightMessage = function(output) {
  if (this.weight < 0) {
    throw (new Error((("Forbidden value (" + this.weight) + ") on element weight.")));
  };
  output.writeVarInt(this.weight);
  if (this.weightMax < 0) {
    throw (new Error((("Forbidden value (" + this.weightMax) + ") on element weightMax.")));
  };
  output.writeVarInt(this.weightMax);
};

InventoryWeightMessage.prototype.deserializeAs_InventoryWeightMessage = function(input) {
  this.weight = input.readVarUhInt();
  if (this.weight < 0) {
    throw (new Error((("Forbidden value (" + this.weight) + ") on element of InventoryWeightMessage.weight.")));
  };
  this.weightMax = input.readVarUhInt();
  if (this.weightMax < 0) {
    throw (new Error((("Forbidden value (" + this.weightMax) + ") on element of InventoryWeightMessage.weightMax.")));
  };
};

InventoryWeightMessage.prototype.getMessageId = function() {
  return 3009;
};

InventoryWeightMessage.prototype.getClassName = function() {
  return 'InventoryWeightMessage';
};

module.exports.id = 3009;
module.exports.class = InventoryWeightMessage;