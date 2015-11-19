/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseBuyResultMessage = (function (_super) {
    __extends(HouseBuyResultMessage, _super);
    function HouseBuyResultMessage() {
        this.houseId = 0;
        this.bought = false;
        this.realPrice = 0;
        _super.call(this);
    }
    HouseBuyResultMessage.prototype.getMessageId = function () {
        return HouseBuyResultMessage.ID;
    };
    HouseBuyResultMessage.prototype.reset = function () {
        this.houseId = 0;
        this.bought = false;
        this.realPrice = 0;
    };
    HouseBuyResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseBuyResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseBuyResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseBuyResultMessage(param1);
    };
    HouseBuyResultMessage.prototype.serializeAs_HouseBuyResultMessage = function (param1) {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        param1.writeBoolean(this.bought);
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element realPrice.');
        }
        param1.writeVarInt(this.realPrice);
    };
    HouseBuyResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseBuyResultMessage(param1);
    };
    HouseBuyResultMessage.prototype.deserializeAs_HouseBuyResultMessage = function (param1) {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseBuyResultMessage.houseId.');
        }
        this.bought = param1.readBoolean();
        this.realPrice = param1.readVarUhInt();
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element of HouseBuyResultMessage.realPrice.');
        }
    };
    HouseBuyResultMessage.ID = 5735;
    return HouseBuyResultMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseBuyResultMessage;
