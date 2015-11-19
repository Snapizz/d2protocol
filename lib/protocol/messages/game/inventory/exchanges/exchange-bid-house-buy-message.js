/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseBuyMessage = (function (_super) {
    __extends(ExchangeBidHouseBuyMessage, _super);
    function ExchangeBidHouseBuyMessage() {
        this.uid = 0;
        this.qty = 0;
        this.price = 0;
        _super.call(this);
    }
    ExchangeBidHouseBuyMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseBuyMessage.ID;
    };
    ExchangeBidHouseBuyMessage.prototype.reset = function () {
        this.uid = 0;
        this.qty = 0;
        this.price = 0;
    };
    ExchangeBidHouseBuyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseBuyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseBuyMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseBuyMessage(param1);
    };
    ExchangeBidHouseBuyMessage.prototype.serializeAs_ExchangeBidHouseBuyMessage = function (param1) {
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);
        if (this.qty < 0) {
            throw new Error('Forbidden value (' + this.qty + ') on element qty.');
        }
        param1.writeVarInt(this.qty);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);
    };
    ExchangeBidHouseBuyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseBuyMessage(param1);
    };
    ExchangeBidHouseBuyMessage.prototype.deserializeAs_ExchangeBidHouseBuyMessage = function (param1) {
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of ExchangeBidHouseBuyMessage.uid.');
        }
        this.qty = param1.readVarUhInt();
        if (this.qty < 0) {
            throw new Error('Forbidden value (' + this.qty + ') on element of ExchangeBidHouseBuyMessage.qty.');
        }
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of ExchangeBidHouseBuyMessage.price.');
        }
    };
    ExchangeBidHouseBuyMessage.ID = 5804;
    return ExchangeBidHouseBuyMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseBuyMessage;
