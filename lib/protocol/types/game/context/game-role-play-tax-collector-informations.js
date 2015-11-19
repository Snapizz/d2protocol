/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TaxCollectorStaticInformations = require('./tax-collector-static-informations');
var GameRolePlayActorInformations = require('./roleplay/game-role-play-actor-informations');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var GameRolePlayTaxCollectorInformations = (function (_super) {
    __extends(GameRolePlayTaxCollectorInformations, _super);
    function GameRolePlayTaxCollectorInformations() {
        this.identification = new TaxCollectorStaticInformations();
        this.guildLevel = 0;
        this.taxCollectorAttack = 0;
        _super.call(this);
    }
    GameRolePlayTaxCollectorInformations.prototype.getTypeId = function () {
        return GameRolePlayTaxCollectorInformations.ID;
    };
    GameRolePlayTaxCollectorInformations.prototype.reset = function () {
        this.identification = new TaxCollectorStaticInformations();
        this.guildLevel = 0;
        this.taxCollectorAttack = 0;
    };
    GameRolePlayTaxCollectorInformations.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayTaxCollectorInformations(param1);
    };
    GameRolePlayTaxCollectorInformations.prototype.serializeAs_GameRolePlayTaxCollectorInformations = function (param1) {
        _super.prototype.serializeAs_GameRolePlayActorInformations.call(this, param1);
        param1.writeShort(this.identification.getTypeId());
        this.identification.serialize(param1);
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
        }
        param1.writeByte(this.guildLevel);
        param1.writeInt(this.taxCollectorAttack);
    };
    GameRolePlayTaxCollectorInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayTaxCollectorInformations(param1);
    };
    GameRolePlayTaxCollectorInformations.prototype.deserializeAs_GameRolePlayTaxCollectorInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        this.identification = ProtocolTypeManager.getInstance(TaxCollectorStaticInformations, _loc2_);
        this.identification.deserialize(param1);
        this.guildLevel = param1.readUnsignedByte();
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element of GameRolePlayTaxCollectorInformations.guildLevel.');
        }
        this.taxCollectorAttack = param1.readInt();
    };
    GameRolePlayTaxCollectorInformations.ID = 148;
    return GameRolePlayTaxCollectorInformations;
})(GameRolePlayActorInformations);
module.exports = GameRolePlayTaxCollectorInformations;
