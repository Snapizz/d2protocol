/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryWeightMessage = (function (_super) {
    __extends(InventoryWeightMessage, _super);
    function InventoryWeightMessage() {
        this.weight = 0;
        this.weightMax = 0;
        _super.call(this);
    }
    InventoryWeightMessage.prototype.getMessageId = function () {
        return InventoryWeightMessage.ID;
    };
    InventoryWeightMessage.prototype.reset = function () {
        this.weight = 0;
        this.weightMax = 0;
    };
    InventoryWeightMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryWeightMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryWeightMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryWeightMessage(param1);
    };
    InventoryWeightMessage.prototype.serializeAs_InventoryWeightMessage = function (param1) {
        if (this.weight < 0) {
            throw new Error('Forbidden value (' + this.weight + ') on element weight.');
        }
        param1.writeVarInt(this.weight);
        if (this.weightMax < 0) {
            throw new Error('Forbidden value (' + this.weightMax + ') on element weightMax.');
        }
        param1.writeVarInt(this.weightMax);
    };
    InventoryWeightMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryWeightMessage(param1);
    };
    InventoryWeightMessage.prototype.deserializeAs_InventoryWeightMessage = function (param1) {
        this.weight = param1.readVarUhInt();
        if (this.weight < 0) {
            throw new Error('Forbidden value (' + this.weight + ') on element of InventoryWeightMessage.weight.');
        }
        this.weightMax = param1.readVarUhInt();
        if (this.weightMax < 0) {
            throw new Error('Forbidden value (' + this.weightMax + ') on element of InventoryWeightMessage.weightMax.');
        }
    };
    InventoryWeightMessage.ID = 3009;
    return InventoryWeightMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryWeightMessage;
