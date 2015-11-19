/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRolePlayActorInformations = require('./game-role-play-actor-informations');
var PrismInformation = require('../../prism/prism-information');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var GameRolePlayPrismInformations = (function (_super) {
    __extends(GameRolePlayPrismInformations, _super);
    function GameRolePlayPrismInformations() {
        this.prism = new PrismInformation();
        _super.call(this);
    }
    GameRolePlayPrismInformations.prototype.getTypeId = function () {
        return GameRolePlayPrismInformations.ID;
    };
    GameRolePlayPrismInformations.prototype.reset = function () {
        this.prism = new PrismInformation();
    };
    GameRolePlayPrismInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayPrismInformations(param1);
    };
    GameRolePlayPrismInformations.prototype.serializeAs_GameRolePlayPrismInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
        param1.writeShort(this.prism.getTypeId());
        this.prism.serialize(param1);
    };
    GameRolePlayPrismInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayPrismInformations(param1);
    };
    GameRolePlayPrismInformations.prototype.deserializeAs_GameRolePlayPrismInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        this.prism = ProtocolTypeManager.getInstance(PrismInformation, _loc2_);
        this.prism.deserialize(param1);
    };
    GameRolePlayPrismInformations.ID = 161;
    return GameRolePlayPrismInformations;
})(GameRolePlayActorInformations);
module.exports = GameRolePlayPrismInformations;
