/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItemGenericQuantity = require('../../../../types/game/data/items/object-item-generic-quantity');
var ExchangeGuildTaxCollectorGetMessage = (function (_super) {
    __extends(ExchangeGuildTaxCollectorGetMessage, _super);
    function ExchangeGuildTaxCollectorGetMessage() {
        this.collectorName = '';
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.userName = '';
        this.experience = 0;
        this.objectsInfos = [];
        _super.call(this);
    }
    ExchangeGuildTaxCollectorGetMessage.prototype.getMessageId = function () {
        return ExchangeGuildTaxCollectorGetMessage.ID;
    };
    ExchangeGuildTaxCollectorGetMessage.prototype.reset = function () {
        this.collectorName = '';
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
        this.userName = '';
        this.experience = 0;
        this.objectsInfos = [];
    };
    ExchangeGuildTaxCollectorGetMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeGuildTaxCollectorGetMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeGuildTaxCollectorGetMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeGuildTaxCollectorGetMessage(param1);
    };
    ExchangeGuildTaxCollectorGetMessage.prototype.serializeAs_ExchangeGuildTaxCollectorGetMessage = function (param1) {
        param1.writeUTF(this.collectorName);
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
        param1.writeUTF(this.userName);
        if (this.experience < -9.007199254740992E15 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element experience.');
        }
        param1.writeDouble(this.experience);
        param1.writeShort(this.objectsInfos.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItemGenericQuantity(param1);
            _loc2_++;
        }
    };
    ExchangeGuildTaxCollectorGetMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeGuildTaxCollectorGetMessage(param1);
    };
    ExchangeGuildTaxCollectorGetMessage.prototype.deserializeAs_ExchangeGuildTaxCollectorGetMessage = function (param1) {
        var _loc4_ = null;
        this.collectorName = param1.readUTF();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of ExchangeGuildTaxCollectorGetMessage.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of ExchangeGuildTaxCollectorGetMessage.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of ExchangeGuildTaxCollectorGetMessage.subAreaId.');
        }
        this.userName = param1.readUTF();
        this.experience = param1.readDouble();
        if (this.experience < -9.007199254740992E15 || this.experience > 9.007199254740992E15) {
            throw new Error('Forbidden value (' + this.experience + ') on element of ExchangeGuildTaxCollectorGetMessage.experience.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItemGenericQuantity();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeGuildTaxCollectorGetMessage.ID = 5762;
    return ExchangeGuildTaxCollectorGetMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeGuildTaxCollectorGetMessage;
