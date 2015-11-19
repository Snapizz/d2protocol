/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectUseMessage = require('./object-use-message');
var ObjectUseOnCellMessage = (function (_super) {
    __extends(ObjectUseOnCellMessage, _super);
    function ObjectUseOnCellMessage() {
        this.cells = 0;
        _super.call(this);
    }
    ObjectUseOnCellMessage.prototype.getMessageId = function () {
        return ObjectUseOnCellMessage.ID;
    };
    ObjectUseOnCellMessage.prototype.reset = function () {
        this.cells = 0;
    };
    ObjectUseOnCellMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ObjectUseOnCellMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ObjectUseOnCellMessage.prototype.serialize = function (param1) {
        this.serializeAs_ObjectUseOnCellMessage(param1);
    };
    ObjectUseOnCellMessage.prototype.serializeAs_ObjectUseOnCellMessage = function (param1) {
        _super.prototype.serializeAs_ObjectUseMessage.call(this, param1);
        if (this.cells < 0 || this.cells > 559) {
            throw new Error('Forbidden value (' + this.cells + ') on element cells.');
        }
        param1.writeVarShort(this.cells);
    };
    ObjectUseOnCellMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectUseOnCellMessage(param1);
    };
    ObjectUseOnCellMessage.prototype.deserializeAs_ObjectUseOnCellMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.cells = param1.readVarUhShort();
        if (this.cells < 0 || this.cells > 559) {
            throw new Error('Forbidden value (' + this.cells + ') on element of ObjectUseOnCellMessage.cells.');
        }
    };
    ObjectUseOnCellMessage.ID = 3013;
    return ObjectUseOnCellMessage;
})(ObjectUseMessage);
module.exports = ObjectUseOnCellMessage;
