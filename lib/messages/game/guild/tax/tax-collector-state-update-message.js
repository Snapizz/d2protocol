var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var TaxCollectorStateUpdateMessage = function() {
  this.uniqueId = 0;
  this.state = 0;
};

util.inherits(TaxCollectorStateUpdateMessage, BaseMessage);

TaxCollectorStateUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorStateUpdateMessage(output);
};

TaxCollectorStateUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorStateUpdateMessage(input);
};

TaxCollectorStateUpdateMessage.prototype.serializeAs_TaxCollectorStateUpdateMessage = function(param1) {
  param1.writeInt(this.uniqueId);
  param1.writeByte(this.state);
};

TaxCollectorStateUpdateMessage.prototype.deserializeAs_TaxCollectorStateUpdateMessage = function(param1) {
  this.uniqueId = param1.readInt();
  this.state = param1.readByte();
};

TaxCollectorStateUpdateMessage.prototype.getMessageId = function() {
  return 6455;
};

TaxCollectorStateUpdateMessage.prototype.getClassName = function() {
  return 'TaxCollectorStateUpdateMessage';
};

module.exports.id = 6455;
module.exports.class = TaxCollectorStateUpdateMessage;
module.exports.getInstance = function() {
  return new TaxCollectorStateUpdateMessage();
};