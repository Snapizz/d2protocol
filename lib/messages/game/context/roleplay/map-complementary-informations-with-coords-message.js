var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var MapComplementaryInformationsWithCoordsMessage = function() {
  this.worldX = 0;
  this.worldY = 0;
};

util.inherits(MapComplementaryInformationsWithCoordsMessage, BaseMessage);

MapComplementaryInformationsWithCoordsMessage.prototype.serialize = function(output) {
  this.serializeAs_MapComplementaryInformationsWithCoordsMessage(output);
};

MapComplementaryInformationsWithCoordsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapComplementaryInformationsWithCoordsMessage(input);
};

MapComplementaryInformationsWithCoordsMessage.prototype.serializeAs_MapComplementaryInformationsWithCoordsMessage = function(param1) {
  this.serializeAs_MapComplementaryInformationsDataMessage(param1);
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
  } else {
    param1.writeShort(this.worldX);
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
    } else {
      param1.writeShort(this.worldY);
      return;
    }
  }
};

MapComplementaryInformationsWithCoordsMessage.prototype.deserializeAs_MapComplementaryInformationsWithCoordsMessage = function(param1) {
  this.deserialize(param1);
  this.worldX = param1.readShort();
  if (this.worldX < -255 || this.worldX > 255) {
    throw new Error("Forbidden value (" + this.worldX + ") on element of MapComplementaryInformationsWithCoordsMessage.worldX.");
  } else {
    this.worldY = param1.readShort();
    if (this.worldY < -255 || this.worldY > 255) {
      throw new Error("Forbidden value (" + this.worldY + ") on element of MapComplementaryInformationsWithCoordsMessage.worldY.");
    } else {
      return;
    }
  }
};

MapComplementaryInformationsWithCoordsMessage.prototype.getMessageId = function() {
  return 6268;
};

MapComplementaryInformationsWithCoordsMessage.prototype.getClassName = function() {
  return 'MapComplementaryInformationsWithCoordsMessage';
};

module.exports.id = 6268;
module.exports.class = MapComplementaryInformationsWithCoordsMessage;
module.exports.getInstance = function() {
  return new MapComplementaryInformationsWithCoordsMessage();
};