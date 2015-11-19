/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdolsPresetSaveResultMessage = (function (_super) {
    __extends(IdolsPresetSaveResultMessage, _super);
    function IdolsPresetSaveResultMessage() {
        this.presetId = 0;
        this.code = 2;
        _super.call(this);
    }
    IdolsPresetSaveResultMessage.prototype.getMessageId = function () {
        return IdolsPresetSaveResultMessage.ID;
    };
    IdolsPresetSaveResultMessage.prototype.reset = function () {
        this.presetId = 0;
        this.code = 2;
    };
    IdolsPresetSaveResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolsPresetSaveResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolsPresetSaveResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolsPresetSaveResultMessage(param1);
    };
    IdolsPresetSaveResultMessage.prototype.serializeAs_IdolsPresetSaveResultMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        param1.writeByte(this.code);
    };
    IdolsPresetSaveResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolsPresetSaveResultMessage(param1);
    };
    IdolsPresetSaveResultMessage.prototype.deserializeAs_IdolsPresetSaveResultMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of IdolsPresetSaveResultMessage.presetId.');
        }
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error('Forbidden value (' + this.code + ') on element of IdolsPresetSaveResultMessage.code.');
        }
    };
    IdolsPresetSaveResultMessage.ID = 6604;
    return IdolsPresetSaveResultMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolsPresetSaveResultMessage;
