/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DebugHighlightCellsMessage = (function (_super) {
    __extends(DebugHighlightCellsMessage, _super);
    function DebugHighlightCellsMessage() {
        this.color = 0;
        this.cells = [];
        _super.call(this);
    }
    DebugHighlightCellsMessage.prototype.getMessageId = function () {
        return DebugHighlightCellsMessage.ID;
    };
    DebugHighlightCellsMessage.prototype.reset = function () {
        this.color = 0;
        this.cells = [];
    };
    DebugHighlightCellsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DebugHighlightCellsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DebugHighlightCellsMessage.prototype.serialize = function (param1) {
        this.serializeAs_DebugHighlightCellsMessage(param1);
    };
    DebugHighlightCellsMessage.prototype.serializeAs_DebugHighlightCellsMessage = function (param1) {
        param1.writeInt(this.color);
        param1.writeShort(this.cells.length);
        var _loc2_ = 0;
        while (_loc2_ < this.cells.length) {
            if (this.cells[_loc2_] < 0 || this.cells[_loc2_] > 559) {
                throw new Error('Forbidden value (' + this.cells[_loc2_] + ') on element 2 (starting at 1) of cells.');
            }
            param1.writeVarShort(this.cells[_loc2_]);
            _loc2_++;
        }
    };
    DebugHighlightCellsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DebugHighlightCellsMessage(param1);
    };
    DebugHighlightCellsMessage.prototype.deserializeAs_DebugHighlightCellsMessage = function (param1) {
        var _loc4_ = 0;
        this.color = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarUhShort();
            if (_loc4_ < 0 || _loc4_ > 559) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of cells.');
            }
            this.cells.push(_loc4_);
            _loc3_++;
        }
    };
    DebugHighlightCellsMessage.ID = 2001;
    return DebugHighlightCellsMessage;
})(network_message_1.NetworkMessage);
module.exports = DebugHighlightCellsMessage;
