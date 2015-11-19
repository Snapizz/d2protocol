/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRolePlayActorInformations = require('./game-role-play-actor-informations');
var GameRolePlayTreasureHintInformations = (function (_super) {
    __extends(GameRolePlayTreasureHintInformations, _super);
    function GameRolePlayTreasureHintInformations() {
        this.npcId = 0;
        _super.call(this);
    }
    GameRolePlayTreasureHintInformations.prototype.getTypeId = function () {
        return GameRolePlayTreasureHintInformations.ID;
    };
    GameRolePlayTreasureHintInformations.prototype.reset = function () {
        this.npcId = 0;
    };
    GameRolePlayTreasureHintInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayTreasureHintInformations(param1);
    };
    GameRolePlayTreasureHintInformations.prototype.serializeAs_GameRolePlayTreasureHintInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
        }
        param1.writeVarShort(this.npcId);
    };
    GameRolePlayTreasureHintInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayTreasureHintInformations(param1);
    };
    GameRolePlayTreasureHintInformations.prototype.deserializeAs_GameRolePlayTreasureHintInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.npcId = param1.readVarUhShort();
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element of GameRolePlayTreasureHintInformations.npcId.');
        }
    };
    GameRolePlayTreasureHintInformations.ID = 471;
    return GameRolePlayTreasureHintInformations;
})(GameRolePlayActorInformations);
module.exports = GameRolePlayTreasureHintInformations;
