/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicCharactersListMessage = require('./basic-characters-list-message');
var CharactersListMessage = (function (_super) {
    __extends(CharactersListMessage, _super);
    function CharactersListMessage() {
        this.hasStartupActions = false;
        _super.call(this);
    }
    CharactersListMessage.prototype.getMessageId = function () {
        return CharactersListMessage.ID;
    };
    CharactersListMessage.prototype.reset = function () {
        this.hasStartupActions = false;
    };
    CharactersListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CharactersListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CharactersListMessage.prototype.serialize = function (param1) {
        this.serializeAs_CharactersListMessage(param1);
    };
    CharactersListMessage.prototype.serializeAs_CharactersListMessage = function (param1) {
        _super.prototype.serializeAs_BasicCharactersListMessage.call(this, param1);
        param1.writeBoolean(this.hasStartupActions);
    };
    CharactersListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CharactersListMessage(param1);
    };
    CharactersListMessage.prototype.deserializeAs_CharactersListMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.hasStartupActions = param1.readBoolean();
    };
    CharactersListMessage.ID = 151;
    return CharactersListMessage;
})(BasicCharactersListMessage);
module.exports = CharactersListMessage;
