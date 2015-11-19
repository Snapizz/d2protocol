/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectAveragePricesGetMessage = (function (_super) {
    __extends(ObjectAveragePricesGetMessage, _super);
    function ObjectAveragePricesGetMessage() {
        _super.call(this);
    }
    ObjectAveragePricesGetMessage.prototype.getMessageId = function () {
        return ObjectAveragePricesGetMessage.ID;
    };
    ObjectAveragePricesGetMessage.prototype.reset = function () {
    };
    ObjectAveragePricesGetMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectAveragePricesGetMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectAveragePricesGetMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectAveragePricesGetMessage(param1);
    };
    ObjectAveragePricesGetMessage.prototype.serializeAs_ObjectAveragePricesGetMessage = function (param1) {
    };
    ObjectAveragePricesGetMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectAveragePricesGetMessage(param1);
    };
    ObjectAveragePricesGetMessage.prototype.deserializeAs_ObjectAveragePricesGetMessage = function (param1) {
    };
    ObjectAveragePricesGetMessage.ID = 6334;
    return ObjectAveragePricesGetMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectAveragePricesGetMessage;
