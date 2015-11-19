/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockRemoveItemRequestMessage = (function (_super) {
    __extends(PaddockRemoveItemRequestMessage, _super);
    function PaddockRemoveItemRequestMessage() {
        this.cellId = 0;
        _super.call(this);
    }
    PaddockRemoveItemRequestMessage.prototype.getMessageId = function () {
        return PaddockRemoveItemRequestMessage.ID;
    };
    PaddockRemoveItemRequestMessage.prototype.reset = function () {
        this.cellId = 0;
    };
    PaddockRemoveItemRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PaddockRemoveItemRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PaddockRemoveItemRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PaddockRemoveItemRequestMessage(param1);
    };
    PaddockRemoveItemRequestMessage.prototype.serializeAs_PaddockRemoveItemRequestMessage = function (param1) {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
    };
    PaddockRemoveItemRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockRemoveItemRequestMessage(param1);
    };
    PaddockRemoveItemRequestMessage.prototype.deserializeAs_PaddockRemoveItemRequestMessage = function (param1) {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of PaddockRemoveItemRequestMessage.cellId.');
        }
    };
    PaddockRemoveItemRequestMessage.ID = 5958;
    return PaddockRemoveItemRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PaddockRemoveItemRequestMessage;
