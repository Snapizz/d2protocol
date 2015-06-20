var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var TaxCollectorMovementRemoveMessage = function() {
  this.collectorId = 0;
};

util.inherits(TaxCollectorMovementRemoveMessage, BaseMessage);

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
module.exports.class = TaxCollectorMovementRemoveMessage;
module.exports.getInstance = function() {
  return new TaxCollectorMovementRemoveMessage();
};