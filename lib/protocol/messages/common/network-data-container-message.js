/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NetworkDataContainerMessage = (function (_super) {
    __extends(NetworkDataContainerMessage, _super);
    function NetworkDataContainerMessage() {
        this.content = new ByteArray();
        _super.call(this);
    }
    NetworkDataContainerMessage.prototype.getMessageId = function () {
        return NetworkDataContainerMessage.ID;
    };
    NetworkDataContainerMessage.prototype.reset = function () {
        this.content = new ByteArray();
    };
    NetworkDataContainerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NetworkDataContainerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NetworkDataContainerMessage.prototype.serialize = function (param1) {
        this.serializeAs_NetworkDataContainerMessage(param1);
    };
    NetworkDataContainerMessage.prototype.serializeAs_NetworkDataContainerMessage = function (param1) {
        param1.writeBytes(this.content);
        throw new Error('Not implemented');
    };
    NetworkDataContainerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NetworkDataContainerMessage(param1);
    };
    NetworkDataContainerMessage.prototype.deserializeAs_NetworkDataContainerMessage = function (param1) {
        var _loc2_ = param1.readVarInt();
        var _loc3_ = new ByteArray();
        param1.readBytes(_loc3_, 0, _loc2_);
        _loc3_.uncompress();
        this.content = _loc3_;
    };
    NetworkDataContainerMessage.ID = 2;
    return NetworkDataContainerMessage;
})(network_message_1.NetworkMessage);
module.exports = NetworkDataContainerMessage;
