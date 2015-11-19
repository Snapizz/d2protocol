/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseToSellListRequestMessage = (function (_super) {
    __extends(HouseToSellListRequestMessage, _super);
    function HouseToSellListRequestMessage() {
        this.pageIndex = 0;
        _super.call(this);
    }
    HouseToSellListRequestMessage.prototype.getMessageId = function () {
        return HouseToSellListRequestMessage.ID;
    };
    HouseToSellListRequestMessage.prototype.reset = function () {
        this.pageIndex = 0;
    };
    HouseToSellListRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseToSellListRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseToSellListRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseToSellListRequestMessage(param1);
    };
    HouseToSellListRequestMessage.prototype.serializeAs_HouseToSellListRequestMessage = function (param1) {
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element pageIndex.');
        }
        param1.writeVarShort(this.pageIndex);
    };
    HouseToSellListRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseToSellListRequestMessage(param1);
    };
    HouseToSellListRequestMessage.prototype.deserializeAs_HouseToSellListRequestMessage = function (param1) {
        this.pageIndex = param1.readVarUhShort();
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element of HouseToSellListRequestMessage.pageIndex.');
        }
    };
    HouseToSellListRequestMessage.ID = 6139;
    return HouseToSellListRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseToSellListRequestMessage;
