/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightFighterLightInformations = require('./game-fight-fighter-light-informations');
var GameFightFighterNamedLightInformations = (function (_super) {
    __extends(GameFightFighterNamedLightInformations, _super);
    function GameFightFighterNamedLightInformations() {
        this.name = '';
        _super.call(this);
    }
    GameFightFighterNamedLightInformations.prototype.getTypeId = function () {
        return GameFightFighterNamedLightInformations.ID;
    };
    GameFightFighterNamedLightInformations.prototype.reset = function () {
        this.name = '';
    };
    GameFightFighterNamedLightInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightFighterNamedLightInformations(param1);
    };
    GameFightFighterNamedLightInformations.prototype.serializeAs_GameFightFighterNamedLightInformations = function (param1) {
        _super.prototype.serializeAs_GameFightFighterLightInformations.call(this, param1);
        param1.writeUTF(this.name);
    };
    GameFightFighterNamedLightInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightFighterNamedLightInformations(param1);
    };
    GameFightFighterNamedLightInformations.prototype.deserializeAs_GameFightFighterNamedLightInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.name = param1.readUTF();
    };
    GameFightFighterNamedLightInformations.ID = 456;
    return GameFightFighterNamedLightInformations;
})(GameFightFighterLightInformations);
module.exports = GameFightFighterNamedLightInformations;
