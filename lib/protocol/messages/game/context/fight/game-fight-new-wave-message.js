/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightNewWaveMessage = (function (_super) {
    __extends(GameFightNewWaveMessage, _super);
    function GameFightNewWaveMessage() {
        this.id = 0;
        this.teamId = 2;
        this.nbTurnBeforeNextWave = 0;
        _super.call(this);
    }
    GameFightNewWaveMessage.prototype.getMessageId = function () {
        return GameFightNewWaveMessage.ID;
    };
    GameFightNewWaveMessage.prototype.reset = function () {
        this.id = 0;
        this.teamId = 2;
        this.nbTurnBeforeNextWave = 0;
    };
    GameFightNewWaveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightNewWaveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightNewWaveMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightNewWaveMessage(param1);
    };
    GameFightNewWaveMessage.prototype.serializeAs_GameFightNewWaveMessage = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeByte(this.id);
        param1.writeByte(this.teamId);
        param1.writeShort(this.nbTurnBeforeNextWave);
    };
    GameFightNewWaveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightNewWaveMessage(param1);
    };
    GameFightNewWaveMessage.prototype.deserializeAs_GameFightNewWaveMessage = function (param1) {
        this.id = param1.readByte();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of GameFightNewWaveMessage.id.');
        }
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightNewWaveMessage.teamId.');
        }
        this.nbTurnBeforeNextWave = param1.readShort();
    };
    GameFightNewWaveMessage.ID = 6490;
    return GameFightNewWaveMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightNewWaveMessage;
