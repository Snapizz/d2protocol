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
var InventoryContentMessage = (function (_super) {
    __extends(InventoryContentMessage, _super);
    function InventoryContentMessage() {
        this.objects = [];
        this.kamas = 0;
        _super.call(this);
    }
    InventoryContentMessage.prototype.getMessageId = function () {
        return InventoryContentMessage.ID;
    };
    InventoryContentMessage.prototype.reset = function () {
        this.objects = [];
        this.kamas = 0;
    };
    InventoryContentMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryContentMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryContentMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryContentMessage(param1);
    };
    InventoryContentMessage.prototype.serializeAs_InventoryContentMessage = function (param1) {
        param1.writeShort(this.objects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objects.length) {
            (this.objects[_loc2_]).serializeAs_ObjectItem(param1);
            _loc2_++;
        }
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element kamas.');
        }
        param1.writeVarInt(this.kamas);
    };
    InventoryContentMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryContentMessage(param1);
    };
    InventoryContentMessage.prototype.deserializeAs_InventoryContentMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItem();
            _loc4_.deserialize(param1);
            this.objects.push(_loc4_);
            _loc3_++;
        }
        this.kamas = param1.readVarUhInt();
        if (this.kamas < 0) {
            throw new Error('Forbidden value (' + this.kamas + ') on element of InventoryContentMessage.kamas.');
        }
    };
    InventoryContentMessage.ID = 3016;
    return InventoryContentMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryContentMessage;
