/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var KrosmasterFigure = require('../../../types/web/krosmaster/krosmaster-figure');
var KrosmasterInventoryMessage = (function (_super) {
    __extends(KrosmasterInventoryMessage, _super);
    function KrosmasterInventoryMessage() {
        this.figures = [];
        _super.call(this);
    }
    KrosmasterInventoryMessage.prototype.getMessageId = function () {
        return KrosmasterInventoryMessage.ID;
    };
    KrosmasterInventoryMessage.prototype.reset = function () {
        this.figures = [];
    };
    KrosmasterInventoryMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KrosmasterInventoryMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KrosmasterInventoryMessage.prototype.serialize = function (param1) {
        this.serializeAs_KrosmasterInventoryMessage(param1);
    };
    KrosmasterInventoryMessage.prototype.serializeAs_KrosmasterInventoryMessage = function (param1) {
        param1.writeShort(this.figures.length);
        var _loc2_ = 0;
        while (_loc2_ < this.figures.length) {
            (this.figures[_loc2_]).serializeAs_KrosmasterFigure(param1);
            _loc2_++;
        }
    };
    KrosmasterInventoryMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KrosmasterInventoryMessage(param1);
    };
    KrosmasterInventoryMessage.prototype.deserializeAs_KrosmasterInventoryMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new KrosmasterFigure();
            _loc4_.deserialize(param1);
            this.figures.push(_loc4_);
            _loc3_++;
        }
    };
    KrosmasterInventoryMessage.ID = 6350;
    return KrosmasterInventoryMessage;
})(network_message_1.NetworkMessage);
module.exports = KrosmasterInventoryMessage;
