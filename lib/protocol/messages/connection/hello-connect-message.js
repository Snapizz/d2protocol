/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HelloConnectMessage = (function (_super) {
    __extends(HelloConnectMessage, _super);
    function HelloConnectMessage() {
        this.salt = '';
        this.key = [];
        _super.call(this);
    }
    HelloConnectMessage.prototype.getMessageId = function () {
        return HelloConnectMessage.ID;
    };
    HelloConnectMessage.prototype.reset = function () {
        this.salt = '';
        this.key = [];
    };
    HelloConnectMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HelloConnectMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HelloConnectMessage.prototype.serialize = function (param1) {
        this.serializeAs_HelloConnectMessage(param1);
    };
    HelloConnectMessage.prototype.serializeAs_HelloConnectMessage = function (param1) {
        param1.writeUTF(this.salt);
        param1.writeVarInt(this.key.length);
        var _loc2_ = 0;
        while (_loc2_ < this.key.length) {
            param1.writeByte(this.key[_loc2_]);
            _loc2_++;
        }
    };
    HelloConnectMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HelloConnectMessage(param1);
    };
    HelloConnectMessage.prototype.deserializeAs_HelloConnectMessage = function (param1) {
        var _loc4_ = 0;
        this.salt = param1.readUTF();
        var _loc2_ = param1.readVarInt();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            this.key.push(_loc4_);
            _loc3_++;
        }
    };
    HelloConnectMessage.ID = 3;
    return HelloConnectMessage;
})(network_message_1.NetworkMessage);
module.exports = HelloConnectMessage;
