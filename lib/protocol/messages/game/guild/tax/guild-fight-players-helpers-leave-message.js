/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildFightPlayersHelpersLeaveMessage = (function (_super) {
    __extends(GuildFightPlayersHelpersLeaveMessage, _super);
    function GuildFightPlayersHelpersLeaveMessage() {
        this.fightId = 0;
        this.playerId = 0;
        _super.call(this);
    }
    GuildFightPlayersHelpersLeaveMessage.prototype.getMessageId = function () {
        return GuildFightPlayersHelpersLeaveMessage.ID;
    };
    GuildFightPlayersHelpersLeaveMessage.prototype.reset = function () {
        this.fightId = 0;
        this.playerId = 0;
    };
    GuildFightPlayersHelpersLeaveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFightPlayersHelpersLeaveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFightPlayersHelpersLeaveMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFightPlayersHelpersLeaveMessage(param1);
    };
    GuildFightPlayersHelpersLeaveMessage.prototype.serializeAs_GuildFightPlayersHelpersLeaveMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeInt(this.fightId);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    GuildFightPlayersHelpersLeaveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFightPlayersHelpersLeaveMessage(param1);
    };
    GuildFightPlayersHelpersLeaveMessage.prototype.deserializeAs_GuildFightPlayersHelpersLeaveMessage = function (param1) {
        this.fightId = param1.readInt();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GuildFightPlayersHelpersLeaveMessage.fightId.');
        }
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of GuildFightPlayersHelpersLeaveMessage.playerId.');
        }
    };
    GuildFightPlayersHelpersLeaveMessage.ID = 5719;
    return GuildFightPlayersHelpersLeaveMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildFightPlayersHelpersLeaveMessage;
