/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayArenaRegisterMessage = (function (_super) {
    __extends(GameRolePlayArenaRegisterMessage, _super);
    function GameRolePlayArenaRegisterMessage() {
        this.battleMode = 3;
        _super.call(this);
    }
    GameRolePlayArenaRegisterMessage.prototype.getMessageId = function () {
        return GameRolePlayArenaRegisterMessage.ID;
    };
    GameRolePlayArenaRegisterMessage.prototype.reset = function () {
        this.battleMode = 3;
    };
    GameRolePlayArenaRegisterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayArenaRegisterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayArenaRegisterMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayArenaRegisterMessage(param1);
    };
    GameRolePlayArenaRegisterMessage.prototype.serializeAs_GameRolePlayArenaRegisterMessage = function (param1) {
        param1.writeInt(this.battleMode);
    };
    GameRolePlayArenaRegisterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayArenaRegisterMessage(param1);
    };
    GameRolePlayArenaRegisterMessage.prototype.deserializeAs_GameRolePlayArenaRegisterMessage = function (param1) {
        this.battleMode = param1.readInt();
        if (this.battleMode < 0) {
            throw new Error('Forbidden value (' + this.battleMode + ') on element of GameRolePlayArenaRegisterMessage.battleMode.');
        }
    };
    GameRolePlayArenaRegisterMessage.ID = 6280;
    return GameRolePlayArenaRegisterMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayArenaRegisterMessage;
