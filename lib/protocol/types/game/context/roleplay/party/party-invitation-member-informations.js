/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CharacterBaseInformations = require('../../../character/choice/character-base-informations');
var PartyCompanionBaseInformations = require('./companion/party-companion-base-informations');
var PartyInvitationMemberInformations = (function (_super) {
    __extends(PartyInvitationMemberInformations, _super);
    function PartyInvitationMemberInformations() {
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.companions = [];
        _super.call(this);
    }
    PartyInvitationMemberInformations.prototype.getTypeId = function () {
        return PartyInvitationMemberInformations.ID;
    };
    PartyInvitationMemberInformations.prototype.reset = function () {
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.companions = [];
    };
    PartyInvitationMemberInformations.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationMemberInformations(param1);
    };
    PartyInvitationMemberInformations.prototype.serializeAs_PartyInvitationMemberInformations = function (param1) {
        _super.prototype.serializeAs_CharacterBaseInformations.call(this, param1);
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
        param1.writeShort(this.companions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.companions.length) {
            (this.companions[_loc2_]).serializeAs_PartyCompanionBaseInformations(param1);
            _loc2_++;
        }
    };
    PartyInvitationMemberInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationMemberInformations(param1);
    };
    PartyInvitationMemberInformations.prototype.deserializeAs_PartyInvitationMemberInformations = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of PartyInvitationMemberInformations.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of PartyInvitationMemberInformations.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PartyInvitationMemberInformations.subAreaId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new PartyCompanionBaseInformations();
            _loc4_.deserialize(param1);
            this.companions.push(_loc4_);
            _loc3_++;
        }
    };
    PartyInvitationMemberInformations.ID = 376;
    return PartyInvitationMemberInformations;
})(CharacterBaseInformations);
module.exports = PartyInvitationMemberInformations;
