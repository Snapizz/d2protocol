/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismSettingsRequestMessage = (function (_super) {
    __extends(PrismSettingsRequestMessage, _super);
    function PrismSettingsRequestMessage() {
        this.subAreaId = 0;
        this.startDefenseTime = 0;
        _super.call(this);
    }
    PrismSettingsRequestMessage.prototype.getMessageId = function () {
        return PrismSettingsRequestMessage.ID;
    };
    PrismSettingsRequestMessage.prototype.reset = function () {
        this.subAreaId = 0;
        this.startDefenseTime = 0;
    };
    PrismSettingsRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismSettingsRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismSettingsRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismSettingsRequestMessage(param1);
    };
    PrismSettingsRequestMessage.prototype.serializeAs_PrismSettingsRequestMessage = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.startDefenseTime < 0) {
            throw new Error('Forbidden value (' + this.startDefenseTime + ') on element startDefenseTime.');
        }
        param1.writeByte(this.startDefenseTime);
    };
    PrismSettingsRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismSettingsRequestMessage(param1);
    };
    PrismSettingsRequestMessage.prototype.deserializeAs_PrismSettingsRequestMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSettingsRequestMessage.subAreaId.');
        }
        this.startDefenseTime = param1.readByte();
        if (this.startDefenseTime < 0) {
            throw new Error('Forbidden value (' + this.startDefenseTime + ') on element of PrismSettingsRequestMessage.startDefenseTime.');
        }
    };
    PrismSettingsRequestMessage.ID = 6437;
    return PrismSettingsRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismSettingsRequestMessage;
