var d2com = require('d2com'),
  BaseMessage = require('./map-complementary-informations-data-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapComplementaryInformationsDataInHouseMessage = function() {
  this.currentHouse;
};

util.inherits(MapComplementaryInformationsDataInHouseMessage, BaseMessage);

MapComplementaryInformationsDataInHouseMessage.prototype.serialize = function(output) {
  this.serializeAs_MapComplementaryInformationsDataInHouseMessage(output);
};

MapComplementaryInformationsDataInHouseMessage.prototype.deserialize = function(input) {
  this.deserializeAs_MapComplementaryInformationsDataInHouseMessage(input);
};

MapComplementaryInformationsDataInHouseMessage.prototype.serializeAs_MapComplementaryInformationsDataInHouseMessage = function(output) {
  this.serializeAs_MapComplementaryInformationsDataMessage(output);
  this.currentHouse.serializeAs_HouseInformationsInside(output);
};

MapComplementaryInformationsDataInHouseMessage.prototype.deserializeAs_MapComplementaryInformationsDataInHouseMessage = function(input) {
  this.deserialize(input);
  this.currentHouse = new HouseInformationsInside();
  this.currentHouse.deserialize(input);
};

MapComplementaryInformationsDataInHouseMessage.prototype.getMessageId = function() {
  return 6130;
};

MapComplementaryInformationsDataInHouseMessage.prototype.getClassName = function() {
  return 'MapComplementaryInformationsDataInHouseMessage';
};

module.exports.id = 6130;
module.exports.class = MapComplementaryInformationsDataInHouseMessage;