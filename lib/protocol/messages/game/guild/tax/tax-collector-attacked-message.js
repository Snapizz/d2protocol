/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicGuildInformations = require('../../../../types/game/context/roleplay/basic-guild-informations');
var TaxCollectorAttackedMessage = (function (_super) {
    __extends(TaxCollectorAttackedMessage, _super);
    function TaxCollectorAttackedMessage() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.guild = new BasicGuildInformations();
        _super.call(this);
    }
    TaxCollectorAttackedMessage.prototype.getMessageId = function () {
        return TaxCollectorAttackedMessage.ID;
    };
    TaxCollectorAttackedMessage.prototype.reset = function () {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.guild = new BasicGuildInformations();
    };
    TaxCollectorAttackedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TaxCollectorAttackedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TaxCollectorAttackedMessage.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorAttackedMessage(param1);
    };
    TaxCollectorAttackedMessage.prototype.serializeAs_TaxCollectorAttackedMessage = function (param1) {
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
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
        this.guild.serializeAs_BasicGuildInformations(param1);
    };
    TaxCollectorAttackedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorAttackedMessage(param1);
    };
    TaxCollectorAttackedMessage.prototype.deserializeAs_TaxCollectorAttackedMessage = function (param1) {
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of TaxCollectorAttackedMessage.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of TaxCollectorAttackedMessage.lastNameId.');
        }
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of TaxCollectorAttackedMessage.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of TaxCollectorAttackedMessage.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of TaxCollectorAttackedMessage.subAreaId.');
        }
        this.guild = new BasicGuildInformations();
        this.guild.deserialize(param1);
    };
    TaxCollectorAttackedMessage.ID = 5918;
    return TaxCollectorAttackedMessage;
})(network_message_1.NetworkMessage);
module.exports = TaxCollectorAttackedMessage;
