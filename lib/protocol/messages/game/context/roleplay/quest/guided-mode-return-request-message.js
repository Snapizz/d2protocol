/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuidedModeReturnRequestMessage = (function (_super) {
    __extends(GuidedModeReturnRequestMessage, _super);
    function GuidedModeReturnRequestMessage() {
        _super.call(this);
    }
    GuidedModeReturnRequestMessage.prototype.getMessageId = function () {
        return GuidedModeReturnRequestMessage.ID;
    };
    GuidedModeReturnRequestMessage.prototype.reset = function () {
    };
    GuidedModeReturnRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuidedModeReturnRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuidedModeReturnRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuidedModeReturnRequestMessage(param1);
    };
    GuidedModeReturnRequestMessage.prototype.serializeAs_GuidedModeReturnRequestMessage = function (param1) {
    };
    GuidedModeReturnRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuidedModeReturnRequestMessage(param1);
    };
    GuidedModeReturnRequestMessage.prototype.deserializeAs_GuidedModeReturnRequestMessage = function (param1) {
    };
    GuidedModeReturnRequestMessage.ID = 6088;
    return GuidedModeReturnRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuidedModeReturnRequestMessage;
