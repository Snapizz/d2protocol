/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var IdolsPreset = require('../../../../types/game/inventory/preset/idols-preset');
var IdolsPresetUpdateMessage = (function (_super) {
    __extends(IdolsPresetUpdateMessage, _super);
    function IdolsPresetUpdateMessage() {
        this.idolsPreset = new IdolsPreset();
        _super.call(this);
    }
    IdolsPresetUpdateMessage.prototype.getMessageId = function () {
        return IdolsPresetUpdateMessage.ID;
    };
    IdolsPresetUpdateMessage.prototype.reset = function () {
        this.idolsPreset = new IdolsPreset();
    };
    IdolsPresetUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    IdolsPresetUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    IdolsPresetUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_IdolsPresetUpdateMessage(param1);
    };
    IdolsPresetUpdateMessage.prototype.serializeAs_IdolsPresetUpdateMessage = function (param1) {
        this.idolsPreset.serializeAs_IdolsPreset(param1);
    };
    IdolsPresetUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_IdolsPresetUpdateMessage(param1);
    };
    IdolsPresetUpdateMessage.prototype.deserializeAs_IdolsPresetUpdateMessage = function (param1) {
        this.idolsPreset = new IdolsPreset();
        this.idolsPreset.deserialize(param1);
    };
    IdolsPresetUpdateMessage.ID = 6606;
    return IdolsPresetUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = IdolsPresetUpdateMessage;
