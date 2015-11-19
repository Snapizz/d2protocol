/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PauseDialogMessage = (function (_super) {
    __extends(PauseDialogMessage, _super);
    function PauseDialogMessage() {
        this.dialogType = 0;
        _super.call(this);
    }
    PauseDialogMessage.prototype.getMessageId = function () {
        return PauseDialogMessage.ID;
    };
    PauseDialogMessage.prototype.reset = function () {
        this.dialogType = 0;
    };
    PauseDialogMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PauseDialogMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PauseDialogMessage.prototype.serialize = function (param1) {
        this.serializeAs_PauseDialogMessage(param1);
    };
    PauseDialogMessage.prototype.serializeAs_PauseDialogMessage = function (param1) {
        param1.writeByte(this.dialogType);
    };
    PauseDialogMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PauseDialogMessage(param1);
    };
    PauseDialogMessage.prototype.deserializeAs_PauseDialogMessage = function (param1) {
        this.dialogType = param1.readByte();
        if (this.dialogType < 0) {
            throw new Error('Forbidden value (' + this.dialogType + ') on element of PauseDialogMessage.dialogType.');
        }
    };
    PauseDialogMessage.ID = 6012;
    return PauseDialogMessage;
})(network_message_1.NetworkMessage);
module.exports = PauseDialogMessage;
