var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CompassUpdateMessage = function() {
  this.type = 0;
  this.coords;
};

util.inherits(CompassUpdateMessage, BaseMessage);

CompassUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_CompassUpdateMessage(output);
};

CompassUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CompassUpdateMessage(input);
};

CompassUpdateMessage.prototype.serializeAs_CompassUpdateMessage = function(output) {
  output.writeByte(this.type);
  output.writeShort(this.coords.getTypeId());
  this.coords.serialize(output);
};

CompassUpdateMessage.prototype.deserializeAs_CompassUpdateMessage = function(input) {
  this.type = input.readByte();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of CompassUpdateMessage.type.")));
  };
  var _id2 = input.readUnsignedShort();
  this.coords = ProtocolTypeManager.getInstance(MapCoordinates, _id2);
  this.coords.deserialize(input);
};

CompassUpdateMessage.prototype.getMessageId = function() {
  return 5591;
};

CompassUpdateMessage.prototype.getClassName = function() {
  return 'CompassUpdateMessage';
};

module.exports.id = 5591;
module.exports.class = CompassUpdateMessage;