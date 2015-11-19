/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryPresetItemUpdateRequestMessage = (function (_super) {
    __extends(InventoryPresetItemUpdateRequestMessage, _super);
    function InventoryPresetItemUpdateRequestMessage() {
        this.presetId = 0;
        this.position = 63;
        this.objUid = 0;
        _super.call(this);
    }
    InventoryPresetItemUpdateRequestMessage.prototype.getMessageId = function () {
        return InventoryPresetItemUpdateRequestMessage.ID;
    };
    InventoryPresetItemUpdateRequestMessage.prototype.reset = function () {
        this.presetId = 0;
        this.position = 63;
        this.objUid = 0;
    };
    InventoryPresetItemUpdateRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetItemUpdateRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetItemUpdateRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetItemUpdateRequestMessage(param1);
    };
    InventoryPresetItemUpdateRequestMessage.prototype.serializeAs_InventoryPresetItemUpdateRequestMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        param1.writeByte(this.position);
        if (this.objUid < 0) {
            throw new Error('Forbidden value (' + this.objUid + ') on element objUid.');
        }
        param1.writeVarInt(this.objUid);
    };
    InventoryPresetItemUpdateRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetItemUpdateRequestMessage(param1);
    };
    InventoryPresetItemUpdateRequestMessage.prototype.deserializeAs_InventoryPresetItemUpdateRequestMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetItemUpdateRequestMessage.presetId.');
        }
        this.position = param1.readUnsignedByte();
        if (this.position < 0 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element of InventoryPresetItemUpdateRequestMessage.position.');
        }
        this.objUid = param1.readVarUhInt();
        if (this.objUid < 0) {
            throw new Error('Forbidden value (' + this.objUid + ') on element of InventoryPresetItemUpdateRequestMessage.objUid.');
        }
    };
    InventoryPresetItemUpdateRequestMessage.ID = 6210;
    return InventoryPresetItemUpdateRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetItemUpdateRequestMessage;
