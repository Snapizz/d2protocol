/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayArenaRegistrationStatusMessage = (function (_super) {
    __extends(GameRolePlayArenaRegistrationStatusMessage, _super);
    function GameRolePlayArenaRegistrationStatusMessage() {
        this.registered = false;
        this.step = 0;
        this.battleMode = 3;
        _super.call(this);
    }
    GameRolePlayArenaRegistrationStatusMessage.prototype.getMessageId = function () {
        return GameRolePlayArenaRegistrationStatusMessage.ID;
    };
    GameRolePlayArenaRegistrationStatusMessage.prototype.reset = function () {
        this.registered = false;
        this.step = 0;
        this.battleMode = 3;
    };
    GameRolePlayArenaRegistrationStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayArenaRegistrationStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayArenaRegistrationStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayArenaRegistrationStatusMessage(param1);
    };
    GameRolePlayArenaRegistrationStatusMessage.prototype.serializeAs_GameRolePlayArenaRegistrationStatusMessage = function (param1) {
        param1.writeBoolean(this.registered);
        param1.writeByte(this.step);
        param1.writeInt(this.battleMode);
    };
    GameRolePlayArenaRegistrationStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayArenaRegistrationStatusMessage(param1);
    };
    GameRolePlayArenaRegistrationStatusMessage.prototype.deserializeAs_GameRolePlayArenaRegistrationStatusMessage = function (param1) {
        this.registered = param1.readBoolean();
        this.step = param1.readByte();
        if (this.step < 0) {
            throw new Error('Forbidden value (' + this.step + ') on element of GameRolePlayArenaRegistrationStatusMessage.step.');
        }
        this.battleMode = param1.readInt();
        if (this.battleMode < 0) {
            throw new Error('Forbidden value (' + this.battleMode + ') on element of GameRolePlayArenaRegistrationStatusMessage.battleMode.');
        }
    };
    GameRolePlayArenaRegistrationStatusMessage.ID = 6284;
    return GameRolePlayArenaRegistrationStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayArenaRegistrationStatusMessage;
