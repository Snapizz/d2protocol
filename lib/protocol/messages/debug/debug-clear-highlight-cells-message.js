/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DebugClearHighlightCellsMessage = (function (_super) {
    __extends(DebugClearHighlightCellsMessage, _super);
    function DebugClearHighlightCellsMessage() {
        _super.call(this);
    }
    DebugClearHighlightCellsMessage.prototype.getMessageId = function () {
        return DebugClearHighlightCellsMessage.ID;
    };
    DebugClearHighlightCellsMessage.prototype.reset = function () {
    };
    DebugClearHighlightCellsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DebugClearHighlightCellsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DebugClearHighlightCellsMessage.prototype.serialize = function (param1) {
        this.serializeAs_DebugClearHighlightCellsMessage(param1);
    };
    DebugClearHighlightCellsMessage.prototype.serializeAs_DebugClearHighlightCellsMessage = function (param1) {
    };
    DebugClearHighlightCellsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DebugClearHighlightCellsMessage(param1);
    };
    DebugClearHighlightCellsMessage.prototype.deserializeAs_DebugClearHighlightCellsMessage = function (param1) {
    };
    DebugClearHighlightCellsMessage.ID = 2002;
    return DebugClearHighlightCellsMessage;
})(network_message_1.NetworkMessage);
module.exports = DebugClearHighlightCellsMessage;
