/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayPlayerFightRequestMessage = (function (_super) {
    __extends(GameRolePlayPlayerFightRequestMessage, _super);
    function GameRolePlayPlayerFightRequestMessage() {
        this.targetId = 0;
        this.targetCellId = 0;
        this.friendly = false;
        _super.call(this);
    }
    GameRolePlayPlayerFightRequestMessage.prototype.getMessageId = function () {
        return GameRolePlayPlayerFightRequestMessage.ID;
    };
    GameRolePlayPlayerFightRequestMessage.prototype.reset = function () {
        this.targetId = 0;
        this.targetCellId = 0;
        this.friendly = false;
    };
    GameRolePlayPlayerFightRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayPlayerFightRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayPlayerFightRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayPlayerFightRequestMessage(param1);
    };
    GameRolePlayPlayerFightRequestMessage.prototype.serializeAs_GameRolePlayPlayerFightRequestMessage = function (param1) {
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element targetId.');
        }
        param1.writeVarInt(this.targetId);
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element targetCellId.');
        }
        param1.writeShort(this.targetCellId);
        param1.writeBoolean(this.friendly);
    };
    GameRolePlayPlayerFightRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayPlayerFightRequestMessage(param1);
    };
    GameRolePlayPlayerFightRequestMessage.prototype.deserializeAs_GameRolePlayPlayerFightRequestMessage = function (param1) {
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element of GameRolePlayPlayerFightRequestMessage.targetId.');
        }
        this.targetCellId = param1.readShort();
        if (this.targetCellId < -1 || this.targetCellId > 559) {
            throw new Error('Forbidden value (' + this.targetCellId + ') on element of GameRolePlayPlayerFightRequestMessage.targetCellId.');
        }
        this.friendly = param1.readBoolean();
    };
    GameRolePlayPlayerFightRequestMessage.ID = 5731;
    return GameRolePlayPlayerFightRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameRolePlayPlayerFightRequestMessage;
