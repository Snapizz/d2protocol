/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectAveragePricesErrorMessage = (function (_super) {
    __extends(ObjectAveragePricesErrorMessage, _super);
    function ObjectAveragePricesErrorMessage() {
        _super.call(this);
    }
    ObjectAveragePricesErrorMessage.prototype.getMessageId = function () {
        return ObjectAveragePricesErrorMessage.ID;
    };
    ObjectAveragePricesErrorMessage.prototype.reset = function () {
    };
    ObjectAveragePricesErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectAveragePricesErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectAveragePricesErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectAveragePricesErrorMessage(param1);
    };
    ObjectAveragePricesErrorMessage.prototype.serializeAs_ObjectAveragePricesErrorMessage = function (param1) {
    };
    ObjectAveragePricesErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectAveragePricesErrorMessage(param1);
    };
    ObjectAveragePricesErrorMessage.prototype.deserializeAs_ObjectAveragePricesErrorMessage = function (param1) {
    };
    ObjectAveragePricesErrorMessage.ID = 6336;
    return ObjectAveragePricesErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectAveragePricesErrorMessage;
