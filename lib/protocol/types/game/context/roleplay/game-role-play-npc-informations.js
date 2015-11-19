/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRolePlayActorInformations = require('./game-role-play-actor-informations');
var GameRolePlayNpcInformations = (function (_super) {
    __extends(GameRolePlayNpcInformations, _super);
    function GameRolePlayNpcInformations() {
        this.npcId = 0;
        this.sex = false;
        this.specialArtworkId = 0;
        _super.call(this);
    }
    GameRolePlayNpcInformations.prototype.getTypeId = function () {
        return GameRolePlayNpcInformations.ID;
    };
    GameRolePlayNpcInformations.prototype.reset = function () {
        this.npcId = 0;
        this.sex = false;
        this.specialArtworkId = 0;
    };
    GameRolePlayNpcInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayNpcInformations(param1);
    };
    GameRolePlayNpcInformations.prototype.serializeAs_GameRolePlayNpcInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
        }
        param1.writeVarShort(this.npcId);
        param1.writeBoolean(this.sex);
        if (this.specialArtworkId < 0) {
            throw new Error('Forbidden value (' + this.specialArtworkId + ') on element specialArtworkId.');
        }
        param1.writeVarShort(this.specialArtworkId);
    };
    GameRolePlayNpcInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayNpcInformations(param1);
    };
    GameRolePlayNpcInformations.prototype.deserializeAs_GameRolePlayNpcInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.npcId = param1.readVarUhShort();
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element of GameRolePlayNpcInformations.npcId.');
        }
        this.sex = param1.readBoolean();
        this.specialArtworkId = param1.readVarUhShort();
        if (this.specialArtworkId < 0) {
            throw new Error('Forbidden value (' + this.specialArtworkId + ') on element of GameRolePlayNpcInformations.specialArtworkId.');
        }
    };
    GameRolePlayNpcInformations.ID = 156;
    return GameRolePlayNpcInformations;
})(GameRolePlayActorInformations);
module.exports = GameRolePlayNpcInformations;
