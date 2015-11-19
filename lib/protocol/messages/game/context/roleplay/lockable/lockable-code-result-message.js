/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LockableCodeResultMessage = (function (_super) {
    __extends(LockableCodeResultMessage, _super);
    function LockableCodeResultMessage() {
        this.result = 0;
        _super.call(this);
    }
    LockableCodeResultMessage.prototype.getMessageId = function () {
        return LockableCodeResultMessage.ID;
    };
    LockableCodeResultMessage.prototype.reset = function () {
        this.result = 0;
    };
    LockableCodeResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LockableCodeResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LockableCodeResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_LockableCodeResultMessage(param1);
    };
    LockableCodeResultMessage.prototype.serializeAs_LockableCodeResultMessage = function (param1) {
        param1.writeByte(this.result);
    };
    LockableCodeResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LockableCodeResultMessage(param1);
    };
    LockableCodeResultMessage.prototype.deserializeAs_LockableCodeResultMessage = function (param1) {
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of LockableCodeResultMessage.result.');
        }
    };
    LockableCodeResultMessage.ID = 5672;
    return LockableCodeResultMessage;
})(network_message_1.NetworkMessage);
module.exports = LockableCodeResultMessage;
