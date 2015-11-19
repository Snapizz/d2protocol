/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DecraftedItemStackInfo = require('../../../../types/game/context/roleplay/job/decrafted-item-stack-info');
var DecraftResultMessage = (function (_super) {
    __extends(DecraftResultMessage, _super);
    function DecraftResultMessage() {
        this.results = [];
        _super.call(this);
    }
    DecraftResultMessage.prototype.getMessageId = function () {
        return DecraftResultMessage.ID;
    };
    DecraftResultMessage.prototype.reset = function () {
        this.results = [];
    };
    DecraftResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DecraftResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DecraftResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_DecraftResultMessage(param1);
    };
    DecraftResultMessage.prototype.serializeAs_DecraftResultMessage = function (param1) {
        param1.writeShort(this.results.length);
        var _loc2_ = 0;
        while (_loc2_ < this.results.length) {
            (this.results[_loc2_]).serializeAs_DecraftedItemStackInfo(param1);
            _loc2_++;
        }
    };
    DecraftResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DecraftResultMessage(param1);
    };
    DecraftResultMessage.prototype.deserializeAs_DecraftResultMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new DecraftedItemStackInfo();
            _loc4_.deserialize(param1);
            this.results.push(_loc4_);
            _loc3_++;
        }
    };
    DecraftResultMessage.ID = 6569;
    return DecraftResultMessage;
})(network_message_1.NetworkMessage);
module.exports = DecraftResultMessage;
