/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DownloadGetCurrentSpeedRequestMessage = (function (_super) {
    __extends(DownloadGetCurrentSpeedRequestMessage, _super);
    function DownloadGetCurrentSpeedRequestMessage() {
        _super.call(this);
    }
    DownloadGetCurrentSpeedRequestMessage.prototype.getMessageId = function () {
        return DownloadGetCurrentSpeedRequestMessage.ID;
    };
    DownloadGetCurrentSpeedRequestMessage.prototype.reset = function () {
    };
    DownloadGetCurrentSpeedRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DownloadGetCurrentSpeedRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DownloadGetCurrentSpeedRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_DownloadGetCurrentSpeedRequestMessage(param1);
    };
    DownloadGetCurrentSpeedRequestMessage.prototype.serializeAs_DownloadGetCurrentSpeedRequestMessage = function (param1) {
    };
    DownloadGetCurrentSpeedRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DownloadGetCurrentSpeedRequestMessage(param1);
    };
    DownloadGetCurrentSpeedRequestMessage.prototype.deserializeAs_DownloadGetCurrentSpeedRequestMessage = function (param1) {
    };
    DownloadGetCurrentSpeedRequestMessage.ID = 1510;
    return DownloadGetCurrentSpeedRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = DownloadGetCurrentSpeedRequestMessage;
