/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CharacterSelectionMessage = require('./character-selection-message');
var CharacterFirstSelectionMessage = (function (_super) {
    __extends(CharacterFirstSelectionMessage, _super);
    function CharacterFirstSelectionMessage() {
        this.doTutorial = false;
        _super.call(this);
    }
    CharacterFirstSelectionMessage.prototype.getMessageId = function () {
        return CharacterFirstSelectionMessage.ID;
    };
    CharacterFirstSelectionMessage.prototype.reset = function () {
        this.doTutorial = false;
    };
    CharacterFirstSelectionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharacterFirstSelectionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharacterFirstSelectionMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharacterFirstSelectionMessage(param1);
    };
    CharacterFirstSelectionMessage.prototype.serializeAs_CharacterFirstSelectionMessage = function (param1) {
        _super.prototype.serializeAs_CharacterSelectionMessage.call(this, param1);
        param1.writeBoolean(this.doTutorial);
    };
    CharacterFirstSelectionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharacterFirstSelectionMessage(param1);
    };
    CharacterFirstSelectionMessage.prototype.deserializeAs_CharacterFirstSelectionMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.doTutorial = param1.readBoolean();
    };
    CharacterFirstSelectionMessage.ID = 6084;
    return CharacterFirstSelectionMessage;
})(CharacterSelectionMessage);
module.exports = CharacterFirstSelectionMessage;
