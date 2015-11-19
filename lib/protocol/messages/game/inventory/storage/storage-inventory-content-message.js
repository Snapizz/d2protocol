/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryContentMessage = require('../items/inventory-content-message');
var StorageInventoryContentMessage = (function (_super) {
    __extends(StorageInventoryContentMessage, _super);
    function StorageInventoryContentMessage() {
        _super.call(this);
    }
    StorageInventoryContentMessage.prototype.getMessageId = function () {
        return StorageInventoryContentMessage.ID;
    };
    StorageInventoryContentMessage.prototype.reset = function () {
    };
    StorageInventoryContentMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StorageInventoryContentMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StorageInventoryContentMessage.prototype.serialize = function (param1) {
        this.serializeAs_StorageInventoryContentMessage(param1);
    };
    StorageInventoryContentMessage.prototype.serializeAs_StorageInventoryContentMessage = function (param1) {
        _super.prototype.serializeAs_InventoryContentMessage.call(this, param1);
    };
    StorageInventoryContentMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StorageInventoryContentMessage(param1);
    };
    StorageInventoryContentMessage.prototype.deserializeAs_StorageInventoryContentMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    StorageInventoryContentMessage.ID = 5646;
    return StorageInventoryContentMessage;
})(InventoryContentMessage);
module.exports = StorageInventoryContentMessage;
