/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MountXpRatioMessage = (function (_super) {
    __extends(MountXpRatioMessage, _super);
    function MountXpRatioMessage() {
        this.ratio = 0;
        _super.call(this);
    }
    MountXpRatioMessage.prototype.getMessageId = function () {
        return MountXpRatioMessage.ID;
    };
    MountXpRatioMessage.prototype.reset = function () {
        this.ratio = 0;
    };
    MountXpRatioMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MountXpRatioMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MountXpRatioMessage.prototype.serialize = function (param1) {
        this.serializeAs_MountXpRatioMessage(param1);
    };
    MountXpRatioMessage.prototype.serializeAs_MountXpRatioMessage = function (param1) {
        if (this.ratio < 0) {
            throw new Error('Forbidden value (' + this.ratio + ') on element ratio.');
        }
        param1.writeByte(this.ratio);
    };
    MountXpRatioMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MountXpRatioMessage(param1);
    };
    MountXpRatioMessage.prototype.deserializeAs_MountXpRatioMessage = function (param1) {
        this.ratio = param1.readByte();
        if (this.ratio < 0) {
            throw new Error('Forbidden value (' + this.ratio + ') on element of MountXpRatioMessage.ratio.');
        }
    };
    MountXpRatioMessage.ID = 5970;
    return MountXpRatioMessage;
})(network_message_1.NetworkMessage);
module.exports = MountXpRatioMessage;
