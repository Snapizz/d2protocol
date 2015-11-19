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
var ObjectsAddedMessage = (function (_super) {
    __extends(ObjectsAddedMessage, _super);
    function ObjectsAddedMessage() {
        this.object = [];
        _super.call(this);
    }
    ObjectsAddedMessage.prototype.getMessageId = function () {
        return ObjectsAddedMessage.ID;
    };
    ObjectsAddedMessage.prototype.reset = function () {
        this.object = [];
    };
    ObjectsAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectsAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectsAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectsAddedMessage(param1);
    };
    ObjectsAddedMessage.prototype.serializeAs_ObjectsAddedMessage = function (param1) {
        param1.writeShort(this.object.length);
        var _loc2_ = 0;
        while (_loc2_ < this.object.length) {
            (this.object[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }
    };
    ObjectsAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectsAddedMessage(param1);
    };
    ObjectsAddedMessage.prototype.deserializeAs_ObjectsAddedMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.object.push(_loc4_);
            _loc3_++;
        }
    };
    ObjectsAddedMessage.ID = 6033;
    return ObjectsAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectsAddedMessage;
