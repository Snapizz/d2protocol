/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayAggressionMessage = (function (_super) {
    __extends(GameRolePlayAggressionMessage, _super);
    function GameRolePlayAggressionMessage() {
        this.attackerId = 0;
        this.defenderId = 0;
        _super.call(this);
    }
    GameRolePlayAggressionMessage.prototype.getMessageId = function () {
        return GameRolePlayAggressionMessage.ID;
    };
    GameRolePlayAggressionMessage.prototype.reset = function () {
        this.attackerId = 0;
        this.defenderId = 0;
    };
    GameRolePlayAggressionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayAggressionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayAggressionMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayAggressionMessage(param1);
    };
    GameRolePlayAggressionMessage.prototype.serializeAs_GameRolePlayAggressionMessage = function (param1) {
        if (this.attackerId < 0) {
            throw new Error('Forbidden value (' + this.attackerId + ') on element attackerId.');
        }
        param1.writeVarInt(this.attackerId);
        if (this.defenderId < 0) {
            throw new Error('Forbidden value (' + this.defenderId + ') on element defenderId.');
        }
        param1.writeVarInt(this.defenderId);
    };
    GameRolePlayAggressionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayAggressionMessage(param1);
    };
    GameRolePlayAggressionMessage.prototype.deserializeAs_GameRolePlayAggressionMessage = function (param1) {
        this.attackerId = param1.readVarUhInt();
        if (this.attackerId < 0) {
            throw new Error('Forbidden value (' + this.attackerId + ') on element of GameRolePlayAggressionMessage.attackerId.');
        }
        this.defenderId = param1.readVarUhInt();
        if (this.defenderId < 0) {
            throw new Error('Forbidden value (' + this.defenderId + ') on element of GameRolePlayAggressionMessage.defenderId.');
        }
    };
    GameRolePlayAggressionMessage.ID = 6073;
    return GameRolePlayAggressionMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayAggressionMessage;
