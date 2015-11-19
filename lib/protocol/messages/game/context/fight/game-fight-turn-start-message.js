/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightTurnStartMessage = (function (_super) {
    __extends(GameFightTurnStartMessage, _super);
    function GameFightTurnStartMessage() {
        this.id = 0;
        this.waitTime = 0;
        _super.call(this);
    }
    GameFightTurnStartMessage.prototype.getMessageId = function () {
        return GameFightTurnStartMessage.ID;
    };
    GameFightTurnStartMessage.prototype.reset = function () {
        this.id = 0;
        this.waitTime = 0;
    };
    GameFightTurnStartMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightTurnStartMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightTurnStartMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightTurnStartMessage(param1);
    };
    GameFightTurnStartMessage.prototype.serializeAs_GameFightTurnStartMessage = function (param1) {
        param1.writeInt(this.id);
        if (this.waitTime < 0) {
            throw new Error('Forbidden value (' + this.waitTime + ') on element waitTime.');
        }
        param1.writeVarInt(this.waitTime);
    };
    GameFightTurnStartMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightTurnStartMessage(param1);
    };
    GameFightTurnStartMessage.prototype.deserializeAs_GameFightTurnStartMessage = function (param1) {
        this.id = param1.readInt();
        this.waitTime = param1.readVarUhInt();
        if (this.waitTime < 0) {
            throw new Error('Forbidden value (' + this.waitTime + ') on element of GameFightTurnStartMessage.waitTime.');
        }
    };
    GameFightTurnStartMessage.ID = 714;
    return GameFightTurnStartMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightTurnStartMessage;
