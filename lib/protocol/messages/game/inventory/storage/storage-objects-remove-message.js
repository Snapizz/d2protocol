/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StorageObjectsRemoveMessage = (function (_super) {
    __extends(StorageObjectsRemoveMessage, _super);
    function StorageObjectsRemoveMessage() {
        this.objectUIDList = [];
        _super.call(this);
    }
    StorageObjectsRemoveMessage.prototype.getMessageId = function () {
        return StorageObjectsRemoveMessage.ID;
    };
    StorageObjectsRemoveMessage.prototype.reset = function () {
        this.objectUIDList = [];
    };
    StorageObjectsRemoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StorageObjectsRemoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StorageObjectsRemoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_StorageObjectsRemoveMessage(param1);
    };
    StorageObjectsRemoveMessage.prototype.serializeAs_StorageObjectsRemoveMessage = function (param1) {
        param1.writeShort(this.objectUIDList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectUIDList.length) {
            if (this.objectUIDList[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.objectUIDList[_loc2_] + ') on element 1 (starting at 1) of objectUIDList.');
            }
            param1.writeVarInt(this.objectUIDList[_loc2_]);
            _loc2_++;
        }
    };
    StorageObjectsRemoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StorageObjectsRemoveMessage(param1);
    };
    StorageObjectsRemoveMessage.prototype.deserializeAs_StorageObjectsRemoveMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of objectUIDList.');
            }
            this.objectUIDList.push(_loc4_);
            _loc3_++;
        }
    };
    StorageObjectsRemoveMessage.ID = 6035;
    return StorageObjectsRemoveMessage;
})(network_message_1.NetworkMessage);
module.exports = StorageObjectsRemoveMessage;
