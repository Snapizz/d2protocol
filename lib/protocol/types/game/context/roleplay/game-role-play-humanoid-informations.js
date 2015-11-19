/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HumanInformations = require('./human-informations');
var GameRolePlayNamedActorInformations = require('./game-role-play-named-actor-informations');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameRolePlayHumanoidInformations = (function (_super) {
    __extends(GameRolePlayHumanoidInformations, _super);
    function GameRolePlayHumanoidInformations() {
        this.humanoidInfo = new HumanInformations();
        this.accountId = 0;
        _super.call(this);
    }
    GameRolePlayHumanoidInformations.prototype.getTypeId = function () {
        return GameRolePlayHumanoidInformations.ID;
    };
    GameRolePlayHumanoidInformations.prototype.reset = function () {
        this.humanoidInfo = new HumanInformations();
        this.accountId = 0;
    };
    GameRolePlayHumanoidInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayHumanoidInformations(param1);
    };
    GameRolePlayHumanoidInformations.prototype.serializeAs_GameRolePlayHumanoidInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayNamedActorInformations.call(this, param1);
        param1.writeShort(this.humanoidInfo.getTypeId());
        this.humanoidInfo.serialize(param1);
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
    };
    GameRolePlayHumanoidInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayHumanoidInformations(param1);
    };
    GameRolePlayHumanoidInformations.prototype.deserializeAs_GameRolePlayHumanoidInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        this.humanoidInfo = ProtocolTypeManager.getInstance(HumanInformations, _loc2_);
        this.humanoidInfo.deserialize(param1);
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of GameRolePlayHumanoidInformations.accountId.');
        }
    };
    GameRolePlayHumanoidInformations.ID = 159;
    return GameRolePlayHumanoidInformations;
})(GameRolePlayNamedActorInformations);
module.exports = GameRolePlayHumanoidInformations;
