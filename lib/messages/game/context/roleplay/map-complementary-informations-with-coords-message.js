var d2com = require('d2com'),
  BaseMessage = require('./map-complementary-informations-data-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

MapComplementaryInformationsWithCoordsMessage.prototype.serializeAs_MapComplementaryInformationsWithCoordsMessage = function(output) {
  this.serializeAs_MapComplementaryInformationsDataMessage(output);
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element worldX.")));
  };
  output.writeShort(this.worldX);
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element worldY.")));
  };
  output.writeShort(this.worldY);
};

MapComplementaryInformationsWithCoordsMessage.prototype.deserializeAs_MapComplementaryInformationsWithCoordsMessage = function(input) {
  this.deserialize(input);
  this.worldX = input.readShort();
  if ((((this.worldX < -255)) || ((this.worldX > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldX) + ") on element of MapComplementaryInformationsWithCoordsMessage.worldX.")));
  };
  this.worldY = input.readShort();
  if ((((this.worldY < -255)) || ((this.worldY > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.worldY) + ") on element of MapComplementaryInformationsWithCoordsMessage.worldY.")));
  };
};

MapComplementaryInformationsWithCoordsMessage.prototype.getMessageId = function() {
  return 6268;
};

MapComplementaryInformationsWithCoordsMessage.prototype.getClassName = function() {
  return 'MapComplementaryInformationsWithCoordsMessage';
};

module.exports.id = 6268;
module.exports.class = MapComplementaryInformationsWithCoordsMessage;