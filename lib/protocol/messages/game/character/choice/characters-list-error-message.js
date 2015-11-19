/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharactersListErrorMessage = (function (_super) {
    __extends(CharactersListErrorMessage, _super);
    function CharactersListErrorMessage() {
        _super.call(this);
    }
    CharactersListErrorMessage.prototype.getMessageId = function () {
        return CharactersListErrorMessage.ID;
    };
    CharactersListErrorMessage.prototype.reset = function () {
    };
    CharactersListErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharactersListErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharactersListErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharactersListErrorMessage(param1);
    };
    CharactersListErrorMessage.prototype.serializeAs_CharactersListErrorMessage = function (param1) {
    };
    CharactersListErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharactersListErrorMessage(param1);
    };
    CharactersListErrorMessage.prototype.deserializeAs_CharactersListErrorMessage = function (param1) {
    };
    CharactersListErrorMessage.ID = 5545;
    return CharactersListErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = CharactersListErrorMessage;
