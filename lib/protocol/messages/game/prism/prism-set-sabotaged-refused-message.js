/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismSetSabotagedRefusedMessage = (function (_super) {
    __extends(PrismSetSabotagedRefusedMessage, _super);
    function PrismSetSabotagedRefusedMessage() {
        this.subAreaId = 0;
        this.reason = 0;
        _super.call(this);
    }
    PrismSetSabotagedRefusedMessage.prototype.getMessageId = function () {
        return PrismSetSabotagedRefusedMessage.ID;
    };
    PrismSetSabotagedRefusedMessage.prototype.reset = function () {
        this.subAreaId = 0;
        this.reason = 0;
    };
    PrismSetSabotagedRefusedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismSetSabotagedRefusedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismSetSabotagedRefusedMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismSetSabotagedRefusedMessage(param1);
    };
    PrismSetSabotagedRefusedMessage.prototype.serializeAs_PrismSetSabotagedRefusedMessage = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeByte(this.reason);
    };
    PrismSetSabotagedRefusedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismSetSabotagedRefusedMessage(param1);
    };
    PrismSetSabotagedRefusedMessage.prototype.deserializeAs_PrismSetSabotagedRefusedMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSetSabotagedRefusedMessage.subAreaId.');
        }
        this.reason = param1.readByte();
    };
    PrismSetSabotagedRefusedMessage.ID = 6466;
    return PrismSetSabotagedRefusedMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismSetSabotagedRefusedMessage;
