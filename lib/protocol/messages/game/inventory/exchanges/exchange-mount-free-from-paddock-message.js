/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeMountFreeFromPaddockMessage = (function (_super) {
    __extends(ExchangeMountFreeFromPaddockMessage, _super);
    function ExchangeMountFreeFromPaddockMessage() {
        this.name = '';
        this.worldX = 0;
        this.worldY = 0;
        this.liberator = '';
        _super.call(this);
    }
    ExchangeMountFreeFromPaddockMessage.prototype.getMessageId = function () {
        return ExchangeMountFreeFromPaddockMessage.ID;
    };
    ExchangeMountFreeFromPaddockMessage.prototype.reset = function () {
        this.name = '';
        this.worldX = 0;
        this.worldY = 0;
        this.liberator = '';
    };
    ExchangeMountFreeFromPaddockMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeMountFreeFromPaddockMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeMountFreeFromPaddockMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeMountFreeFromPaddockMessage(param1);
    };
    ExchangeMountFreeFromPaddockMessage.prototype.serializeAs_ExchangeMountFreeFromPaddockMessage = function (param1) {
        param1.writeUTF(this.name);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeUTF(this.liberator);
    };
    ExchangeMountFreeFromPaddockMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeMountFreeFromPaddockMessage(param1);
    };
    ExchangeMountFreeFromPaddockMessage.prototype.deserializeAs_ExchangeMountFreeFromPaddockMessage = function (param1) {
        this.name = param1.readUTF();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of ExchangeMountFreeFromPaddockMessage.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of ExchangeMountFreeFromPaddockMessage.worldY.');
        }
        this.liberator = param1.readUTF();
    };
    ExchangeMountFreeFromPaddockMessage.ID = 6055;
    return ExchangeMountFreeFromPaddockMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeMountFreeFromPaddockMessage;
