/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');
var GameFightFighterCompanionLightInformations = (function (_super) {
    __extends(GameFightFighterCompanionLightInformations, _super);
    function GameFightFighterCompanionLightInformations() {
        this.companionId = 0;
        this.masterId = 0;
        _super.call(this);
    }
    GameFightFighterCompanionLightInformations.prototype.getTypeId = function () {
        return GameFightFighterCompanionLightInformations.ID;
    };
    GameFightFighterCompanionLightInformations.prototype.reset = function () {
        this.companionId = 0;
        this.masterId = 0;
    };
    GameFightFighterCompanionLightInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightFighterCompanionLightInformations(param1);
    };
    GameFightFighterCompanionLightInformations.prototype.serializeAs_GameFightFighterCompanionLightInformations = function (param1) {
        _super.prototype.serializeAs_GameFightFighterLightInformations.call(this, param1);
        if (this.companionId < 0) {
            throw new Error('Forbidden value (' + this.companionId + ') on element companionId.');
        }
        param1.writeByte(this.companionId);
        param1.writeInt(this.masterId);
    };
    GameFightFighterCompanionLightInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightFighterCompanionLightInformations(param1);
    };
    GameFightFighterCompanionLightInformations.prototype.deserializeAs_GameFightFighterCompanionLightInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.companionId = param1.readByte();
        if (this.companionId < 0) {
            throw new Error('Forbidden value (' + this.companionId + ') on element of GameFightFighterCompanionLightInformations.companionId.');
        }
        this.masterId = param1.readInt();
    };
    GameFightFighterCompanionLightInformations.ID = 454;
    return GameFightFighterCompanionLightInformations;
})(GameFightFighterLightInformations);
module.exports = GameFightFighterCompanionLightInformations;
