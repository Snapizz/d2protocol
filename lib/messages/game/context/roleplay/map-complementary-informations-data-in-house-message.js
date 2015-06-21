var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var HouseInformationsInside = require('../../../../types/game/house/house-informations-inside.js').HouseInformationsInside;
var HouseInformations = require('../../../../types/game/house/house-informations.js').HouseInformations;
var GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations.js').GameRolePlayActorInformations;
var InteractiveElement = require('../../../../types/game/interactive/interactive-element.js').InteractiveElement;
var StatedElement = require('../../../../types/game/interactive/stated-element.js').StatedElement;
var MapObstacle = require('../../../../types/game/interactive/map-obstacle.js').MapObstacle;
var FightCommonInformations = require('../../../../types/game/context/fight/fight-common-informations.js').FightCommonInformations;

var MapComplementaryInformationsDataInHouseMessage = function() {
    this.currentHouse = new HouseInformationsInside();
};

require('util').inherits(MapComplementaryInformationsDataInHouseMessage, require('./map-complementary-informations-data-message.js').MapComplementaryInformationsDataMessage);

module.exports = function() {
    return new MapComplementaryInformationsDataInHouseMessage();
};

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
    this.deserializeAs_MapComplementaryInformationsDataMessage(param1);
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
module.exports.MapComplementaryInformationsDataInHouseMessage = MapComplementaryInformationsDataInHouseMessage;