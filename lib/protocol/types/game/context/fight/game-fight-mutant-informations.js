/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightFighterNamedInformations = require('./game-fight-fighter-named-informations');
var GameFightMutantInformations = (function (_super) {
    __extends(GameFightMutantInformations, _super);
    function GameFightMutantInformations() {
        this.powerLevel = 0;
        _super.call(this);
    }
    GameFightMutantInformations.prototype.getTypeId = function () {
        return GameFightMutantInformations.ID;
    };
    GameFightMutantInformations.prototype.reset = function () {
        this.powerLevel = 0;
    };
    GameFightMutantInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightMutantInformations(param1);
    };
    GameFightMutantInformations.prototype.serializeAs_GameFightMutantInformations = function (param1) {
        _super.prototype.serializeAs_GameFightFighterNamedInformations.call(this, param1);
        if (this.powerLevel < 0) {
            throw new Error('Forbidden value (' + this.powerLevel + ') on element powerLevel.');
        }
        param1.writeByte(this.powerLevel);
    };
    GameFightMutantInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightMutantInformations(param1);
    };
    GameFightMutantInformations.prototype.deserializeAs_GameFightMutantInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.powerLevel = param1.readByte();
        if (this.powerLevel < 0) {
            throw new Error('Forbidden value (' + this.powerLevel + ') on element of GameFightMutantInformations.powerLevel.');
        }
    };
    GameFightMutantInformations.ID = 50;
    return GameFightMutantInformations;
})(GameFightFighterNamedInformations);
module.exports = GameFightMutantInformations;
