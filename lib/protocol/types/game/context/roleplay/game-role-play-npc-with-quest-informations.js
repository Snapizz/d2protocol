/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRolePlayNpcInformations = require('./game-role-play-npc-informations');
var GameRolePlayNpcQuestFlag = require('./quest/game-role-play-npc-quest-flag');
var GameRolePlayNpcWithQuestInformations = (function (_super) {
    __extends(GameRolePlayNpcWithQuestInformations, _super);
    function GameRolePlayNpcWithQuestInformations() {
        this.questFlag = new GameRolePlayNpcQuestFlag();
        _super.call(this);
    }
    GameRolePlayNpcWithQuestInformations.prototype.getTypeId = function () {
        return GameRolePlayNpcWithQuestInformations.ID;
    };
    GameRolePlayNpcWithQuestInformations.prototype.reset = function () {
        this.questFlag = new GameRolePlayNpcQuestFlag();
    };
    GameRolePlayNpcWithQuestInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayNpcWithQuestInformations(param1);
    };
    GameRolePlayNpcWithQuestInformations.prototype.serializeAs_GameRolePlayNpcWithQuestInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayNpcInformations.call(this, param1);
        this.questFlag.serializeAs_GameRolePlayNpcQuestFlag(param1);
    };
    GameRolePlayNpcWithQuestInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayNpcWithQuestInformations(param1);
    };
    GameRolePlayNpcWithQuestInformations.prototype.deserializeAs_GameRolePlayNpcWithQuestInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.questFlag = new GameRolePlayNpcQuestFlag();
        this.questFlag.deserialize(param1);
    };
    GameRolePlayNpcWithQuestInformations.ID = 383;
    return GameRolePlayNpcWithQuestInformations;
})(GameRolePlayNpcInformations);
module.exports = GameRolePlayNpcWithQuestInformations;
