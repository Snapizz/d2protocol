/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdolsPresetDeleteMessage = (function (_super) {
    __extends(IdolsPresetDeleteMessage, _super);
    function IdolsPresetDeleteMessage() {
        this.presetId = 0;
        _super.call(this);
    }
    IdolsPresetDeleteMessage.prototype.getMessageId = function () {
        return IdolsPresetDeleteMessage.ID;
    };
    IdolsPresetDeleteMessage.prototype.reset = function () {
        this.presetId = 0;
    };
    IdolsPresetDeleteMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolsPresetDeleteMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolsPresetDeleteMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolsPresetDeleteMessage(param1);
    };
    IdolsPresetDeleteMessage.prototype.serializeAs_IdolsPresetDeleteMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
    };
    IdolsPresetDeleteMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolsPresetDeleteMessage(param1);
    };
    IdolsPresetDeleteMessage.prototype.deserializeAs_IdolsPresetDeleteMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of IdolsPresetDeleteMessage.presetId.');
        }
    };
    IdolsPresetDeleteMessage.ID = 6602;
    return IdolsPresetDeleteMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolsPresetDeleteMessage;
