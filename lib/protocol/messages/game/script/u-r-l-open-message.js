/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var URLOpenMessage = (function (_super) {
    __extends(URLOpenMessage, _super);
    function URLOpenMessage() {
        this.urlId = 0;
        _super.call(this);
    }
    URLOpenMessage.prototype.getMessageId = function () {
        return URLOpenMessage.ID;
    };
    URLOpenMessage.prototype.reset = function () {
        this.urlId = 0;
    };
    URLOpenMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    URLOpenMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    URLOpenMessage.prototype.serialize = function (param1) {
        this.serializeAs_URLOpenMessage(param1);
    };
    URLOpenMessage.prototype.serializeAs_URLOpenMessage = function (param1) {
        if (this.urlId < 0) {
            throw new Error('Forbidden value (' + this.urlId + ') on element urlId.');
        }
        param1.writeByte(this.urlId);
    };
    URLOpenMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_URLOpenMessage(param1);
    };
    URLOpenMessage.prototype.deserializeAs_URLOpenMessage = function (param1) {
        this.urlId = param1.readByte();
        if (this.urlId < 0) {
            throw new Error('Forbidden value (' + this.urlId + ') on element of URLOpenMessage.urlId.');
        }
    };
    URLOpenMessage.ID = 6266;
    return URLOpenMessage;
})(network_message_1.NetworkMessage);
module.exports = URLOpenMessage;
