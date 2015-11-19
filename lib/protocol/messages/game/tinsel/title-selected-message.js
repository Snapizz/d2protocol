/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TitleSelectedMessage = (function (_super) {
    __extends(TitleSelectedMessage, _super);
    function TitleSelectedMessage() {
        this.titleId = 0;
        _super.call(this);
    }
    TitleSelectedMessage.prototype.getMessageId = function () {
        return TitleSelectedMessage.ID;
    };
    TitleSelectedMessage.prototype.reset = function () {
        this.titleId = 0;
    };
    TitleSelectedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TitleSelectedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TitleSelectedMessage.prototype.serialize = function (param1) {
        this.serializeAs_TitleSelectedMessage(param1);
    };
    TitleSelectedMessage.prototype.serializeAs_TitleSelectedMessage = function (param1) {
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element titleId.');
        }
        param1.writeVarShort(this.titleId);
    };
    TitleSelectedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TitleSelectedMessage(param1);
    };
    TitleSelectedMessage.prototype.deserializeAs_TitleSelectedMessage = function (param1) {
        this.titleId = param1.readVarUhShort();
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element of TitleSelectedMessage.titleId.');
        }
    };
    TitleSelectedMessage.ID = 6366;
    return TitleSelectedMessage;
})(network_message_1.NetworkMessage);
module.exports = TitleSelectedMessage;
