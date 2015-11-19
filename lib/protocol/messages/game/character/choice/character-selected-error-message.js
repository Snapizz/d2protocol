/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterSelectedErrorMessage = (function (_super) {
    __extends(CharacterSelectedErrorMessage, _super);
    function CharacterSelectedErrorMessage() {
        _super.call(this);
    }
    CharacterSelectedErrorMessage.prototype.getMessageId = function () {
        return CharacterSelectedErrorMessage.ID;
    };
    CharacterSelectedErrorMessage.prototype.reset = function () {
    };
    CharacterSelectedErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterSelectedErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterSelectedErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterSelectedErrorMessage(param1);
    };
    CharacterSelectedErrorMessage.prototype.serializeAs_CharacterSelectedErrorMessage = function (param1) {
    };
    CharacterSelectedErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterSelectedErrorMessage(param1);
    };
    CharacterSelectedErrorMessage.prototype.deserializeAs_CharacterSelectedErrorMessage = function (param1) {
    };
    CharacterSelectedErrorMessage.ID = 5836;
    return CharacterSelectedErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterSelectedErrorMessage;
