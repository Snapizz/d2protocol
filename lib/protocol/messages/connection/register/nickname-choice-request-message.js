/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NicknameChoiceRequestMessage = (function (_super) {
    __extends(NicknameChoiceRequestMessage, _super);
    function NicknameChoiceRequestMessage() {
        this.nickname = '';
        _super.call(this);
    }
    NicknameChoiceRequestMessage.prototype.getMessageId = function () {
        return NicknameChoiceRequestMessage.ID;
    };
    NicknameChoiceRequestMessage.prototype.reset = function () {
        this.nickname = '';
    };
    NicknameChoiceRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NicknameChoiceRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NicknameChoiceRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_NicknameChoiceRequestMessage(param1);
    };
    NicknameChoiceRequestMessage.prototype.serializeAs_NicknameChoiceRequestMessage = function (param1) {
        param1.writeUTF(this.nickname);
    };
    NicknameChoiceRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NicknameChoiceRequestMessage(param1);
    };
    NicknameChoiceRequestMessage.prototype.deserializeAs_NicknameChoiceRequestMessage = function (param1) {
        this.nickname = param1.readUTF();
    };
    NicknameChoiceRequestMessage.ID = 5639;
    return NicknameChoiceRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = NicknameChoiceRequestMessage;
