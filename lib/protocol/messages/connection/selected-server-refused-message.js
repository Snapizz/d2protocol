/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SelectedServerRefusedMessage = (function (_super) {
    __extends(SelectedServerRefusedMessage, _super);
    function SelectedServerRefusedMessage() {
        this.serverId = 0;
        this.error = 1;
        this.serverStatus = 1;
        _super.call(this);
    }
    SelectedServerRefusedMessage.prototype.getMessageId = function () {
        return SelectedServerRefusedMessage.ID;
    };
    SelectedServerRefusedMessage.prototype.reset = function () {
        this.serverId = 0;
        this.error = 1;
        this.serverStatus = 1;
    };
    SelectedServerRefusedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SelectedServerRefusedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SelectedServerRefusedMessage.prototype.serialize = function (param1) {
        this.serializeAs_SelectedServerRefusedMessage(param1);
    };
    SelectedServerRefusedMessage.prototype.serializeAs_SelectedServerRefusedMessage = function (param1) {
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
        }
        param1.writeVarShort(this.serverId);
        param1.writeByte(this.error);
        param1.writeByte(this.serverStatus);
    };
    SelectedServerRefusedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SelectedServerRefusedMessage(param1);
    };
    SelectedServerRefusedMessage.prototype.deserializeAs_SelectedServerRefusedMessage = function (param1) {
        this.serverId = param1.readVarUhShort();
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element of SelectedServerRefusedMessage.serverId.');
        }
        this.error = param1.readByte();
        if (this.error < 0) {
            throw new Error('Forbidden value (' + this.error + ') on element of SelectedServerRefusedMessage.error.');
        }
        this.serverStatus = param1.readByte();
        if (this.serverStatus < 0) {
            throw new Error('Forbidden value (' + this.serverStatus + ') on element of SelectedServerRefusedMessage.serverStatus.');
        }
    };
    SelectedServerRefusedMessage.ID = 41;
    return SelectedServerRefusedMessage;
})(network_message_1.NetworkMessage);
module.exports = SelectedServerRefusedMessage;
