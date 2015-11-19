/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightRemoveTeamMemberMessage = (function (_super) {
    __extends(GameFightRemoveTeamMemberMessage, _super);
    function GameFightRemoveTeamMemberMessage() {
        this.fightId = 0;
        this.teamId = 2;
        this.charId = 0;
        _super.call(this);
    }
    GameFightRemoveTeamMemberMessage.prototype.getMessageId = function () {
        return GameFightRemoveTeamMemberMessage.ID;
    };
    GameFightRemoveTeamMemberMessage.prototype.reset = function () {
        this.fightId = 0;
        this.teamId = 2;
        this.charId = 0;
    };
    GameFightRemoveTeamMemberMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightRemoveTeamMemberMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightRemoveTeamMemberMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightRemoveTeamMemberMessage(param1);
    };
    GameFightRemoveTeamMemberMessage.prototype.serializeAs_GameFightRemoveTeamMemberMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeShort(this.fightId);
        param1.writeByte(this.teamId);
        param1.writeInt(this.charId);
    };
    GameFightRemoveTeamMemberMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightRemoveTeamMemberMessage(param1);
    };
    GameFightRemoveTeamMemberMessage.prototype.deserializeAs_GameFightRemoveTeamMemberMessage = function (param1) {
        this.fightId = param1.readShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameFightRemoveTeamMemberMessage.fightId.');
        }
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightRemoveTeamMemberMessage.teamId.');
        }
        this.charId = param1.readInt();
    };
    GameFightRemoveTeamMemberMessage.ID = 711;
    return GameFightRemoveTeamMemberMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightRemoveTeamMemberMessage;
