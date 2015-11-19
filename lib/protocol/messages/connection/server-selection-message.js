/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ServerSelectionMessage = (function (_super) {
    __extends(ServerSelectionMessage, _super);
    function ServerSelectionMessage() {
        this.serverId = 0;
        _super.call(this);
    }
    ServerSelectionMessage.prototype.getMessageId = function () {
        return ServerSelectionMessage.ID;
    };
    ServerSelectionMessage.prototype.reset = function () {
        this.serverId = 0;
    };
    ServerSelectionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ServerSelectionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ServerSelectionMessage.prototype.serialize = function (param1) {
        this.serializeAs_ServerSelectionMessage(param1);
    };
    ServerSelectionMessage.prototype.serializeAs_ServerSelectionMessage = function (param1) {
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element serverId.');
        }
        param1.writeVarShort(this.serverId);
    };
    ServerSelectionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ServerSelectionMessage(param1);
    };
    ServerSelectionMessage.prototype.deserializeAs_ServerSelectionMessage = function (param1) {
        this.serverId = param1.readVarUhShort();
        if (this.serverId < 0) {
            throw new Error('Forbidden value (' + this.serverId + ') on element of ServerSelectionMessage.serverId.');
        }
    };
    ServerSelectionMessage.ID = 40;
    return ServerSelectionMessage;
})(network_message_1.NetworkMessage);
module.exports = ServerSelectionMessage;
