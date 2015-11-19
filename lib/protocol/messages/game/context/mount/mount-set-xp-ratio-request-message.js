/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountSetXpRatioRequestMessage = (function (_super) {
    __extends(MountSetXpRatioRequestMessage, _super);
    function MountSetXpRatioRequestMessage() {
        this.xpRatio = 0;
        _super.call(this);
    }
    MountSetXpRatioRequestMessage.prototype.getMessageId = function () {
        return MountSetXpRatioRequestMessage.ID;
    };
    MountSetXpRatioRequestMessage.prototype.reset = function () {
        this.xpRatio = 0;
    };
    MountSetXpRatioRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountSetXpRatioRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountSetXpRatioRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountSetXpRatioRequestMessage(param1);
    };
    MountSetXpRatioRequestMessage.prototype.serializeAs_MountSetXpRatioRequestMessage = function (param1) {
        if (this.xpRatio < 0) {
            throw new Error('Forbidden value (' + this.xpRatio + ') on element xpRatio.');
        }
        param1.writeByte(this.xpRatio);
    };
    MountSetXpRatioRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountSetXpRatioRequestMessage(param1);
    };
    MountSetXpRatioRequestMessage.prototype.deserializeAs_MountSetXpRatioRequestMessage = function (param1) {
        this.xpRatio = param1.readByte();
        if (this.xpRatio < 0) {
            throw new Error('Forbidden value (' + this.xpRatio + ') on element of MountSetXpRatioRequestMessage.xpRatio.');
        }
    };
    MountSetXpRatioRequestMessage.ID = 5989;
    return MountSetXpRatioRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MountSetXpRatioRequestMessage;
