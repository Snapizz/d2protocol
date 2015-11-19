/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdolsPresetDeleteResultMessage = (function (_super) {
    __extends(IdolsPresetDeleteResultMessage, _super);
    function IdolsPresetDeleteResultMessage() {
        this.presetId = 0;
        this.code = 2;
        _super.call(this);
    }
    IdolsPresetDeleteResultMessage.prototype.getMessageId = function () {
        return IdolsPresetDeleteResultMessage.ID;
    };
    IdolsPresetDeleteResultMessage.prototype.reset = function () {
        this.presetId = 0;
        this.code = 2;
    };
    IdolsPresetDeleteResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolsPresetDeleteResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolsPresetDeleteResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolsPresetDeleteResultMessage(param1);
    };
    IdolsPresetDeleteResultMessage.prototype.serializeAs_IdolsPresetDeleteResultMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        param1.writeByte(this.code);
    };
    IdolsPresetDeleteResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolsPresetDeleteResultMessage(param1);
    };
    IdolsPresetDeleteResultMessage.prototype.deserializeAs_IdolsPresetDeleteResultMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of IdolsPresetDeleteResultMessage.presetId.');
        }
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error('Forbidden value (' + this.code + ') on element of IdolsPresetDeleteResultMessage.code.');
        }
    };
    IdolsPresetDeleteResultMessage.ID = 6605;
    return IdolsPresetDeleteResultMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolsPresetDeleteResultMessage;
