/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayArenaSwitchToFightServerMessage = (function (_super) {
    __extends(GameRolePlayArenaSwitchToFightServerMessage, _super);
    function GameRolePlayArenaSwitchToFightServerMessage() {
        this.address = '';
        this.port = 0;
        this.ticket = [];
        _super.call(this);
    }
    GameRolePlayArenaSwitchToFightServerMessage.prototype.getMessageId = function () {
        return GameRolePlayArenaSwitchToFightServerMessage.ID;
    };
    GameRolePlayArenaSwitchToFightServerMessage.prototype.reset = function () {
        this.address = '';
        this.port = 0;
        this.ticket = [];
    };
    GameRolePlayArenaSwitchToFightServerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayArenaSwitchToFightServerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayArenaSwitchToFightServerMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayArenaSwitchToFightServerMessage(param1);
    };
    GameRolePlayArenaSwitchToFightServerMessage.prototype.serializeAs_GameRolePlayArenaSwitchToFightServerMessage = function (param1) {
        param1.writeUTF(this.address);
        if (this.port < 0 || this.port > 65535) {
            throw new Error('Forbidden value (' + this.port + ') on element port.');
        }
        param1.writeShort(this.port);
        param1.writeVarInt(this.ticket.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ticket.length) {
            param1.writeByte(this.ticket[_loc2_]);
            _loc2_++;
        }
    };
    GameRolePlayArenaSwitchToFightServerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayArenaSwitchToFightServerMessage(param1);
    };
    GameRolePlayArenaSwitchToFightServerMessage.prototype.deserializeAs_GameRolePlayArenaSwitchToFightServerMessage = function (param1) {
        var _loc4_ = 0;
        this.address = param1.readUTF();
        this.port = param1.readUnsignedShort();
        if (this.port < 0 || this.port > 65535) {
            throw new Error('Forbidden value (' + this.port + ') on element of GameRolePlayArenaSwitchToFightServerMessage.port.');
        }
        var _loc2_ = param1.readVarInt();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            this.ticket.push(_loc4_);
            _loc3_++;
        }
    };
    GameRolePlayArenaSwitchToFightServerMessage.ID = 6575;
    return GameRolePlayArenaSwitchToFightServerMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayArenaSwitchToFightServerMessage;
