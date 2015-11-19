/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StartupActionsAllAttributionMessage = (function (_super) {
    __extends(StartupActionsAllAttributionMessage, _super);
    function StartupActionsAllAttributionMessage() {
        this.characterId = 0;
        _super.call(this);
    }
    StartupActionsAllAttributionMessage.prototype.getMessageId = function () {
        return StartupActionsAllAttributionMessage.ID;
    };
    StartupActionsAllAttributionMessage.prototype.reset = function () {
        this.characterId = 0;
    };
    StartupActionsAllAttributionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StartupActionsAllAttributionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StartupActionsAllAttributionMessage.prototype.serialize = function (param1) {
        this.serializeAs_StartupActionsAllAttributionMessage(param1);
    };
    StartupActionsAllAttributionMessage.prototype.serializeAs_StartupActionsAllAttributionMessage = function (param1) {
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeInt(this.characterId);
    };
    StartupActionsAllAttributionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StartupActionsAllAttributionMessage(param1);
    };
    StartupActionsAllAttributionMessage.prototype.deserializeAs_StartupActionsAllAttributionMessage = function (param1) {
        this.characterId = param1.readInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of StartupActionsAllAttributionMessage.characterId.');
        }
    };
    StartupActionsAllAttributionMessage.ID = 6537;
    return StartupActionsAllAttributionMessage;
})(network_message_1.NetworkMessage);
module.exports = StartupActionsAllAttributionMessage;
