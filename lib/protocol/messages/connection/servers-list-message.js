/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameServerInformations = require('../../types/connection/game-server-informations');
var ServersListMessage = (function (_super) {
    __extends(ServersListMessage, _super);
    function ServersListMessage() {
        this.servers = [];
        this.alreadyConnectedToServerId = 0;
        this.canCreateNewCharacter = false;
        _super.call(this);
    }
    ServersListMessage.prototype.getMessageId = function () {
        return ServersListMessage.ID;
    };
    ServersListMessage.prototype.reset = function () {
        this.servers = [];
        this.alreadyConnectedToServerId = 0;
        this.canCreateNewCharacter = false;
    };
    ServersListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ServersListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ServersListMessage.prototype.serialize = function (param1) {
        this.serializeAs_ServersListMessage(param1);
    };
    ServersListMessage.prototype.serializeAs_ServersListMessage = function (param1) {
        param1.writeShort(this.servers.length);
        var _loc2_ = 0;
        while (_loc2_ < this.servers.length) {
            (this.servers[_loc2_]).serializeAs_GameServerInformations(param1);
            _loc2_++;
        }
        if (this.alreadyConnectedToServerId < 0) {
            throw new Error('Forbidden value (' + this.alreadyConnectedToServerId + ') on element alreadyConnectedToServerId.');
        }
        param1.writeVarShort(this.alreadyConnectedToServerId);
        param1.writeBoolean(this.canCreateNewCharacter);
    };
    ServersListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ServersListMessage(param1);
    };
    ServersListMessage.prototype.deserializeAs_ServersListMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new GameServerInformations();
            _loc4_.deserialize(param1);
            this.servers.push(_loc4_);
            _loc3_++;
        }
        this.alreadyConnectedToServerId = param1.readVarUhShort();
        if (this.alreadyConnectedToServerId < 0) {
            throw new Error('Forbidden value (' + this.alreadyConnectedToServerId + ') on element of ServersListMessage.alreadyConnectedToServerId.');
        }
        this.canCreateNewCharacter = param1.readBoolean();
    };
    ServersListMessage.ID = 30;
    return ServersListMessage;
})(network_message_1.NetworkMessage);
module.exports = ServersListMessage;
