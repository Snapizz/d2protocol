var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PaddockInformations = require('../../../../../types/game/paddock/paddock-informations.js').class;

var PaddockPropertiesMessage = function() {
  this.properties = new PaddockInformations();
};

util.inherits(PaddockPropertiesMessage, BaseMessage);

PaddockPropertiesMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockPropertiesMessage(output);
};

PaddockPropertiesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockPropertiesMessage(input);
};

PaddockPropertiesMessage.prototype.serializeAs_PaddockPropertiesMessage = function(param1) {
  param1.writeShort(this.properties.getTypeId());
  this.properties.serialize(param1);
};

PaddockPropertiesMessage.prototype.deserializeAs_PaddockPropertiesMessage = function(param1) {
  var _loc2_ = param1.readUnsignedShort();
  this.properties = ProtocolTypeManager.getInstance(PaddockInformations, _loc2_);
  this.properties.deserialize(param1);
};

PaddockPropertiesMessage.prototype.getMessageId = function() {
  return 5824;
};

PaddockPropertiesMessage.prototype.getClassName = function() {
  return 'PaddockPropertiesMessage';
};

module.exports.id = 5824;
module.exports.class = PaddockPropertiesMessage;
module.exports.getInstance = function() {
  return new PaddockPropertiesMessage();
};