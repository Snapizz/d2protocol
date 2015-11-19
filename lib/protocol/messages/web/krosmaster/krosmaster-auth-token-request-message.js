/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var KrosmasterAuthTokenRequestMessage = (function (_super) {
    __extends(KrosmasterAuthTokenRequestMessage, _super);
    function KrosmasterAuthTokenRequestMessage() {
        _super.call(this);
    }
    KrosmasterAuthTokenRequestMessage.prototype.getMessageId = function () {
        return KrosmasterAuthTokenRequestMessage.ID;
    };
    KrosmasterAuthTokenRequestMessage.prototype.reset = function () {
    };
    KrosmasterAuthTokenRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KrosmasterAuthTokenRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KrosmasterAuthTokenRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_KrosmasterAuthTokenRequestMessage(param1);
    };
    KrosmasterAuthTokenRequestMessage.prototype.serializeAs_KrosmasterAuthTokenRequestMessage = function (param1) {
    };
    KrosmasterAuthTokenRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KrosmasterAuthTokenRequestMessage(param1);
    };
    KrosmasterAuthTokenRequestMessage.prototype.deserializeAs_KrosmasterAuthTokenRequestMessage = function (param1) {
    };
    KrosmasterAuthTokenRequestMessage.ID = 6346;
    return KrosmasterAuthTokenRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = KrosmasterAuthTokenRequestMessage;
