/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterSelectedForceReadyMessage = (function (_super) {
    __extends(CharacterSelectedForceReadyMessage, _super);
    function CharacterSelectedForceReadyMessage() {
        _super.call(this);
    }
    CharacterSelectedForceReadyMessage.prototype.getMessageId = function () {
        return CharacterSelectedForceReadyMessage.ID;
    };
    CharacterSelectedForceReadyMessage.prototype.reset = function () {
    };
    CharacterSelectedForceReadyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterSelectedForceReadyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterSelectedForceReadyMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterSelectedForceReadyMessage(param1);
    };
    CharacterSelectedForceReadyMessage.prototype.serializeAs_CharacterSelectedForceReadyMessage = function (param1) {
    };
    CharacterSelectedForceReadyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterSelectedForceReadyMessage(param1);
    };
    CharacterSelectedForceReadyMessage.prototype.deserializeAs_CharacterSelectedForceReadyMessage = function (param1) {
    };
    CharacterSelectedForceReadyMessage.ID = 6072;
    return CharacterSelectedForceReadyMessage;
})(network_message_1.NetworkMessage);
module.exports = CharacterSelectedForceReadyMessage;
