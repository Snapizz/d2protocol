/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockInformationsForSell = require('../../../../../types/game/paddock/paddock-informations-for-sell');
var PaddockToSellListMessage = (function (_super) {
    __extends(PaddockToSellListMessage, _super);
    function PaddockToSellListMessage() {
        this.pageIndex = 0;
        this.totalPage = 0;
        this.paddockList = [];
        _super.call(this);
    }
    PaddockToSellListMessage.prototype.getMessageId = function () {
        return PaddockToSellListMessage.ID;
    };
    PaddockToSellListMessage.prototype.reset = function () {
        this.pageIndex = 0;
        this.totalPage = 0;
        this.paddockList = [];
    };
    PaddockToSellListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PaddockToSellListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PaddockToSellListMessage.prototype.serialize = function (param1) {
        this.serializeAs_PaddockToSellListMessage(param1);
    };
    PaddockToSellListMessage.prototype.serializeAs_PaddockToSellListMessage = function (param1) {
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element pageIndex.');
        }
        param1.writeVarShort(this.pageIndex);
        if (this.totalPage < 0) {
            throw new Error('Forbidden value (' + this.totalPage + ') on element totalPage.');
        }
        param1.writeVarShort(this.totalPage);
        param1.writeShort(this.paddockList.length);
        var _loc2_ = 0;
        while (_loc2_ < this.paddockList.length) {
            (this.paddockList[_loc2_]).serializeAs_PaddockInformationsForSell(param1);
            _loc2_++;
        }
    };
    PaddockToSellListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockToSellListMessage(param1);
    };
    PaddockToSellListMessage.prototype.deserializeAs_PaddockToSellListMessage = function (param1) {
        var _loc4_ = null;
        this.pageIndex = param1.readVarUhShort();
        if (this.pageIndex < 0) {
            throw new Error('Forbidden value (' + this.pageIndex + ') on element of PaddockToSellListMessage.pageIndex.');
        }
        this.totalPage = param1.readVarUhShort();
        if (this.totalPage < 0) {
            throw new Error('Forbidden value (' + this.totalPage + ') on element of PaddockToSellListMessage.totalPage.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new PaddockInformationsForSell();
            _loc4_.deserialize(param1);
            this.paddockList.push(_loc4_);
            _loc3_++;
        }
    };
    PaddockToSellListMessage.ID = 6138;
    return PaddockToSellListMessage;
})(network_message_1.NetworkMessage);
module.exports = PaddockToSellListMessage;
