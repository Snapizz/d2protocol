/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TitleLostMessage = (function (_super) {
    __extends(TitleLostMessage, _super);
    function TitleLostMessage() {
        this.titleId = 0;
        _super.call(this);
    }
    TitleLostMessage.prototype.getMessageId = function () {
        return TitleLostMessage.ID;
    };
    TitleLostMessage.prototype.reset = function () {
        this.titleId = 0;
    };
    TitleLostMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TitleLostMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TitleLostMessage.prototype.serialize = function (param1) {
        this.serializeAs_TitleLostMessage(param1);
    };
    TitleLostMessage.prototype.serializeAs_TitleLostMessage = function (param1) {
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element titleId.');
        }
        param1.writeVarShort(this.titleId);
    };
    TitleLostMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TitleLostMessage(param1);
    };
    TitleLostMessage.prototype.deserializeAs_TitleLostMessage = function (param1) {
        this.titleId = param1.readVarUhShort();
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element of TitleLostMessage.titleId.');
        }
    };
    TitleLostMessage.ID = 6371;
    return TitleLostMessage;
})(network_message_1.NetworkMessage);
module.exports = TitleLostMessage;
