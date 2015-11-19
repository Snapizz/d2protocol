/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PurchasableDialogMessage = (function (_super) {
    __extends(PurchasableDialogMessage, _super);
    function PurchasableDialogMessage() {
        this.buyOrSell = false;
        this.purchasableId = 0;
        this.price = 0;
        _super.call(this);
    }
    PurchasableDialogMessage.prototype.getMessageId = function () {
        return PurchasableDialogMessage.ID;
    };
    PurchasableDialogMessage.prototype.reset = function () {
        this.buyOrSell = false;
        this.purchasableId = 0;
        this.price = 0;
    };
    PurchasableDialogMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PurchasableDialogMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PurchasableDialogMessage.prototype.serialize = function (param1) {
        this.serializeAs_PurchasableDialogMessage(param1);
    };
    PurchasableDialogMessage.prototype.serializeAs_PurchasableDialogMessage = function (param1) {
        param1.writeBoolean(this.buyOrSell);
        if (this.purchasableId < 0) {
            throw new Error('Forbidden value (' + this.purchasableId + ') on element purchasableId.');
        }
        param1.writeVarInt(this.purchasableId);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);
    };
    PurchasableDialogMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PurchasableDialogMessage(param1);
    };
    PurchasableDialogMessage.prototype.deserializeAs_PurchasableDialogMessage = function (param1) {
        this.buyOrSell = param1.readBoolean();
        this.purchasableId = param1.readVarUhInt();
        if (this.purchasableId < 0) {
            throw new Error('Forbidden value (' + this.purchasableId + ') on element of PurchasableDialogMessage.purchasableId.');
        }
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of PurchasableDialogMessage.price.');
        }
    };
    PurchasableDialogMessage.ID = 5739;
    return PurchasableDialogMessage;
})(network_message_1.NetworkMessage);
module.exports = PurchasableDialogMessage;
