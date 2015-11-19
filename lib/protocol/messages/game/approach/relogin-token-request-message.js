/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ReloginTokenRequestMessage = (function (_super) {
    __extends(ReloginTokenRequestMessage, _super);
    function ReloginTokenRequestMessage() {
        _super.call(this);
    }
    ReloginTokenRequestMessage.prototype.getMessageId = function () {
        return ReloginTokenRequestMessage.ID;
    };
    ReloginTokenRequestMessage.prototype.reset = function () {
    };
    ReloginTokenRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ReloginTokenRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ReloginTokenRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ReloginTokenRequestMessage(param1);
    };
    ReloginTokenRequestMessage.prototype.serializeAs_ReloginTokenRequestMessage = function (param1) {
    };
    ReloginTokenRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ReloginTokenRequestMessage(param1);
    };
    ReloginTokenRequestMessage.prototype.deserializeAs_ReloginTokenRequestMessage = function (param1) {
    };
    ReloginTokenRequestMessage.ID = 6540;
    return ReloginTokenRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ReloginTokenRequestMessage;
