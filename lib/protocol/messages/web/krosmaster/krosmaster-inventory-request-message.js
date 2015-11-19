/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var KrosmasterInventoryRequestMessage = (function (_super) {
    __extends(KrosmasterInventoryRequestMessage, _super);
    function KrosmasterInventoryRequestMessage() {
        _super.call(this);
    }
    KrosmasterInventoryRequestMessage.prototype.getMessageId = function () {
        return KrosmasterInventoryRequestMessage.ID;
    };
    KrosmasterInventoryRequestMessage.prototype.reset = function () {
    };
    KrosmasterInventoryRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KrosmasterInventoryRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KrosmasterInventoryRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_KrosmasterInventoryRequestMessage(param1);
    };
    KrosmasterInventoryRequestMessage.prototype.serializeAs_KrosmasterInventoryRequestMessage = function (param1) {
    };
    KrosmasterInventoryRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KrosmasterInventoryRequestMessage(param1);
    };
    KrosmasterInventoryRequestMessage.prototype.deserializeAs_KrosmasterInventoryRequestMessage = function (param1) {
    };
    KrosmasterInventoryRequestMessage.ID = 6344;
    return KrosmasterInventoryRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = KrosmasterInventoryRequestMessage;
