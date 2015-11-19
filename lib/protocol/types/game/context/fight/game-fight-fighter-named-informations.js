/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightFighterInformations = require('./game-fight-fighter-informations');
var PlayerStatus = require('../../character/status/player-status');
var GameFightFighterNamedInformations = (function (_super) {
    __extends(GameFightFighterNamedInformations, _super);
    function GameFightFighterNamedInformations() {
        this.name = '';
        this.status = new PlayerStatus();
        _super.call(this);
    }
    GameFightFighterNamedInformations.prototype.getTypeId = function () {
        return GameFightFighterNamedInformations.ID;
    };
    GameFightFighterNamedInformations.prototype.reset = function () {
        this.name = '';
        this.status = new PlayerStatus();
    };
    GameFightFighterNamedInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightFighterNamedInformations(param1);
    };
    GameFightFighterNamedInformations.prototype.serializeAs_GameFightFighterNamedInformations = function (param1) {
        _super.prototype.serializeAs_GameFightFighterInformations.call(this, param1);
        param1.writeUTF(this.name);
        this.status.serializeAs_PlayerStatus(param1);
    };
    GameFightFighterNamedInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightFighterNamedInformations(param1);
    };
    GameFightFighterNamedInformations.prototype.deserializeAs_GameFightFighterNamedInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.name = param1.readUTF();
        this.status = new PlayerStatus();
        this.status.deserialize(param1);
    };
    GameFightFighterNamedInformations.ID = 158;
    return GameFightFighterNamedInformations;
})(GameFightFighterInformations);
module.exports = GameFightFighterNamedInformations;
