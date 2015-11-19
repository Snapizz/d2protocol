/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameContextActorInformations = require('./../game-context-actor-informations');
var GameRolePlayActorInformations = (function (_super) {
    __extends(GameRolePlayActorInformations, _super);
    function GameRolePlayActorInformations() {
        _super.call(this);
    }
    GameRolePlayActorInformations.prototype.getTypeId = function () {
        return GameRolePlayActorInformations.ID;
    };
    GameRolePlayActorInformations.prototype.reset = function () {
    };
    GameRolePlayActorInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayActorInformations(param1);
    };
    GameRolePlayActorInformations.prototype.serializeAs_GameRolePlayActorInformations = function (param1) {
        _super.prototype.serializeAs_GameContextActorInformations.call(this, param1);
    };
    GameRolePlayActorInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayActorInformations(param1);
    };
    GameRolePlayActorInformations.prototype.deserializeAs_GameRolePlayActorInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    GameRolePlayActorInformations.ID = 141;
    return GameRolePlayActorInformations;
})(GameContextActorInformations);
module.exports = GameRolePlayActorInformations;
