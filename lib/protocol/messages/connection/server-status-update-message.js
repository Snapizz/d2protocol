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
var ServerStatusUpdateMessage = (function (_super) {
    __extends(ServerStatusUpdateMessage, _super);
    function ServerStatusUpdateMessage() {
        this.server = new GameServerInformations();
        _super.call(this);
    }
    ServerStatusUpdateMessage.prototype.getMessageId = function () {
        return ServerStatusUpdateMessage.ID;
    };
    ServerStatusUpdateMessage.prototype.reset = function () {
        this.server = new GameServerInformations();
    };
    ServerStatusUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ServerStatusUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ServerStatusUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_ServerStatusUpdateMessage(param1);
    };
    ServerStatusUpdateMessage.prototype.serializeAs_ServerStatusUpdateMessage = function (param1) {
        this.server.serializeAs_GameServerInformations(param1);
    };
    ServerStatusUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ServerStatusUpdateMessage(param1);
    };
    ServerStatusUpdateMessage.prototype.deserializeAs_ServerStatusUpdateMessage = function (param1) {
        this.server = new GameServerInformations();
        this.server.deserialize(param1);
    };
    ServerStatusUpdateMessage.ID = 50;
    return ServerStatusUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = ServerStatusUpdateMessage;
