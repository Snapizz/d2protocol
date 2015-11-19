/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayArenaUnregisterMessage = (function (_super) {
    __extends(GameRolePlayArenaUnregisterMessage, _super);
    function GameRolePlayArenaUnregisterMessage() {
        _super.call(this);
    }
    GameRolePlayArenaUnregisterMessage.prototype.getMessageId = function () {
        return GameRolePlayArenaUnregisterMessage.ID;
    };
    GameRolePlayArenaUnregisterMessage.prototype.reset = function () {
    };
    GameRolePlayArenaUnregisterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayArenaUnregisterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayArenaUnregisterMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayArenaUnregisterMessage(param1);
    };
    GameRolePlayArenaUnregisterMessage.prototype.serializeAs_GameRolePlayArenaUnregisterMessage = function (param1) {
    };
    GameRolePlayArenaUnregisterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayArenaUnregisterMessage(param1);
    };
    GameRolePlayArenaUnregisterMessage.prototype.deserializeAs_GameRolePlayArenaUnregisterMessage = function (param1) {
    };
    GameRolePlayArenaUnregisterMessage.ID = 6282;
    return GameRolePlayArenaUnregisterMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayArenaUnregisterMessage;
