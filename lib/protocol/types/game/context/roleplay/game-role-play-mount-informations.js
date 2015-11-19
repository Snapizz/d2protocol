/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRolePlayNamedActorInformations = require('./game-role-play-named-actor-informations');
var GameRolePlayMountInformations = (function (_super) {
    __extends(GameRolePlayMountInformations, _super);
    function GameRolePlayMountInformations() {
        this.ownerName = '';
        this.level = 0;
        _super.call(this);
    }
    GameRolePlayMountInformations.prototype.getTypeId = function () {
        return GameRolePlayMountInformations.ID;
    };
    GameRolePlayMountInformations.prototype.reset = function () {
        this.ownerName = '';
        this.level = 0;
    };
    GameRolePlayMountInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayMountInformations(param1);
    };
    GameRolePlayMountInformations.prototype.serializeAs_GameRolePlayMountInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayNamedActorInformations.call(this, param1);
        param1.writeUTF(this.ownerName);
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
    };
    GameRolePlayMountInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayMountInformations(param1);
    };
    GameRolePlayMountInformations.prototype.deserializeAs_GameRolePlayMountInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.ownerName = param1.readUTF();
        this.level = param1.readUnsignedByte();
        if (this.level < 0 || this.level > 255) {
            throw new Error('Forbidden value (' + this.level + ') on element of GameRolePlayMountInformations.level.');
        }
    };
    GameRolePlayMountInformations.ID = 180;
    return GameRolePlayMountInformations;
})(GameRolePlayNamedActorInformations);
module.exports = GameRolePlayMountInformations;
