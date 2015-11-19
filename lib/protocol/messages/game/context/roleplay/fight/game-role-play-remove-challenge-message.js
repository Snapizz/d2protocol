/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayRemoveChallengeMessage = (function (_super) {
    __extends(GameRolePlayRemoveChallengeMessage, _super);
    function GameRolePlayRemoveChallengeMessage() {
        this.fightId = 0;
        _super.call(this);
    }
    GameRolePlayRemoveChallengeMessage.prototype.getMessageId = function () {
        return GameRolePlayRemoveChallengeMessage.ID;
    };
    GameRolePlayRemoveChallengeMessage.prototype.reset = function () {
        this.fightId = 0;
    };
    GameRolePlayRemoveChallengeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayRemoveChallengeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayRemoveChallengeMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayRemoveChallengeMessage(param1);
    };
    GameRolePlayRemoveChallengeMessage.prototype.serializeAs_GameRolePlayRemoveChallengeMessage = function (param1) {
        param1.writeInt(this.fightId);
    };
    GameRolePlayRemoveChallengeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayRemoveChallengeMessage(param1);
    };
    GameRolePlayRemoveChallengeMessage.prototype.deserializeAs_GameRolePlayRemoveChallengeMessage = function (param1) {
        this.fightId = param1.readInt();
    };
    GameRolePlayRemoveChallengeMessage.ID = 300;
    return GameRolePlayRemoveChallengeMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayRemoveChallengeMessage;
