/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseSoldMessage = (function (_super) {
    __extends(HouseSoldMessage, _super);
    function HouseSoldMessage() {
        this.houseId = 0;
        this.realPrice = 0;
        this.buyerName = '';
        _super.call(this);
    }
    HouseSoldMessage.prototype.getMessageId = function () {
        return HouseSoldMessage.ID;
    };
    HouseSoldMessage.prototype.reset = function () {
        this.houseId = 0;
        this.realPrice = 0;
        this.buyerName = '';
    };
    HouseSoldMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseSoldMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseSoldMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseSoldMessage(param1);
    };
    HouseSoldMessage.prototype.serializeAs_HouseSoldMessage = function (param1) {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element realPrice.');
        }
        param1.writeVarInt(this.realPrice);
        param1.writeUTF(this.buyerName);
    };
    HouseSoldMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseSoldMessage(param1);
    };
    HouseSoldMessage.prototype.deserializeAs_HouseSoldMessage = function (param1) {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseSoldMessage.houseId.');
        }
        this.realPrice = param1.readVarUhInt();
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element of HouseSoldMessage.realPrice.');
        }
        this.buyerName = param1.readUTF();
    };
    HouseSoldMessage.ID = 5737;
    return HouseSoldMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseSoldMessage;
