/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryPresetItemUpdateErrorMessage = (function (_super) {
    __extends(InventoryPresetItemUpdateErrorMessage, _super);
    function InventoryPresetItemUpdateErrorMessage() {
        this.code = 1;
        _super.call(this);
    }
    InventoryPresetItemUpdateErrorMessage.prototype.getMessageId = function () {
        return InventoryPresetItemUpdateErrorMessage.ID;
    };
    InventoryPresetItemUpdateErrorMessage.prototype.reset = function () {
        this.code = 1;
    };
    InventoryPresetItemUpdateErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetItemUpdateErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetItemUpdateErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetItemUpdateErrorMessage(param1);
    };
    InventoryPresetItemUpdateErrorMessage.prototype.serializeAs_InventoryPresetItemUpdateErrorMessage = function (param1) {
        param1.writeByte(this.code);
    };
    InventoryPresetItemUpdateErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetItemUpdateErrorMessage(param1);
    };
    InventoryPresetItemUpdateErrorMessage.prototype.deserializeAs_InventoryPresetItemUpdateErrorMessage = function (param1) {
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error('Forbidden value (' + this.code + ') on element of InventoryPresetItemUpdateErrorMessage.code.');
        }
    };
    InventoryPresetItemUpdateErrorMessage.ID = 6211;
    return InventoryPresetItemUpdateErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetItemUpdateErrorMessage;
