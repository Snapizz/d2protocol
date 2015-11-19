/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectsDeletedMessage = (function (_super) {
    __extends(ObjectsDeletedMessage, _super);
    function ObjectsDeletedMessage() {
        this.objectUID = [];
        _super.call(this);
    }
    ObjectsDeletedMessage.prototype.getMessageId = function () {
        return ObjectsDeletedMessage.ID;
    };
    ObjectsDeletedMessage.prototype.reset = function () {
        this.objectUID = [];
    };
    ObjectsDeletedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectsDeletedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectsDeletedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectsDeletedMessage(param1);
    };
    ObjectsDeletedMessage.prototype.serializeAs_ObjectsDeletedMessage = function (param1) {
        param1.writeShort(this.objectUID.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectUID.length) {
            if (this.objectUID[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.objectUID[_loc2_] + ') on element 1 (starting at 1) of objectUID.');
            }
            param1.writeVarInt(this.objectUID[_loc2_]);
            _loc2_++;
        }
    };
    ObjectsDeletedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectsDeletedMessage(param1);
    };
    ObjectsDeletedMessage.prototype.deserializeAs_ObjectsDeletedMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhInt();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of objectUID.');
            }
            this.objectUID.push(_loc4_);
            _loc3_++;
        }
    };
    ObjectsDeletedMessage.ID = 6034;
    return ObjectsDeletedMessage;
})(network_message_1.NetworkMessage);
module.exports = ObjectsDeletedMessage;
