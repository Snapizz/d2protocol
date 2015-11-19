/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TitleSelectRequestMessage = (function (_super) {
    __extends(TitleSelectRequestMessage, _super);
    function TitleSelectRequestMessage() {
        this.titleId = 0;
        _super.call(this);
    }
    TitleSelectRequestMessage.prototype.getMessageId = function () {
        return TitleSelectRequestMessage.ID;
    };
    TitleSelectRequestMessage.prototype.reset = function () {
        this.titleId = 0;
    };
    TitleSelectRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TitleSelectRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TitleSelectRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_TitleSelectRequestMessage(param1);
    };
    TitleSelectRequestMessage.prototype.serializeAs_TitleSelectRequestMessage = function (param1) {
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element titleId.');
        }
        param1.writeVarShort(this.titleId);
    };
    TitleSelectRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TitleSelectRequestMessage(param1);
    };
    TitleSelectRequestMessage.prototype.deserializeAs_TitleSelectRequestMessage = function (param1) {
        this.titleId = param1.readVarUhShort();
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element of TitleSelectRequestMessage.titleId.');
        }
    };
    TitleSelectRequestMessage.ID = 6365;
    return TitleSelectRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = TitleSelectRequestMessage;
