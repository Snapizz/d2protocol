/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LockableShowCodeDialogMessage = (function (_super) {
    __extends(LockableShowCodeDialogMessage, _super);
    function LockableShowCodeDialogMessage() {
        this.changeOrUse = false;
        this.codeSize = 0;
        _super.call(this);
    }
    LockableShowCodeDialogMessage.prototype.getMessageId = function () {
        return LockableShowCodeDialogMessage.ID;
    };
    LockableShowCodeDialogMessage.prototype.reset = function () {
        this.changeOrUse = false;
        this.codeSize = 0;
    };
    LockableShowCodeDialogMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LockableShowCodeDialogMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LockableShowCodeDialogMessage.prototype.serialize = function (param1) {
        this.serializeAs_LockableShowCodeDialogMessage(param1);
    };
    LockableShowCodeDialogMessage.prototype.serializeAs_LockableShowCodeDialogMessage = function (param1) {
        param1.writeBoolean(this.changeOrUse);
        if (this.codeSize < 0) {
            throw new Error('Forbidden value (' + this.codeSize + ') on element codeSize.');
        }
        param1.writeByte(this.codeSize);
    };
    LockableShowCodeDialogMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LockableShowCodeDialogMessage(param1);
    };
    LockableShowCodeDialogMessage.prototype.deserializeAs_LockableShowCodeDialogMessage = function (param1) {
        this.changeOrUse = param1.readBoolean();
        this.codeSize = param1.readByte();
        if (this.codeSize < 0) {
            throw new Error('Forbidden value (' + this.codeSize + ') on element of LockableShowCodeDialogMessage.codeSize.');
        }
    };
    LockableShowCodeDialogMessage.ID = 5740;
    return LockableShowCodeDialogMessage;
})(network_message_1.NetworkMessage);
module.exports = LockableShowCodeDialogMessage;
