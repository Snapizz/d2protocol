/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItem = require('../../../../types/game/data/items/object-item');
var StorageObjectUpdateMessage = (function (_super) {
    __extends(StorageObjectUpdateMessage, _super);
    function StorageObjectUpdateMessage() {
        this.object = new ObjectItem();
        _super.call(this);
    }
    StorageObjectUpdateMessage.prototype.getMessageId = function () {
        return StorageObjectUpdateMessage.ID;
    };
    StorageObjectUpdateMessage.prototype.reset = function () {
        this.object = new ObjectItem();
    };
    StorageObjectUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StorageObjectUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StorageObjectUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_StorageObjectUpdateMessage(param1);
    };
    StorageObjectUpdateMessage.prototype.serializeAs_StorageObjectUpdateMessage = function (param1) {
        this.object.serializeAs_ObjectItem(param1);
    };
    StorageObjectUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StorageObjectUpdateMessage(param1);
    };
    StorageObjectUpdateMessage.prototype.deserializeAs_StorageObjectUpdateMessage = function (param1) {
        this.object = new ObjectItem();
        this.object.deserialize(param1);
    };
    StorageObjectUpdateMessage.ID = 5647;
    return StorageObjectUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = StorageObjectUpdateMessage;
