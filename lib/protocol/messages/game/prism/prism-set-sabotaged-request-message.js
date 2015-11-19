/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismSetSabotagedRequestMessage = (function (_super) {
    __extends(PrismSetSabotagedRequestMessage, _super);
    function PrismSetSabotagedRequestMessage() {
        this.subAreaId = 0;
        _super.call(this);
    }
    PrismSetSabotagedRequestMessage.prototype.getMessageId = function () {
        return PrismSetSabotagedRequestMessage.ID;
    };
    PrismSetSabotagedRequestMessage.prototype.reset = function () {
        this.subAreaId = 0;
    };
    PrismSetSabotagedRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismSetSabotagedRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismSetSabotagedRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismSetSabotagedRequestMessage(param1);
    };
    PrismSetSabotagedRequestMessage.prototype.serializeAs_PrismSetSabotagedRequestMessage = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
    };
    PrismSetSabotagedRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismSetSabotagedRequestMessage(param1);
    };
    PrismSetSabotagedRequestMessage.prototype.deserializeAs_PrismSetSabotagedRequestMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSetSabotagedRequestMessage.subAreaId.');
        }
    };
    PrismSetSabotagedRequestMessage.ID = 6468;
    return PrismSetSabotagedRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismSetSabotagedRequestMessage;
