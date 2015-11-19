/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DownloadPartMessage = (function (_super) {
    __extends(DownloadPartMessage, _super);
    function DownloadPartMessage() {
        this.id = '';
        _super.call(this);
    }
    DownloadPartMessage.prototype.getMessageId = function () {
        return DownloadPartMessage.ID;
    };
    DownloadPartMessage.prototype.reset = function () {
        this.id = '';
    };
    DownloadPartMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DownloadPartMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DownloadPartMessage.prototype.serialize = function (param1) {
        this.serializeAs_DownloadPartMessage(param1);
    };
    DownloadPartMessage.prototype.serializeAs_DownloadPartMessage = function (param1) {
        param1.writeUTF(this.id);
    };
    DownloadPartMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DownloadPartMessage(param1);
    };
    DownloadPartMessage.prototype.deserializeAs_DownloadPartMessage = function (param1) {
        this.id = param1.readUTF();
    };
    DownloadPartMessage.ID = 1503;
    return DownloadPartMessage;
})(network_message_1.NetworkMessage);
module.exports = DownloadPartMessage;
