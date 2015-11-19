/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightOptionStateUpdateMessage = (function (_super) {
    __extends(GameFightOptionStateUpdateMessage, _super);
    function GameFightOptionStateUpdateMessage() {
        this.fightId = 0;
        this.teamId = 2;
        this.option = 3;
        this.state = false;
        _super.call(this);
    }
    GameFightOptionStateUpdateMessage.prototype.getMessageId = function () {
        return GameFightOptionStateUpdateMessage.ID;
    };
    GameFightOptionStateUpdateMessage.prototype.reset = function () {
        this.fightId = 0;
        this.teamId = 2;
        this.option = 3;
        this.state = false;
    };
    GameFightOptionStateUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightOptionStateUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightOptionStateUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightOptionStateUpdateMessage(param1);
    };
    GameFightOptionStateUpdateMessage.prototype.serializeAs_GameFightOptionStateUpdateMessage = function (param1) {
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element fightId.');
        }
        param1.writeShort(this.fightId);
        param1.writeByte(this.teamId);
        param1.writeByte(this.option);
        param1.writeBoolean(this.state);
    };
    GameFightOptionStateUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightOptionStateUpdateMessage(param1);
    };
    GameFightOptionStateUpdateMessage.prototype.deserializeAs_GameFightOptionStateUpdateMessage = function (param1) {
        this.fightId = param1.readShort();
        if (this.fightId < 0) {
            throw new Error('Forbidden value (' + this.fightId + ') on element of GameFightOptionStateUpdateMessage.fightId.');
        }
        this.teamId = param1.readByte();
        if (this.teamId < 0) {
            throw new Error('Forbidden value (' + this.teamId + ') on element of GameFightOptionStateUpdateMessage.teamId.');
        }
        this.option = param1.readByte();
        if (this.option < 0) {
            throw new Error('Forbidden value (' + this.option + ') on element of GameFightOptionStateUpdateMessage.option.');
        }
        this.state = param1.readBoolean();
    };
    GameFightOptionStateUpdateMessage.ID = 5927;
    return GameFightOptionStateUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightOptionStateUpdateMessage;
