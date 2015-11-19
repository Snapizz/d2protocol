/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterLoadingCompleteMessage = (function (_super) {
    __extends(CharacterLoadingCompleteMessage, _super);
    function CharacterLoadingCompleteMessage() {
        _super.call(this);
    }
    CharacterLoadingCompleteMessage.prototype.getMessageId = function () {
        return CharacterLoadingCompleteMessage.ID;
    };
    CharacterLoadingCompleteMessage.prototype.reset = function () {
    };
    CharacterLoadingCompleteMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterLoadingCompleteMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterLoadingCompleteMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterLoadingCompleteMessage(param1);
    };
    CharacterLoadingCompleteMessage.prototype.serializeAs_CharacterLoadingCompleteMessage = function (param1) {
    };
    CharacterLoadingCompleteMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterLoadingCompleteMessage(param1);
    };
    CharacterLoadingCompleteMessage.prototype.deserializeAs_CharacterLoadingCompleteMessage = function (param1) {
    };
    CharacterLoadingCompleteMessage.ID = 6471;
    return CharacterLoadingCompleteMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterLoadingCompleteMessage;
