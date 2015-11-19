/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayDelayedActionMessage = require('./game-role-play-delayed-action-message');
var GameRolePlayDelayedObjectUseMessage = (function (_super) {
    __extends(GameRolePlayDelayedObjectUseMessage, _super);
    function GameRolePlayDelayedObjectUseMessage() {
        this.objectGID = 0;
        _super.call(this);
    }
    GameRolePlayDelayedObjectUseMessage.prototype.getMessageId = function () {
        return GameRolePlayDelayedObjectUseMessage.ID;
    };
    GameRolePlayDelayedObjectUseMessage.prototype.reset = function () {
        this.objectGID = 0;
    };
    GameRolePlayDelayedObjectUseMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayDelayedObjectUseMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayDelayedObjectUseMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayDelayedObjectUseMessage(param1);
    };
    GameRolePlayDelayedObjectUseMessage.prototype.serializeAs_GameRolePlayDelayedObjectUseMessage = function (param1) {
        _super.prototype.serializeAs_GameRolePlayDelayedActionMessage.call(this, param1);
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element objectGID.');
        }
        param1.writeVarShort(this.objectGID);
    };
    GameRolePlayDelayedObjectUseMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayDelayedObjectUseMessage(param1);
    };
    GameRolePlayDelayedObjectUseMessage.prototype.deserializeAs_GameRolePlayDelayedObjectUseMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.objectGID = param1.readVarUhShort();
        if (this.objectGID < 0) {
            throw new Error('Forbidden value (' + this.objectGID + ') on element of GameRolePlayDelayedObjectUseMessage.objectGID.');
        }
    };
    GameRolePlayDelayedObjectUseMessage.ID = 6425;
    return GameRolePlayDelayedObjectUseMessage;
})(GameRolePlayDelayedActionMessage);
module.exports = GameRolePlayDelayedObjectUseMessage;
