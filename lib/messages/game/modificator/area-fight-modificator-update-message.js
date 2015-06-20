var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var AreaFightModificatorUpdateMessage = function() {
  this.spellPairId = 0;
};

util.inherits(AreaFightModificatorUpdateMessage, BaseMessage);

AreaFightModificatorUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_AreaFightModificatorUpdateMessage(output);
};

AreaFightModificatorUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AreaFightModificatorUpdateMessage(input);
};

AreaFightModificatorUpdateMessage.prototype.serializeAs_AreaFightModificatorUpdateMessage = function(param1) {
  param1.writeInt(this.spellPairId);
};

AreaFightModificatorUpdateMessage.prototype.deserializeAs_AreaFightModificatorUpdateMessage = function(param1) {
  this.spellPairId = param1.readInt();
};

AreaFightModificatorUpdateMessage.prototype.getMessageId = function() {
  return 6493;
};

AreaFightModificatorUpdateMessage.prototype.getClassName = function() {
  return 'AreaFightModificatorUpdateMessage';
};

module.exports.id = 6493;
module.exports.class = AreaFightModificatorUpdateMessage;
module.exports.getInstance = function() {
  return new AreaFightModificatorUpdateMessage();
};