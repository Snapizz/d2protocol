/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var DebugInClientMessage = (function (_super) {
    __extends(DebugInClientMessage, _super);
    function DebugInClientMessage() {
        this.level = 0;
        this.message = '';
        _super.call(this);
    }
    DebugInClientMessage.prototype.getMessageId = function () {
        return DebugInClientMessage.ID;
    };
    DebugInClientMessage.prototype.reset = function () {
        this.level = 0;
        this.message = '';
    };
    DebugInClientMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    DebugInClientMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    DebugInClientMessage.prototype.serialize = function (param1) {
        this.serializeAs_DebugInClientMessage(param1);
    };
    DebugInClientMessage.prototype.serializeAs_DebugInClientMessage = function (param1) {
        param1.writeByte(this.level);
        param1.writeUTF(this.message);
    };
    DebugInClientMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_DebugInClientMessage(param1);
    };
    DebugInClientMessage.prototype.deserializeAs_DebugInClientMessage = function (param1) {
        this.level = param1.readByte();
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element of DebugInClientMessage.level.');
        }
        this.message = param1.readUTF();
    };
    DebugInClientMessage.ID = 6028;
    return DebugInClientMessage;
})(network_message_1.NetworkMessage);
module.exports = DebugInClientMessage;
