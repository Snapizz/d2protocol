/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRolePlayActorInformations = require('./game-role-play-actor-informations');
var GameRolePlayNamedActorInformations = (function (_super) {
    __extends(GameRolePlayNamedActorInformations, _super);
    function GameRolePlayNamedActorInformations() {
        this.name = '';
        _super.call(this);
    }
    GameRolePlayNamedActorInformations.prototype.getTypeId = function () {
        return GameRolePlayNamedActorInformations.ID;
    };
    GameRolePlayNamedActorInformations.prototype.reset = function () {
        this.name = '';
    };
    GameRolePlayNamedActorInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayNamedActorInformations(param1);
    };
    GameRolePlayNamedActorInformations.prototype.serializeAs_GameRolePlayNamedActorInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
        param1.writeUTF(this.name);
    };
    GameRolePlayNamedActorInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayNamedActorInformations(param1);
    };
    GameRolePlayNamedActorInformations.prototype.deserializeAs_GameRolePlayNamedActorInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.name = param1.readUTF();
    };
    GameRolePlayNamedActorInformations.ID = 154;
    return GameRolePlayNamedActorInformations;
})(GameRolePlayActorInformations);
module.exports = GameRolePlayNamedActorInformations;
