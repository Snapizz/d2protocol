/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AlreadyConnectedMessage = (function (_super) {
    __extends(AlreadyConnectedMessage, _super);
    function AlreadyConnectedMessage() {
        _super.call(this);
    }
    AlreadyConnectedMessage.prototype.getMessageId = function () {
        return AlreadyConnectedMessage.ID;
    };
    AlreadyConnectedMessage.prototype.reset = function () {
    };
    AlreadyConnectedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AlreadyConnectedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AlreadyConnectedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AlreadyConnectedMessage(param1);
    };
    AlreadyConnectedMessage.prototype.serializeAs_AlreadyConnectedMessage = function (param1) {
    };
    AlreadyConnectedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AlreadyConnectedMessage(param1);
    };
    AlreadyConnectedMessage.prototype.deserializeAs_AlreadyConnectedMessage = function (param1) {
    };
    AlreadyConnectedMessage.ID = 109;
    return AlreadyConnectedMessage;
})(network_message_1.NetworkMessage);
module.exports = AlreadyConnectedMessage;
