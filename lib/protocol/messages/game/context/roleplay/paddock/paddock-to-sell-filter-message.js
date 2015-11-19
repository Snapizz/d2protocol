/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockToSellFilterMessage = (function (_super) {
    __extends(PaddockToSellFilterMessage, _super);
    function PaddockToSellFilterMessage() {
        this.areaId = 0;
        this.atLeastNbMount = 0;
        this.atLeastNbMachine = 0;
        this.maxPrice = 0;
        _super.call(this);
    }
    PaddockToSellFilterMessage.prototype.getMessageId = function () {
        return PaddockToSellFilterMessage.ID;
    };
    PaddockToSellFilterMessage.prototype.reset = function () {
        this.areaId = 0;
        this.atLeastNbMount = 0;
        this.atLeastNbMachine = 0;
        this.maxPrice = 0;
    };
    PaddockToSellFilterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PaddockToSellFilterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PaddockToSellFilterMessage.prototype.serialize = function (param1) {
        this.serializeAs_PaddockToSellFilterMessage(param1);
    };
    PaddockToSellFilterMessage.prototype.serializeAs_PaddockToSellFilterMessage = function (param1) {
        param1.writeInt(this.areaId);
        param1.writeByte(this.atLeastNbMount);
        param1.writeByte(this.atLeastNbMachine);
        if (this.maxPrice < 0) {
            throw new Error('Forbidden value (' + this.maxPrice + ') on element maxPrice.');
        }
        param1.writeVarInt(this.maxPrice);
    };
    PaddockToSellFilterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockToSellFilterMessage(param1);
    };
    PaddockToSellFilterMessage.prototype.deserializeAs_PaddockToSellFilterMessage = function (param1) {
        this.areaId = param1.readInt();
        this.atLeastNbMount = param1.readByte();
        this.atLeastNbMachine = param1.readByte();
        this.maxPrice = param1.readVarUhInt();
        if (this.maxPrice < 0) {
            throw new Error('Forbidden value (' + this.maxPrice + ') on element of PaddockToSellFilterMessage.maxPrice.');
        }
    };
    PaddockToSellFilterMessage.ID = 6161;
    return PaddockToSellFilterMessage;
})(network_message_1.NetworkMessage);
module.exports = PaddockToSellFilterMessage;
