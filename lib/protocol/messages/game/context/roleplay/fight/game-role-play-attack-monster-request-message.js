/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayAttackMonsterRequestMessage = (function (_super) {
    __extends(GameRolePlayAttackMonsterRequestMessage, _super);
    function GameRolePlayAttackMonsterRequestMessage() {
        this.monsterGroupId = 0;
        _super.call(this);
    }
    GameRolePlayAttackMonsterRequestMessage.prototype.getMessageId = function () {
        return GameRolePlayAttackMonsterRequestMessage.ID;
    };
    GameRolePlayAttackMonsterRequestMessage.prototype.reset = function () {
        this.monsterGroupId = 0;
    };
    GameRolePlayAttackMonsterRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayAttackMonsterRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayAttackMonsterRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayAttackMonsterRequestMessage(param1);
    };
    GameRolePlayAttackMonsterRequestMessage.prototype.serializeAs_GameRolePlayAttackMonsterRequestMessage = function (param1) {
        param1.writeInt(this.monsterGroupId);
    };
    GameRolePlayAttackMonsterRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayAttackMonsterRequestMessage(param1);
    };
    GameRolePlayAttackMonsterRequestMessage.prototype.deserializeAs_GameRolePlayAttackMonsterRequestMessage = function (param1) {
        this.monsterGroupId = param1.readInt();
    };
    GameRolePlayAttackMonsterRequestMessage.ID = 6191;
    return GameRolePlayAttackMonsterRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayAttackMonsterRequestMessage;
