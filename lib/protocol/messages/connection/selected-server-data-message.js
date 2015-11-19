/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SelectedServerDataMessage = (function (_super) {
    __extends(SelectedServerDataMessage, _super);
    function SelectedServerDataMessage() {
        this.serverId = 0;
        this.address = '';
        this.port = 0;
        this.canCreateNewCharacter = false;
        this.ticket = [];
        _super.call(this);
    }
    SelectedServerDataMessage.prototype.getMessageId = function () {
        return SelectedServerDataMessage.ID;
    };
    SelectedServerDataMessage.prototype.reset = function () {
        this.serverId = 0;
        this.address = '';
        this.port = 0;
        this.canCreateNewCharacter = false;
        this.ticket = [];
    };
    SelectedServerDataMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SelectedServerDataMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SelectedServerDataMessage.prototype.serialize = function (param1) {
        this.serializeAs_SelectedServerDataMessage(param1);
    };
    SelectedServerDataMessage.prototype.serializeAs_SelectedServerDataMessage = function (param1) {
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
        }
        param1.writeVarShort(this.serverId);
        param1.writeUTF(this.address);
        if (this.port < 0 || this.port > 65535) {
            throw new Error('Forbidden value (' + this.port + ') on element port.');
        }
        param1.writeShort(this.port);
        param1.writeBoolean(this.canCreateNewCharacter);
        param1.writeVarInt(this.ticket.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ticket.length) {
            param1.writeByte(this.ticket[_loc2_]);
            _loc2_++;
        }
    };
    SelectedServerDataMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SelectedServerDataMessage(param1);
    };
    SelectedServerDataMessage.prototype.deserializeAs_SelectedServerDataMessage = function (param1) {
        var _loc4_ = 0;
        this.serverId = param1.readVarUhShort();
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element of SelectedServerDataMessage.serverId.');
        }
        this.address = param1.readUTF();
        this.port = param1.readUnsignedShort();
        if (this.port < 0 || this.port > 65535) {
            throw new Error('Forbidden value (' + this.port + ') on element of SelectedServerDataMessage.port.');
        }
        this.canCreateNewCharacter = param1.readBoolean();
        var _loc2_ = param1.readVarInt();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            this.ticket.push(_loc4_);
            _loc3_++;
        }
    };
    SelectedServerDataMessage.ID = 42;
    return SelectedServerDataMessage;
})(network_message_1.NetworkMessage);
module.exports = SelectedServerDataMessage;
