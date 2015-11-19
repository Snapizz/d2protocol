/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuidedModeQuitRequestMessage = (function (_super) {
    __extends(GuidedModeQuitRequestMessage, _super);
    function GuidedModeQuitRequestMessage() {
        _super.call(this);
    }
    GuidedModeQuitRequestMessage.prototype.getMessageId = function () {
        return GuidedModeQuitRequestMessage.ID;
    };
    GuidedModeQuitRequestMessage.prototype.reset = function () {
    };
    GuidedModeQuitRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuidedModeQuitRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuidedModeQuitRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuidedModeQuitRequestMessage(param1);
    };
    GuidedModeQuitRequestMessage.prototype.serializeAs_GuidedModeQuitRequestMessage = function (param1) {
    };
    GuidedModeQuitRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuidedModeQuitRequestMessage(param1);
    };
    GuidedModeQuitRequestMessage.prototype.deserializeAs_GuidedModeQuitRequestMessage = function (param1) {
    };
    GuidedModeQuitRequestMessage.ID = 6092;
    return GuidedModeQuitRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuidedModeQuitRequestMessage;
