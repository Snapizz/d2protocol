/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var RawDataMessage = (function (_super) {
    __extends(RawDataMessage, _super);
    function RawDataMessage() {
        this.content = new ByteArray();
        _super.call(this);
    }
    RawDataMessage.prototype.getMessageId = function () {
        return RawDataMessage.ID;
    };
    RawDataMessage.prototype.reset = function () {
        this.content = new ByteArray();
    };
    RawDataMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    RawDataMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    RawDataMessage.prototype.serialize = function (param1) {
        this.serializeAs_RawDataMessage(param1);
    };
    RawDataMessage.prototype.serializeAs_RawDataMessage = function (param1) {
        param1.writeVarInt(this.content.length);
        var _loc2_ = 0;
        while (_loc2_ < this.content.length) {
            param1.writeByte(this.content.getArray()[_loc2_]);
            _loc2_++;
        }
    };
    RawDataMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_RawDataMessage(param1);
    };
    RawDataMessage.prototype.deserializeAs_RawDataMessage = function (param1) {
        var _loc2_ = param1.readVarInt();
        param1.readBytes(this.content, 0, _loc2_);
    };
    RawDataMessage.ID = 6253;
    return RawDataMessage;
})(network_message_1.NetworkMessage);
module.exports = RawDataMessage;
