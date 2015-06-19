var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PaddockPropertiesMessage = function() {
  this.properties;
};

util.inherits(PaddockPropertiesMessage, BaseMessage);

PaddockPropertiesMessage.prototype.serialize = function(output) {
  this.serializeAs_PaddockPropertiesMessage(output);
};

PaddockPropertiesMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PaddockPropertiesMessage(input);
};

PaddockPropertiesMessage.prototype.serializeAs_PaddockPropertiesMessage = function(output) {
  output.writeShort(this.properties.getTypeId());
  this.properties.serialize(output);
};

PaddockPropertiesMessage.prototype.deserializeAs_PaddockPropertiesMessage = function(input) {
  var _id1 = input.readUnsignedShort();
  this.properties = ProtocolTypeManager.getInstance(PaddockInformations, _id1);
  this.properties.deserialize(input);
};

PaddockPropertiesMessage.prototype.getMessageId = function() {
  return 5824;
};

PaddockPropertiesMessage.prototype.getClassName = function() {
  return 'PaddockPropertiesMessage';
};

module.exports.id = 5824;
module.exports.class = PaddockPropertiesMessage;