var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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

MapComplementaryInformationsDataInHouseMessage.prototype.serializeAs_MapComplementaryInformationsDataInHouseMessage = function(param1) {
  this.serializeAs_MapComplementaryInformationsDataMessage(param1);
  this.currentHouse.serializeAs_HouseInformationsInside(param1);
};

MapComplementaryInformationsDataInHouseMessage.prototype.deserializeAs_MapComplementaryInformationsDataInHouseMessage = function(param1) {
  this.deserialize(param1);
  this.currentHouse = new HouseInformationsInside();
  this.currentHouse.deserialize(param1);
};

MapComplementaryInformationsDataInHouseMessage.prototype.getMessageId = function() {
  return 6130;
};

MapComplementaryInformationsDataInHouseMessage.prototype.getClassName = function() {
  return 'MapComplementaryInformationsDataInHouseMessage';
};

module.exports.id = 6130;
module.exports.class = MapComplementaryInformationsDataInHouseMessage;