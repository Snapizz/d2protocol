/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var StartupActionsObjetAttributionMessage = (function (_super) {
    __extends(StartupActionsObjetAttributionMessage, _super);
    function StartupActionsObjetAttributionMessage() {
        this.actionId = 0;
        this.characterId = 0;
        _super.call(this);
    }
    StartupActionsObjetAttributionMessage.prototype.getMessageId = function () {
        return StartupActionsObjetAttributionMessage.ID;
    };
    StartupActionsObjetAttributionMessage.prototype.reset = function () {
        this.actionId = 0;
        this.characterId = 0;
    };
    StartupActionsObjetAttributionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    StartupActionsObjetAttributionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    StartupActionsObjetAttributionMessage.prototype.serialize = function (param1) {
        this.serializeAs_StartupActionsObjetAttributionMessage(param1);
    };
    StartupActionsObjetAttributionMessage.prototype.serializeAs_StartupActionsObjetAttributionMessage = function (param1) {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeInt(this.actionId);
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeInt(this.characterId);
    };
    StartupActionsObjetAttributionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_StartupActionsObjetAttributionMessage(param1);
    };
    StartupActionsObjetAttributionMessage.prototype.deserializeAs_StartupActionsObjetAttributionMessage = function (param1) {
        this.actionId = param1.readInt();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of StartupActionsObjetAttributionMessage.actionId.');
        }
        this.characterId = param1.readInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of StartupActionsObjetAttributionMessage.characterId.');
        }
    };
    StartupActionsObjetAttributionMessage.ID = 1303;
    return StartupActionsObjetAttributionMessage;
})(network_message_1.NetworkMessage);
module.exports = StartupActionsObjetAttributionMessage;
