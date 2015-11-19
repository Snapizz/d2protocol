/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TitleGainedMessage = (function (_super) {
    __extends(TitleGainedMessage, _super);
    function TitleGainedMessage() {
        this.titleId = 0;
        _super.call(this);
    }
    TitleGainedMessage.prototype.getMessageId = function () {
        return TitleGainedMessage.ID;
    };
    TitleGainedMessage.prototype.reset = function () {
        this.titleId = 0;
    };
    TitleGainedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TitleGainedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TitleGainedMessage.prototype.serialize = function (param1) {
        this.serializeAs_TitleGainedMessage(param1);
    };
    TitleGainedMessage.prototype.serializeAs_TitleGainedMessage = function (param1) {
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element titleId.');
        }
        param1.writeVarShort(this.titleId);
    };
    TitleGainedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TitleGainedMessage(param1);
    };
    TitleGainedMessage.prototype.deserializeAs_TitleGainedMessage = function (param1) {
        this.titleId = param1.readVarUhShort();
        if (this.titleId < 0) {
            throw new Error('Forbidden value (' + this.titleId + ') on element of TitleGainedMessage.titleId.');
        }
    };
    TitleGainedMessage.ID = 6364;
    return TitleGainedMessage;
})(network_message_1.NetworkMessage);
module.exports = TitleGainedMessage;
