/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdolsPresetSaveMessage = (function (_super) {
    __extends(IdolsPresetSaveMessage, _super);
    function IdolsPresetSaveMessage() {
        this.presetId = 0;
        this.symbolId = 0;
        _super.call(this);
    }
    IdolsPresetSaveMessage.prototype.getMessageId = function () {
        return IdolsPresetSaveMessage.ID;
    };
    IdolsPresetSaveMessage.prototype.reset = function () {
        this.presetId = 0;
        this.symbolId = 0;
    };
    IdolsPresetSaveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolsPresetSaveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolsPresetSaveMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolsPresetSaveMessage(param1);
    };
    IdolsPresetSaveMessage.prototype.serializeAs_IdolsPresetSaveMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
        }
        param1.writeByte(this.symbolId);
    };
    IdolsPresetSaveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolsPresetSaveMessage(param1);
    };
    IdolsPresetSaveMessage.prototype.deserializeAs_IdolsPresetSaveMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of IdolsPresetSaveMessage.presetId.');
        }
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element of IdolsPresetSaveMessage.symbolId.');
        }
    };
    IdolsPresetSaveMessage.ID = 6603;
    return IdolsPresetSaveMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolsPresetSaveMessage;
