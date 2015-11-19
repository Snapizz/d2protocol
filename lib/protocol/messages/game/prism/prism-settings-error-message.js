/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismSettingsErrorMessage = (function (_super) {
    __extends(PrismSettingsErrorMessage, _super);
    function PrismSettingsErrorMessage() {
        _super.call(this);
    }
    PrismSettingsErrorMessage.prototype.getMessageId = function () {
        return PrismSettingsErrorMessage.ID;
    };
    PrismSettingsErrorMessage.prototype.reset = function () {
    };
    PrismSettingsErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismSettingsErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismSettingsErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismSettingsErrorMessage(param1);
    };
    PrismSettingsErrorMessage.prototype.serializeAs_PrismSettingsErrorMessage = function (param1) {
    };
    PrismSettingsErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismSettingsErrorMessage(param1);
    };
    PrismSettingsErrorMessage.prototype.deserializeAs_PrismSettingsErrorMessage = function (param1) {
    };
    PrismSettingsErrorMessage.ID = 6442;
    return PrismSettingsErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismSettingsErrorMessage;
