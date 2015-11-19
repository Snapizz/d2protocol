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
var StorageObjectsUpdateMessage = (function (_super) {
    __extends(StorageObjectsUpdateMessage, _super);
    function StorageObjectsUpdateMessage() {
        this.objectList = [];
        _super.call(this);
    }
    StorageObjectsUpdateMessage.prototype.getMessageId = function () {
        return StorageObjectsUpdateMessage.ID;
    };
    StorageObjectsUpdateMessage.prototype.reset = function () {
        this.objectList = [];
    };
    StorageObjectsUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StorageObjectsUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StorageObjectsUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_StorageObjectsUpdateMessage(param1);
    };
    StorageObjectsUpdateMessage.prototype.serializeAs_StorageObjectsUpdateMessage = function (param1) {
        param1.writeShort(this.objectList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectList.length) {
            (this.objectList[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }
    };
    StorageObjectsUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StorageObjectsUpdateMessage(param1);
    };
    StorageObjectsUpdateMessage.prototype.deserializeAs_StorageObjectsUpdateMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.objectList.push(_loc4_);
            _loc3_++;
        }
    };
    StorageObjectsUpdateMessage.ID = 6036;
    return StorageObjectsUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = StorageObjectsUpdateMessage;
