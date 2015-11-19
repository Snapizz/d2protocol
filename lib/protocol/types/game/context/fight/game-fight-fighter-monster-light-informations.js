/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');
var GameFightFighterMonsterLightInformations = (function (_super) {
    __extends(GameFightFighterMonsterLightInformations, _super);
    function GameFightFighterMonsterLightInformations() {
        this.creatureGenericId = 0;
        _super.call(this);
    }
    GameFightFighterMonsterLightInformations.prototype.getTypeId = function () {
        return GameFightFighterMonsterLightInformations.ID;
    };
    GameFightFighterMonsterLightInformations.prototype.reset = function () {
        this.creatureGenericId = 0;
    };
    GameFightFighterMonsterLightInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightFighterMonsterLightInformations(param1);
    };
    GameFightFighterMonsterLightInformations.prototype.serializeAs_GameFightFighterMonsterLightInformations = function (param1) {
        _super.prototype.serializeAs_GameFightFighterLightInformations.call(this, param1);
        if (this.creatureGenericId < 0) {
            throw new Error('Forbidden value (' + this.creatureGenericId + ') on element creatureGenericId.');
        }
        param1.writeVarShort(this.creatureGenericId);
    };
    GameFightFighterMonsterLightInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightFighterMonsterLightInformations(param1);
    };
    GameFightFighterMonsterLightInformations.prototype.deserializeAs_GameFightFighterMonsterLightInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.creatureGenericId = param1.readVarUhShort();
        if (this.creatureGenericId < 0) {
            throw new Error('Forbidden value (' + this.creatureGenericId + ') on element of GameFightFighterMonsterLightInformations.creatureGenericId.');
        }
    };
    GameFightFighterMonsterLightInformations.ID = 455;
    return GameFightFighterMonsterLightInformations;
})(GameFightFighterLightInformations);
module.exports = GameFightFighterMonsterLightInformations;
