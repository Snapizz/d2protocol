/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ReloginTokenStatusMessage = (function (_super) {
    __extends(ReloginTokenStatusMessage, _super);
    function ReloginTokenStatusMessage() {
        this.validToken = false;
        this.ticket = [];
        _super.call(this);
    }
    ReloginTokenStatusMessage.prototype.getMessageId = function () {
        return ReloginTokenStatusMessage.ID;
    };
    ReloginTokenStatusMessage.prototype.reset = function () {
        this.validToken = false;
        this.ticket = [];
    };
    ReloginTokenStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ReloginTokenStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ReloginTokenStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_ReloginTokenStatusMessage(param1);
    };
    ReloginTokenStatusMessage.prototype.serializeAs_ReloginTokenStatusMessage = function (param1) {
        param1.writeBoolean(this.validToken);
        param1.writeVarInt(this.ticket.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ticket.length) {
            param1.writeByte(this.ticket[_loc2_]);
            _loc2_++;
        }
    };
    ReloginTokenStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ReloginTokenStatusMessage(param1);
    };
    ReloginTokenStatusMessage.prototype.deserializeAs_ReloginTokenStatusMessage = function (param1) {
        var _loc4_ = 0;
        this.validToken = param1.readBoolean();
        var _loc2_ = param1.readVarInt();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            this.ticket.push(_loc4_);
            _loc3_++;
        }
    };
    ReloginTokenStatusMessage.ID = 6539;
    return ReloginTokenStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = ReloginTokenStatusMessage;
