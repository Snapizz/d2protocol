/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFightAIInformations = require('./game-fight-a-i-informations');
var GameFightMonsterInformations = (function (_super) {
    __extends(GameFightMonsterInformations, _super);
    function GameFightMonsterInformations() {
        this.creatureGenericId = 0;
        this.creatureGrade = 0;
        _super.call(this);
    }
    GameFightMonsterInformations.prototype.getTypeId = function () {
        return GameFightMonsterInformations.ID;
    };
    GameFightMonsterInformations.prototype.reset = function () {
        this.creatureGenericId = 0;
        this.creatureGrade = 0;
    };
    GameFightMonsterInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameFightMonsterInformations(param1);
    };
    GameFightMonsterInformations.prototype.serializeAs_GameFightMonsterInformations = function (param1) {
        _super.prototype.serializeAs_GameFightAIInformations.call(this, param1);
        if (this.creatureGenericId < 0) {
            throw new Error('Forbidden value (' + this.creatureGenericId + ') on element creatureGenericId.');
        }
        param1.writeVarShort(this.creatureGenericId);
        if (this.creatureGrade < 0) {
            throw new Error('Forbidden value (' + this.creatureGrade + ') on element creatureGrade.');
        }
        param1.writeByte(this.creatureGrade);
    };
    GameFightMonsterInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightMonsterInformations(param1);
    };
    GameFightMonsterInformations.prototype.deserializeAs_GameFightMonsterInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.creatureGenericId = param1.readVarUhShort();
        if (this.creatureGenericId < 0) {
            throw new Error('Forbidden value (' + this.creatureGenericId + ') on element of GameFightMonsterInformations.creatureGenericId.');
        }
        this.creatureGrade = param1.readByte();
        if (this.creatureGrade < 0) {
            throw new Error('Forbidden value (' + this.creatureGrade + ') on element of GameFightMonsterInformations.creatureGrade.');
        }
    };
    GameFightMonsterInformations.ID = 29;
    return GameFightMonsterInformations;
})(GameFightAIInformations);
module.exports = GameFightMonsterInformations;
