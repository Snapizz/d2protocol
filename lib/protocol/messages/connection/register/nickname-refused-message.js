/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NicknameRefusedMessage = (function (_super) {
    __extends(NicknameRefusedMessage, _super);
    function NicknameRefusedMessage() {
        this.reason = 99;
        _super.call(this);
    }
    NicknameRefusedMessage.prototype.getMessageId = function () {
        return NicknameRefusedMessage.ID;
    };
    NicknameRefusedMessage.prototype.reset = function () {
        this.reason = 99;
    };
    NicknameRefusedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NicknameRefusedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NicknameRefusedMessage.prototype.serialize = function (param1) {
        this.serializeAs_NicknameRefusedMessage(param1);
    };
    NicknameRefusedMessage.prototype.serializeAs_NicknameRefusedMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    NicknameRefusedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NicknameRefusedMessage(param1);
    };
    NicknameRefusedMessage.prototype.deserializeAs_NicknameRefusedMessage = function (param1) {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of NicknameRefusedMessage.reason.');
        }
    };
    NicknameRefusedMessage.ID = 5638;
    return NicknameRefusedMessage;
})(network_message_1.NetworkMessage);
module.exports = NicknameRefusedMessage;
