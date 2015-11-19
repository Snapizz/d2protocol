/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterSelectionMessage = (function (_super) {
    __extends(CharacterSelectionMessage, _super);
    function CharacterSelectionMessage() {
        this.id = 0;
        _super.call(this);
    }
    CharacterSelectionMessage.prototype.getMessageId = function () {
        return CharacterSelectionMessage.ID;
    };
    CharacterSelectionMessage.prototype.reset = function () {
        this.id = 0;
    };
    CharacterSelectionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterSelectionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterSelectionMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterSelectionMessage(param1);
    };
    CharacterSelectionMessage.prototype.serializeAs_CharacterSelectionMessage = function (param1) {
        if (this.id < 1 || this.id > 2147483647) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeInt(this.id);
    };
    CharacterSelectionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterSelectionMessage(param1);
    };
    CharacterSelectionMessage.prototype.deserializeAs_CharacterSelectionMessage = function (param1) {
        this.id = param1.readInt();
        if (this.id < 1 || this.id > 2147483647) {
            throw new Error('Forbidden value (' + this.id + ') on element of CharacterSelectionMessage.id.');
        }
    };
    CharacterSelectionMessage.ID = 152;
    return CharacterSelectionMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterSelectionMessage;
