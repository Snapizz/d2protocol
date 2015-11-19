/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterCreationResultMessage = (function (_super) {
    __extends(CharacterCreationResultMessage, _super);
    function CharacterCreationResultMessage() {
        this.result = 1;
        _super.call(this);
    }
    CharacterCreationResultMessage.prototype.getMessageId = function () {
        return CharacterCreationResultMessage.ID;
    };
    CharacterCreationResultMessage.prototype.reset = function () {
        this.result = 1;
    };
    CharacterCreationResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterCreationResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterCreationResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterCreationResultMessage(param1);
    };
    CharacterCreationResultMessage.prototype.serializeAs_CharacterCreationResultMessage = function (param1) {
        param1.writeByte(this.result);
    };
    CharacterCreationResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterCreationResultMessage(param1);
    };
    CharacterCreationResultMessage.prototype.deserializeAs_CharacterCreationResultMessage = function (param1) {
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of CharacterCreationResultMessage.result.');
        }
    };
    CharacterCreationResultMessage.ID = 161;
    return CharacterCreationResultMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterCreationResultMessage;
