/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockMoveItemRequestMessage = (function (_super) {
    __extends(PaddockMoveItemRequestMessage, _super);
    function PaddockMoveItemRequestMessage() {
        this.oldCellId = 0;
        this.newCellId = 0;
        _super.call(this);
    }
    PaddockMoveItemRequestMessage.prototype.getMessageId = function () {
        return PaddockMoveItemRequestMessage.ID;
    };
    PaddockMoveItemRequestMessage.prototype.reset = function () {
        this.oldCellId = 0;
        this.newCellId = 0;
    };
    PaddockMoveItemRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PaddockMoveItemRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PaddockMoveItemRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PaddockMoveItemRequestMessage(param1);
    };
    PaddockMoveItemRequestMessage.prototype.serializeAs_PaddockMoveItemRequestMessage = function (param1) {
        if (this.oldCellId < 0 || this.oldCellId > 559) {
            throw new Error('Forbidden value (' + this.oldCellId + ') on element oldCellId.');
        }
        param1.writeVarShort(this.oldCellId);
        if (this.newCellId < 0 || this.newCellId > 559) {
            throw new Error('Forbidden value (' + this.newCellId + ') on element newCellId.');
        }
        param1.writeVarShort(this.newCellId);
    };
    PaddockMoveItemRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockMoveItemRequestMessage(param1);
    };
    PaddockMoveItemRequestMessage.prototype.deserializeAs_PaddockMoveItemRequestMessage = function (param1) {
        this.oldCellId = param1.readVarUhShort();
        if (this.oldCellId < 0 || this.oldCellId > 559) {
            throw new Error('Forbidden value (' + this.oldCellId + ') on element of PaddockMoveItemRequestMessage.oldCellId.');
        }
        this.newCellId = param1.readVarUhShort();
        if (this.newCellId < 0 || this.newCellId > 559) {
            throw new Error('Forbidden value (' + this.newCellId + ') on element of PaddockMoveItemRequestMessage.newCellId.');
        }
    };
    PaddockMoveItemRequestMessage.ID = 6052;
    return PaddockMoveItemRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PaddockMoveItemRequestMessage;
