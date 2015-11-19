/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterDeletionErrorMessage = (function (_super) {
    __extends(CharacterDeletionErrorMessage, _super);
    function CharacterDeletionErrorMessage() {
        this.reason = 1;
        _super.call(this);
    }
    CharacterDeletionErrorMessage.prototype.getMessageId = function () {
        return CharacterDeletionErrorMessage.ID;
    };
    CharacterDeletionErrorMessage.prototype.reset = function () {
        this.reason = 1;
    };
    CharacterDeletionErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterDeletionErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterDeletionErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterDeletionErrorMessage(param1);
    };
    CharacterDeletionErrorMessage.prototype.serializeAs_CharacterDeletionErrorMessage = function (param1) {
        param1.writeByte(this.reason);
    };
    CharacterDeletionErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterDeletionErrorMessage(param1);
    };
    CharacterDeletionErrorMessage.prototype.deserializeAs_CharacterDeletionErrorMessage = function (param1) {
        this.reason = param1.readByte();
        if (this.reason < 0) {
            throw new Error('Forbidden value (' + this.reason + ') on element of CharacterDeletionErrorMessage.reason.');
        }
    };
    CharacterDeletionErrorMessage.ID = 166;
    return CharacterDeletionErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterDeletionErrorMessage;
