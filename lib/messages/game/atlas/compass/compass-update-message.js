var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var MapCoordinates = require('../../../../types/game/context/map-coordinates.js').class;

var CompassUpdateMessage = function() {
  this.type = 0;
  this.coords = new MapCoordinates();
};

util.inherits(CompassUpdateMessage, BaseMessage);

CompassUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_CompassUpdateMessage(output);
};

CompassUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CompassUpdateMessage(input);
};

CompassUpdateMessage.prototype.serializeAs_CompassUpdateMessage = function(param1) {
  param1.writeByte(this.type);
  param1.writeShort(this.coords.getTypeId());
  this.coords.serialize(param1);
};

CompassUpdateMessage.prototype.deserializeAs_CompassUpdateMessage = function(param1) {
  this.type = param1.readByte();
  if (this.type < 0) {
    throw new Error("Forbidden value (" + this.type + ") on element of CompassUpdateMessage.type.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    this.coords = ProtocolTypeManager.getInstance(MapCoordinates, _loc2_);
    this.coords.deserialize(param1);
    return;
  }
};

CompassUpdateMessage.prototype.getMessageId = function() {
  return 5591;
};

CompassUpdateMessage.prototype.getClassName = function() {
  return 'CompassUpdateMessage';
};

module.exports.id = 5591;
module.exports.class = CompassUpdateMessage;
module.exports.getInstance = function() {
  return new CompassUpdateMessage();
};