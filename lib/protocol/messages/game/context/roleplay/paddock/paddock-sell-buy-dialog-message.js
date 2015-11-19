/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockSellBuyDialogMessage = (function (_super) {
    __extends(PaddockSellBuyDialogMessage, _super);
    function PaddockSellBuyDialogMessage() {
        this.bsell = false;
        this.ownerId = 0;
        this.price = 0;
        _super.call(this);
    }
    PaddockSellBuyDialogMessage.prototype.getMessageId = function () {
        return PaddockSellBuyDialogMessage.ID;
    };
    PaddockSellBuyDialogMessage.prototype.reset = function () {
        this.bsell = false;
        this.ownerId = 0;
        this.price = 0;
    };
    PaddockSellBuyDialogMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PaddockSellBuyDialogMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PaddockSellBuyDialogMessage.prototype.serialize = function (param1) {
        this.serializeAs_PaddockSellBuyDialogMessage(param1);
    };
    PaddockSellBuyDialogMessage.prototype.serializeAs_PaddockSellBuyDialogMessage = function (param1) {
        param1.writeBoolean(this.bsell);
        if (this.ownerId < 0) {
            throw new Error('Forbidden value (' + this.ownerId + ') on element ownerId.');
        }
        param1.writeVarInt(this.ownerId);
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);
    };
    PaddockSellBuyDialogMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockSellBuyDialogMessage(param1);
    };
    PaddockSellBuyDialogMessage.prototype.deserializeAs_PaddockSellBuyDialogMessage = function (param1) {
        this.bsell = param1.readBoolean();
        this.ownerId = param1.readVarUhInt();
        if (this.ownerId < 0) {
            throw new Error('Forbidden value (' + this.ownerId + ') on element of PaddockSellBuyDialogMessage.ownerId.');
        }
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of PaddockSellBuyDialogMessage.price.');
        }
    };
    PaddockSellBuyDialogMessage.ID = 6018;
    return PaddockSellBuyDialogMessage;
})(network_message_1.NetworkMessage);
module.exports = PaddockSellBuyDialogMessage;
