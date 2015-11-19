/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterBaseInformations = require('../../../character/choice/character-base-informations');
var PlayerStatus = require('../../../character/status/player-status');
var PartyCompanionMemberInformations = require('./companion/party-companion-member-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var PartyMemberInformations = (function (_super) {
    __extends(PartyMemberInformations, _super);
    function PartyMemberInformations() {
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
        this.initiative = 0;
        this.alignmentSide = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.status = new PlayerStatus();
        this.companions = [];
        _super.call(this);
    }
    PartyMemberInformations.prototype.getTypeId = function () {
        return PartyMemberInformations.ID;
    };
    PartyMemberInformations.prototype.reset = function () {
        this.lifePoints = 0;
        this.maxLifePoints = 0;
        this.prospecting = 0;
        this.regenRate = 0;
        this.initiative = 0;
        this.alignmentSide = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.status = new PlayerStatus();
        this.companions = [];
    };
    PartyMemberInformations.prototype.serialize = function (param1) {
        this.serializeAs_PartyMemberInformations(param1);
    };
    PartyMemberInformations.prototype.serializeAs_PartyMemberInformations = function (param1) {
        _super.prototype.serializeAs_CharacterBaseInformations.call(this, param1);
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element lifePoints.');
        }
        param1.writeVarInt(this.lifePoints);
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element maxLifePoints.');
        }
        param1.writeVarInt(this.maxLifePoints);
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element prospecting.');
        }
        param1.writeVarShort(this.prospecting);
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element regenRate.');
        }
        param1.writeByte(this.regenRate);
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element initiative.');
        }
        param1.writeVarShort(this.initiative);
        param1.writeByte(this.alignmentSide);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeShort(this.status.getTypeId());
        this.status.serialize(param1);
        param1.writeShort(this.companions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.companions.length) {
            (this.companions[_loc2_]).serializeAs_PartyCompanionMemberInformations(param1);
            _loc2_++;
        }
    };
    PartyMemberInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyMemberInformations(param1);
    };
    PartyMemberInformations.prototype.deserializeAs_PartyMemberInformations = function (param1) {
        var _loc5_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.lifePoints = param1.readVarUhInt();
        if (this.lifePoints < 0) {
            throw new Error('Forbidden value (' + this.lifePoints + ') on element of PartyMemberInformations.lifePoints.');
        }
        this.maxLifePoints = param1.readVarUhInt();
        if (this.maxLifePoints < 0) {
            throw new Error('Forbidden value (' + this.maxLifePoints + ') on element of PartyMemberInformations.maxLifePoints.');
        }
        this.prospecting = param1.readVarUhShort();
        if (this.prospecting < 0) {
            throw new Error('Forbidden value (' + this.prospecting + ') on element of PartyMemberInformations.prospecting.');
        }
        this.regenRate = param1.readUnsignedByte();
        if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error('Forbidden value (' + this.regenRate + ') on element of PartyMemberInformations.regenRate.');
        }
        this.initiative = param1.readVarUhShort();
        if (this.initiative < 0) {
            throw new Error('Forbidden value (' + this.initiative + ') on element of PartyMemberInformations.initiative.');
        }
        this.alignmentSide = param1.readByte();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PartyMemberInformations.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PartyMemberInformations.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PartyMemberInformations.subAreaId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        this.status = ProtocolTypeManager.getInstance(PlayerStatus, _loc2_);
        this.status.deserialize(param1);
        var _loc3_ = param1.readUnsignedShort();
        var _loc4_ = 0;
        while (_loc4_ < _loc3_) {
            _loc5_ = new PartyCompanionMemberInformations();
            _loc5_.deserialize(param1);
            this.companions.push(_loc5_);
            _loc4_++;
        }
    };
    PartyMemberInformations.ID = 90;
    return PartyMemberInformations;
})(CharacterBaseInformations);
module.exports = PartyMemberInformations;
