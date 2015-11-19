/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeMountSterilizeFromPaddockMessage = (function (_super) {
    __extends(ExchangeMountSterilizeFromPaddockMessage, _super);
    function ExchangeMountSterilizeFromPaddockMessage() {
        this.name = '';
        this.worldX = 0;
        this.worldY = 0;
        this.sterilizator = '';
        _super.call(this);
    }
    ExchangeMountSterilizeFromPaddockMessage.prototype.getMessageId = function () {
        return ExchangeMountSterilizeFromPaddockMessage.ID;
    };
    ExchangeMountSterilizeFromPaddockMessage.prototype.reset = function () {
        this.name = '';
        this.worldX = 0;
        this.worldY = 0;
        this.sterilizator = '';
    };
    ExchangeMountSterilizeFromPaddockMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeMountSterilizeFromPaddockMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeMountSterilizeFromPaddockMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeMountSterilizeFromPaddockMessage(param1);
    };
    ExchangeMountSterilizeFromPaddockMessage.prototype.serializeAs_ExchangeMountSterilizeFromPaddockMessage = function (param1) {
        param1.writeUTF(this.name);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeUTF(this.sterilizator);
    };
    ExchangeMountSterilizeFromPaddockMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeMountSterilizeFromPaddockMessage(param1);
    };
    ExchangeMountSterilizeFromPaddockMessage.prototype.deserializeAs_ExchangeMountSterilizeFromPaddockMessage = function (param1) {
        this.name = param1.readUTF();
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of ExchangeMountSterilizeFromPaddockMessage.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of ExchangeMountSterilizeFromPaddockMessage.worldY.');
        }
        this.sterilizator = param1.readUTF();
    };
    ExchangeMountSterilizeFromPaddockMessage.ID = 6056;
    return ExchangeMountSterilizeFromPaddockMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeMountSterilizeFromPaddockMessage;
