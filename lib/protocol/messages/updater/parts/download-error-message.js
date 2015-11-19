/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DownloadErrorMessage = (function (_super) {
    __extends(DownloadErrorMessage, _super);
    function DownloadErrorMessage() {
        this.errorId = 0;
        this.message = '';
        this.helpUrl = '';
        _super.call(this);
    }
    DownloadErrorMessage.prototype.getMessageId = function () {
        return DownloadErrorMessage.ID;
    };
    DownloadErrorMessage.prototype.reset = function () {
        this.errorId = 0;
        this.message = '';
        this.helpUrl = '';
    };
    DownloadErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DownloadErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DownloadErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_DownloadErrorMessage(param1);
    };
    DownloadErrorMessage.prototype.serializeAs_DownloadErrorMessage = function (param1) {
        param1.writeByte(this.errorId);
        param1.writeUTF(this.message);
        param1.writeUTF(this.helpUrl);
    };
    DownloadErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DownloadErrorMessage(param1);
    };
    DownloadErrorMessage.prototype.deserializeAs_DownloadErrorMessage = function (param1) {
        this.errorId = param1.readByte();
        if (this.errorId < 0) {
            throw new Error('Forbidden value (' + this.errorId + ') on element of DownloadErrorMessage.errorId.');
        }
        this.message = param1.readUTF();
        this.helpUrl = param1.readUTF();
    };
    DownloadErrorMessage.ID = 1513;
    return DownloadErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = DownloadErrorMessage;
