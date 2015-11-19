/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CheckIntegrityMessage = (function (_super) {
    __extends(CheckIntegrityMessage, _super);
    function CheckIntegrityMessage() {
        this.data = [];
        _super.call(this);
    }
    CheckIntegrityMessage.prototype.getMessageId = function () {
        return CheckIntegrityMessage.ID;
    };
    CheckIntegrityMessage.prototype.reset = function () {
        this.data = [];
    };
    CheckIntegrityMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CheckIntegrityMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CheckIntegrityMessage.prototype.serialize = function (param1) {
        this.serializeAs_CheckIntegrityMessage(param1);
    };
    CheckIntegrityMessage.prototype.serializeAs_CheckIntegrityMessage = function (param1) {
        param1.writeVarInt(this.data.length);
        var _loc2_ = 0;
        while (_loc2_ < this.data.length) {
            param1.writeByte(this.data[_loc2_]);
            _loc2_++;
        }
    };
    CheckIntegrityMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CheckIntegrityMessage(param1);
    };
    CheckIntegrityMessage.prototype.deserializeAs_CheckIntegrityMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readVarInt();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            this.data.push(_loc4_);
            _loc3_++;
        }
    };
    CheckIntegrityMessage.ID = 6372;
    return CheckIntegrityMessage;
})(network_message_1.NetworkMessage);
module.exports = CheckIntegrityMessage;
