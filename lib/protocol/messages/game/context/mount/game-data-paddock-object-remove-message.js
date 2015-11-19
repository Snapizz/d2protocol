/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameDataPaddockObjectRemoveMessage = (function (_super) {
    __extends(GameDataPaddockObjectRemoveMessage, _super);
    function GameDataPaddockObjectRemoveMessage() {
        this.cellId = 0;
        _super.call(this);
    }
    GameDataPaddockObjectRemoveMessage.prototype.getMessageId = function () {
        return GameDataPaddockObjectRemoveMessage.ID;
    };
    GameDataPaddockObjectRemoveMessage.prototype.reset = function () {
        this.cellId = 0;
    };
    GameDataPaddockObjectRemoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameDataPaddockObjectRemoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameDataPaddockObjectRemoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameDataPaddockObjectRemoveMessage(param1);
    };
    GameDataPaddockObjectRemoveMessage.prototype.serializeAs_GameDataPaddockObjectRemoveMessage = function (param1) {
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
    };
    GameDataPaddockObjectRemoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameDataPaddockObjectRemoveMessage(param1);
    };
    GameDataPaddockObjectRemoveMessage.prototype.deserializeAs_GameDataPaddockObjectRemoveMessage = function (param1) {
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of GameDataPaddockObjectRemoveMessage.cellId.');
        }
    };
    GameDataPaddockObjectRemoveMessage.ID = 5993;
    return GameDataPaddockObjectRemoveMessage;
})(network_message_1.NetworkMessage);
module.exports = GameDataPaddockObjectRemoveMessage;
