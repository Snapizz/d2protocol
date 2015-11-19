/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItemQuantity = require('../../../../types/game/data/items/object-item-quantity');
var ObjectsQuantityMessage = (function (_super) {
    __extends(ObjectsQuantityMessage, _super);
    function ObjectsQuantityMessage() {
        this.objectsUIDAndQty = [];
        _super.call(this);
    }
    ObjectsQuantityMessage.prototype.getMessageId = function () {
        return ObjectsQuantityMessage.ID;
    };
    ObjectsQuantityMessage.prototype.reset = function () {
        this.objectsUIDAndQty = [];
    };
    ObjectsQuantityMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectsQuantityMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectsQuantityMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectsQuantityMessage(param1);
    };
    ObjectsQuantityMessage.prototype.serializeAs_ObjectsQuantityMessage = function (param1) {
        param1.writeShort(this.objectsUIDAndQty.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectsUIDAndQty.length) {
            (this.objectsUIDAndQty[_loc2_]).serializeAs_ObjectItemQuantity(param1);
            _loc2_++;
        }
    };
    ObjectsQuantityMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectsQuantityMessage(param1);
    };
    ObjectsQuantityMessage.prototype.deserializeAs_ObjectsQuantityMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItemQuantity();
            _loc4_.deserialize(param1);
            this.objectsUIDAndQty.push(_loc4_);
            _loc3_++;
        }
    };
    ObjectsQuantityMessage.ID = 6206;
    return ObjectsQuantityMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectsQuantityMessage;
