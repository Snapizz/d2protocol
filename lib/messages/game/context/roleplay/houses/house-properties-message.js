var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var HousePropertiesMessage = function() {
  this.properties;
};

util.inherits(HousePropertiesMessage, BaseMessage);

HousePropertiesMessage.prototype.serialize = function(output) {
  this.serializeAs_HousePropertiesMessage(output);
};

HousePropertiesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HousePropertiesMessage(input);
};

HousePropertiesMessage.prototype.serializeAs_HousePropertiesMessage = function(output) {
  output.writeShort(this.properties.getTypeId());
  this.properties.serialize(output);
};

HousePropertiesMessage.prototype.deserializeAs_HousePropertiesMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.properties = ProtocolTypeManager.getInstance(HouseInformations, _id1);
  this.properties.deserialize(input);
};

HousePropertiesMessage.prototype.getMessageId = function() {
  return 5734;
};

HousePropertiesMessage.prototype.getClassName = function() {
  return 'HousePropertiesMessage';
};

module.exports.id = 5734;
module.exports.class = HousePropertiesMessage;