/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');
var GameFightFighterTaxCollectorLightInformations = (function (_super) {
    __extends(GameFightFighterTaxCollectorLightInformations, _super);
    function GameFightFighterTaxCollectorLightInformations() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        _super.call(this);
    }
    GameFightFighterTaxCollectorLightInformations.prototype.getTypeId = function () {
        return GameFightFighterTaxCollectorLightInformations.ID;
    };
    GameFightFighterTaxCollectorLightInformations.prototype.reset = function () {
        this.firstNameId = 0;
        this.lastNameId = 0;
    };
    GameFightFighterTaxCollectorLightInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightFighterTaxCollectorLightInformations(param1);
    };
    GameFightFighterTaxCollectorLightInformations.prototype.serializeAs_GameFightFighterTaxCollectorLightInformations = function (param1) {
        _super.prototype.serializeAs_GameFightFighterLightInformations.call(this, param1);
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
    };
    GameFightFighterTaxCollectorLightInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightFighterTaxCollectorLightInformations(param1);
    };
    GameFightFighterTaxCollectorLightInformations.prototype.deserializeAs_GameFightFighterTaxCollectorLightInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of GameFightFighterTaxCollectorLightInformations.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of GameFightFighterTaxCollectorLightInformations.lastNameId.');
        }
    };
    GameFightFighterTaxCollectorLightInformations.ID = 457;
    return GameFightFighterTaxCollectorLightInformations;
})(GameFightFighterLightInformations);
module.exports = GameFightFighterTaxCollectorLightInformations;
