/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ShowCellMessage = (function (_super) {
    __extends(ShowCellMessage, _super);
    function ShowCellMessage() {
        this.sourceId = 0;
        this.cellId = 0;
        _super.call(this);
    }
    ShowCellMessage.prototype.getMessageId = function () {
        return ShowCellMessage.ID;
    };
    ShowCellMessage.prototype.reset = function () {
        this.sourceId = 0;
        this.cellId = 0;
    };
    ShowCellMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ShowCellMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ShowCellMessage.prototype.serialize = function (param1) {
        this.serializeAs_ShowCellMessage(param1);
    };
    ShowCellMessage.prototype.serializeAs_ShowCellMessage = function (param1) {
        param1.writeInt(this.sourceId);
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeVarShort(this.cellId);
    };
    ShowCellMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ShowCellMessage(param1);
    };
    ShowCellMessage.prototype.deserializeAs_ShowCellMessage = function (param1) {
        this.sourceId = param1.readInt();
        this.cellId = param1.readVarUhShort();
        if (this.cellId < 0 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of ShowCellMessage.cellId.');
        }
    };
    ShowCellMessage.ID = 5612;
    return ShowCellMessage;
})(network_message_1.NetworkMessage);
module.exports = ShowCellMessage;
