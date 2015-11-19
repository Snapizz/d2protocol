/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseToSellFilterMessage = (function (_super) {
    __extends(HouseToSellFilterMessage, _super);
    function HouseToSellFilterMessage() {
        this.areaId = 0;
        this.atLeastNbRoom = 0;
        this.atLeastNbChest = 0;
        this.skillRequested = 0;
        this.maxPrice = 0;
        _super.call(this);
    }
    HouseToSellFilterMessage.prototype.getMessageId = function () {
        return HouseToSellFilterMessage.ID;
    };
    HouseToSellFilterMessage.prototype.reset = function () {
        this.areaId = 0;
        this.atLeastNbRoom = 0;
        this.atLeastNbChest = 0;
        this.skillRequested = 0;
        this.maxPrice = 0;
    };
    HouseToSellFilterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseToSellFilterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseToSellFilterMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseToSellFilterMessage(param1);
    };
    HouseToSellFilterMessage.prototype.serializeAs_HouseToSellFilterMessage = function (param1) {
        param1.writeInt(this.areaId);
        if (this.atLeastNbRoom < 0) {
            throw new Error('Forbidden value (' + this.atLeastNbRoom + ') on element atLeastNbRoom.');
        }
        param1.writeByte(this.atLeastNbRoom);
        if (this.atLeastNbChest < 0) {
            throw new Error('Forbidden value (' + this.atLeastNbChest + ') on element atLeastNbChest.');
        }
        param1.writeByte(this.atLeastNbChest);
        if (this.skillRequested < 0) {
            throw new Error('Forbidden value (' + this.skillRequested + ') on element skillRequested.');
        }
        param1.writeVarShort(this.skillRequested);
        if (this.maxPrice < 0) {
            throw new Error('Forbidden value (' + this.maxPrice + ') on element maxPrice.');
        }
        param1.writeVarInt(this.maxPrice);
    };
    HouseToSellFilterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseToSellFilterMessage(param1);
    };
    HouseToSellFilterMessage.prototype.deserializeAs_HouseToSellFilterMessage = function (param1) {
        this.areaId = param1.readInt();
        this.atLeastNbRoom = param1.readByte();
        if (this.atLeastNbRoom < 0) {
            throw new Error('Forbidden value (' + this.atLeastNbRoom + ') on element of HouseToSellFilterMessage.atLeastNbRoom.');
        }
        this.atLeastNbChest = param1.readByte();
        if (this.atLeastNbChest < 0) {
            throw new Error('Forbidden value (' + this.atLeastNbChest + ') on element of HouseToSellFilterMessage.atLeastNbChest.');
        }
        this.skillRequested = param1.readVarUhShort();
        if (this.skillRequested < 0) {
            throw new Error('Forbidden value (' + this.skillRequested + ') on element of HouseToSellFilterMessage.skillRequested.');
        }
        this.maxPrice = param1.readVarUhInt();
        if (this.maxPrice < 0) {
            throw new Error('Forbidden value (' + this.maxPrice + ') on element of HouseToSellFilterMessage.maxPrice.');
        }
    };
    HouseToSellFilterMessage.ID = 6137;
    return HouseToSellFilterMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseToSellFilterMessage;
