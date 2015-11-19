/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayFightRequestCanceledMessage = (function (_super) {
    __extends(GameRolePlayFightRequestCanceledMessage, _super);
    function GameRolePlayFightRequestCanceledMessage() {
        this.fightId = 0;
        this.sourceId = 0;
        this.targetId = 0;
        _super.call(this);
    }
    GameRolePlayFightRequestCanceledMessage.prototype.getMessageId = function () {
        return GameRolePlayFightRequestCanceledMessage.ID;
    };
    GameRolePlayFightRequestCanceledMessage.prototype.reset = function () {
        this.fightId = 0;
        this.sourceId = 0;
        this.targetId = 0;
    };
    GameRolePlayFightRequestCanceledMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayFightRequestCanceledMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayFightRequestCanceledMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayFightRequestCanceledMessage(param1);
    };
    GameRolePlayFightRequestCanceledMessage.prototype.serializeAs_GameRolePlayFightRequestCanceledMessage = function (param1) {
        param1.writeInt(this.fightId);
        if (this.sourceId < 0) {
            throw new Error('Forbidden value (' + this.sourceId + ') on element sourceId.');
        }
        param1.writeVarInt(this.sourceId);
        param1.writeInt(this.targetId);
    };
    GameRolePlayFightRequestCanceledMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayFightRequestCanceledMessage(param1);
    };
    GameRolePlayFightRequestCanceledMessage.prototype.deserializeAs_GameRolePlayFightRequestCanceledMessage = function (param1) {
        this.fightId = param1.readInt();
        this.sourceId = param1.readVarUhInt();
        if (this.sourceId < 0) {
            throw new Error('Forbidden value (' + this.sourceId + ') on element of GameRolePlayFightRequestCanceledMessage.sourceId.');
        }
        this.targetId = param1.readInt();
    };
    GameRolePlayFightRequestCanceledMessage.ID = 5822;
    return GameRolePlayFightRequestCanceledMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayFightRequestCanceledMessage;
