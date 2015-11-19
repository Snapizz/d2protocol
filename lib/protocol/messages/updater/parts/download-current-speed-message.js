/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DownloadCurrentSpeedMessage = (function (_super) {
    __extends(DownloadCurrentSpeedMessage, _super);
    function DownloadCurrentSpeedMessage() {
        this.downloadSpeed = 0;
        _super.call(this);
    }
    DownloadCurrentSpeedMessage.prototype.getMessageId = function () {
        return DownloadCurrentSpeedMessage.ID;
    };
    DownloadCurrentSpeedMessage.prototype.reset = function () {
        this.downloadSpeed = 0;
    };
    DownloadCurrentSpeedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DownloadCurrentSpeedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DownloadCurrentSpeedMessage.prototype.serialize = function (param1) {
        this.serializeAs_DownloadCurrentSpeedMessage(param1);
    };
    DownloadCurrentSpeedMessage.prototype.serializeAs_DownloadCurrentSpeedMessage = function (param1) {
        if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
            throw new Error('Forbidden value (' + this.downloadSpeed + ') on element downloadSpeed.');
        }
        param1.writeByte(this.downloadSpeed);
    };
    DownloadCurrentSpeedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DownloadCurrentSpeedMessage(param1);
    };
    DownloadCurrentSpeedMessage.prototype.deserializeAs_DownloadCurrentSpeedMessage = function (param1) {
        this.downloadSpeed = param1.readByte();
        if (this.downloadSpeed < 1 || this.downloadSpeed > 10) {
            throw new Error('Forbidden value (' + this.downloadSpeed + ') on element of DownloadCurrentSpeedMessage.downloadSpeed.');
        }
    };
    DownloadCurrentSpeedMessage.ID = 1511;
    return DownloadCurrentSpeedMessage;
})(network_message_1.NetworkMessage);
module.exports = DownloadCurrentSpeedMessage;
