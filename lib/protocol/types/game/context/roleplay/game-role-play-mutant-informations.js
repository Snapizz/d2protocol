/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRolePlayHumanoidInformations = require('./game-role-play-humanoid-informations');
var GameRolePlayMutantInformations = (function (_super) {
    __extends(GameRolePlayMutantInformations, _super);
    function GameRolePlayMutantInformations() {
        this.monsterId = 0;
        this.powerLevel = 0;
        _super.call(this);
    }
    GameRolePlayMutantInformations.prototype.getTypeId = function () {
        return GameRolePlayMutantInformations.ID;
    };
    GameRolePlayMutantInformations.prototype.reset = function () {
        this.monsterId = 0;
        this.powerLevel = 0;
    };
    GameRolePlayMutantInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayMutantInformations(param1);
    };
    GameRolePlayMutantInformations.prototype.serializeAs_GameRolePlayMutantInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayHumanoidInformations.call(this, param1);
        if (this.monsterId < 0) {
            throw new Error('Forbidden value (' + this.monsterId + ') on element monsterId.');
        }
        param1.writeVarShort(this.monsterId);
        param1.writeByte(this.powerLevel);
    };
    GameRolePlayMutantInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayMutantInformations(param1);
    };
    GameRolePlayMutantInformations.prototype.deserializeAs_GameRolePlayMutantInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.monsterId = param1.readVarUhShort();
        if (this.monsterId < 0) {
            throw new Error('Forbidden value (' + this.monsterId + ') on element of GameRolePlayMutantInformations.monsterId.');
        }
        this.powerLevel = param1.readByte();
    };
    GameRolePlayMutantInformations.ID = 3;
    return GameRolePlayMutantInformations;
})(GameRolePlayHumanoidInformations);
module.exports = GameRolePlayMutantInformations;
