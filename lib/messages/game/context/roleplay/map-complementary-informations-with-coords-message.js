var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var HouseInformations = require('../../../../types/game/house/house-informations.js').HouseInformations;
var GameRolePlayActorInformations = require('../../../../types/game/context/roleplay/game-role-play-actor-informations.js').GameRolePlayActorInformations;
var InteractiveElement = require('../../../../types/game/interactive/interactive-element.js').InteractiveElement;
var StatedElement = require('../../../../types/game/interactive/stated-element.js').StatedElement;
var MapObstacle = require('../../../../types/game/interactive/map-obstacle.js').MapObstacle;
var FightCommonInformations = require('../../../../types/game/context/fight/fight-common-informations.js').FightCommonInformations;

var MapComplementaryInformationsWithCoordsMessage = function() {
    this.worldX = 0;
    this.worldY = 0;
};

require('util').inherits(MapComplementaryInformationsWithCoordsMessage, require('./map-complementary-informations-data-message.js').MapComplementaryInformationsDataMessage);

module.exports = function() {
    return new MapComplementaryInformationsWithCoordsMessage();
};

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
    this.deserializeAs_MapComplementaryInformationsDataMessage(param1);
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
module.exports.MapComplementaryInformationsWithCoordsMessage = MapComplementaryInformationsWithCoordsMessage;