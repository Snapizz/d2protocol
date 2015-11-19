/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockToSellListRequestMessage = (function (_super) {
    __extends(PaddockToSellListRequestMessage, _super);
    function PaddockToSellListRequestMessage() {
        this.pageIndex = 0;
        _super.call(this);
    }
    PaddockToSellListRequestMessage.prototype.getMessageId = function () {
        return PaddockToSellListRequestMessage.ID;
    };
    PaddockToSellListRequestMessage.prototype.reset = function () {
        this.pageIndex = 0;
    };
    PaddockToSellListRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PaddockToSellListRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PaddockToSellListRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PaddockToSellListRequestMessage(param1);
    };
    PaddockToSellListRequestMessage.prototype.serializeAs_PaddockToSellListRequestMessage = function (param1) {
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element pageIndex.');
        }
        param1.writeVarShort(this.pageIndex);
    };
    PaddockToSellListRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockToSellListRequestMessage(param1);
    };
    PaddockToSellListRequestMessage.prototype.deserializeAs_PaddockToSellListRequestMessage = function (param1) {
        this.pageIndex = param1.readVarUhShort();
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element of PaddockToSellListRequestMessage.pageIndex.');
        }
    };
    PaddockToSellListRequestMessage.ID = 6141;
    return PaddockToSellListRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PaddockToSellListRequestMessage;
