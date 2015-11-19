/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseInformationsForSell = require('../../../../../types/game/house/house-informations-for-sell');
var HouseToSellListMessage = (function (_super) {
    __extends(HouseToSellListMessage, _super);
    function HouseToSellListMessage() {
        this.pageIndex = 0;
        this.totalPage = 0;
        this.houseList = [];
        _super.call(this);
    }
    HouseToSellListMessage.prototype.getMessageId = function () {
        return HouseToSellListMessage.ID;
    };
    HouseToSellListMessage.prototype.reset = function () {
        this.pageIndex = 0;
        this.totalPage = 0;
        this.houseList = [];
    };
    HouseToSellListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseToSellListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseToSellListMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseToSellListMessage(param1);
    };
    HouseToSellListMessage.prototype.serializeAs_HouseToSellListMessage = function (param1) {
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element pageIndex.');
        }
        param1.writeVarShort(this.pageIndex);
        if (this.totalPage < 0) {
            throw new Error('Forbidden value (' + this.totalPage + ') on element totalPage.');
        }
        param1.writeVarShort(this.totalPage);
        param1.writeShort(this.houseList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.houseList.length) {
            (this.houseList[_loc2_]).serializeAs_HouseInformationsForSell(param1);
            _loc2_++;
        }
    };
    HouseToSellListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseToSellListMessage(param1);
    };
    HouseToSellListMessage.prototype.deserializeAs_HouseToSellListMessage = function (param1) {
        var _loc4_ = null;
        this.pageIndex = param1.readVarUhShort();
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element of HouseToSellListMessage.pageIndex.');
        }
        this.totalPage = param1.readVarUhShort();
        if (this.totalPage < 0) {
            throw new Error('Forbidden value (' + this.totalPage + ') on element of HouseToSellListMessage.totalPage.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new HouseInformationsForSell();
            _loc4_.deserialize(param1);
            this.houseList.push(_loc4_);
            _loc3_++;
        }
    };
    HouseToSellListMessage.ID = 6140;
    return HouseToSellListMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseToSellListMessage;
