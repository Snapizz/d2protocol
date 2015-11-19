/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRolePlayActorInformations = require('./game-role-play-actor-informations');
var PortalInformation = require('./treasureHunt/portal-information');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameRolePlayPortalInformations = (function (_super) {
    __extends(GameRolePlayPortalInformations, _super);
    function GameRolePlayPortalInformations() {
        this.portal = new PortalInformation();
        _super.call(this);
    }
    GameRolePlayPortalInformations.prototype.getTypeId = function () {
        return GameRolePlayPortalInformations.ID;
    };
    GameRolePlayPortalInformations.prototype.reset = function () {
        this.portal = new PortalInformation();
    };
    GameRolePlayPortalInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayPortalInformations(param1);
    };
    GameRolePlayPortalInformations.prototype.serializeAs_GameRolePlayPortalInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
        param1.writeShort(this.portal.getTypeId());
        this.portal.serialize(param1);
    };
    GameRolePlayPortalInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayPortalInformations(param1);
    };
    GameRolePlayPortalInformations.prototype.deserializeAs_GameRolePlayPortalInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        this.portal = ProtocolTypeManager.getInstance(PortalInformation, _loc2_);
        this.portal.deserialize(param1);
    };
    GameRolePlayPortalInformations.ID = 467;
    return GameRolePlayPortalInformations;
})(GameRolePlayActorInformations);
module.exports = GameRolePlayPortalInformations;
