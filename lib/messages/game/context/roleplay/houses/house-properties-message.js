var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HouseInformations = require('../../../../../types/game/house/house-informations.js').class;

var HousePropertiesMessage = function() {
  this.properties = new HouseInformations();
};

util.inherits(HousePropertiesMessage, BaseMessage);

HousePropertiesMessage.prototype.serialize = function(output) {
  this.serializeAs_HousePropertiesMessage(output);
};

HousePropertiesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HousePropertiesMessage(input);
};

HousePropertiesMessage.prototype.serializeAs_HousePropertiesMessage = function(param1) {
  param1.writeShort(this.properties.getTypeId());
  this.properties.serialize(param1);
};

HousePropertiesMessage.prototype.deserializeAs_HousePropertiesMessage = function(param1) {
  var _loc2_ = param1.readUnsignedShort();
  this.properties = ProtocolTypeManager.getInstance(HouseInformations, _loc2_);
  this.properties.deserialize(param1);
};

HousePropertiesMessage.prototype.getMessageId = function() {
  return 5734;
};

HousePropertiesMessage.prototype.getClassName = function() {
  return 'HousePropertiesMessage';
};

module.exports.id = 5734;
module.exports.class = HousePropertiesMessage;
module.exports.getInstance = function() {
  return new HousePropertiesMessage();
};