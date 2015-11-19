/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NicknameRegistrationMessage = (function (_super) {
    __extends(NicknameRegistrationMessage, _super);
    function NicknameRegistrationMessage() {
        _super.call(this);
    }
    NicknameRegistrationMessage.prototype.getMessageId = function () {
        return NicknameRegistrationMessage.ID;
    };
    NicknameRegistrationMessage.prototype.reset = function () {
    };
    NicknameRegistrationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NicknameRegistrationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NicknameRegistrationMessage.prototype.serialize = function (param1) {
        this.serializeAs_NicknameRegistrationMessage(param1);
    };
    NicknameRegistrationMessage.prototype.serializeAs_NicknameRegistrationMessage = function (param1) {
    };
    NicknameRegistrationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NicknameRegistrationMessage(param1);
    };
    NicknameRegistrationMessage.prototype.deserializeAs_NicknameRegistrationMessage = function (param1) {
    };
    NicknameRegistrationMessage.ID = 5640;
    return NicknameRegistrationMessage;
})(network_message_1.NetworkMessage);
module.exports = NicknameRegistrationMessage;
