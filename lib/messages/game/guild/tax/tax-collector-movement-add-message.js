var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TaxCollectorMovementAddMessage = function() {
  this.informations;
};

util.inherits(TaxCollectorMovementAddMessage, BaseMessage);

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
module.exports.class = TaxCollectorMovementAddMessage;