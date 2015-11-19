/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NicknameAcceptedMessage = (function (_super) {
    __extends(NicknameAcceptedMessage, _super);
    function NicknameAcceptedMessage() {
        _super.call(this);
    }
    NicknameAcceptedMessage.prototype.getMessageId = function () {
        return NicknameAcceptedMessage.ID;
    };
    NicknameAcceptedMessage.prototype.reset = function () {
    };
    NicknameAcceptedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NicknameAcceptedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NicknameAcceptedMessage.prototype.serialize = function (param1) {
        this.serializeAs_NicknameAcceptedMessage(param1);
    };
    NicknameAcceptedMessage.prototype.serializeAs_NicknameAcceptedMessage = function (param1) {
    };
    NicknameAcceptedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NicknameAcceptedMessage(param1);
    };
    NicknameAcceptedMessage.prototype.deserializeAs_NicknameAcceptedMessage = function (param1) {
    };
    NicknameAcceptedMessage.ID = 5641;
    return NicknameAcceptedMessage;
})(network_message_1.NetworkMessage);
module.exports = NicknameAcceptedMessage;
