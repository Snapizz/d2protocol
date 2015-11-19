/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismFightJoinLeaveRequestMessage = (function (_super) {
    __extends(PrismFightJoinLeaveRequestMessage, _super);
    function PrismFightJoinLeaveRequestMessage() {
        this.subAreaId = 0;
        this.join = false;
        _super.call(this);
    }
    PrismFightJoinLeaveRequestMessage.prototype.getMessageId = function () {
        return PrismFightJoinLeaveRequestMessage.ID;
    };
    PrismFightJoinLeaveRequestMessage.prototype.reset = function () {
        this.subAreaId = 0;
        this.join = false;
    };
    PrismFightJoinLeaveRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismFightJoinLeaveRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismFightJoinLeaveRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightJoinLeaveRequestMessage(param1);
    };
    PrismFightJoinLeaveRequestMessage.prototype.serializeAs_PrismFightJoinLeaveRequestMessage = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeBoolean(this.join);
    };
    PrismFightJoinLeaveRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightJoinLeaveRequestMessage(param1);
    };
    PrismFightJoinLeaveRequestMessage.prototype.deserializeAs_PrismFightJoinLeaveRequestMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightJoinLeaveRequestMessage.subAreaId.');
        }
        this.join = param1.readBoolean();
    };
    PrismFightJoinLeaveRequestMessage.ID = 5843;
    return PrismFightJoinLeaveRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismFightJoinLeaveRequestMessage;
