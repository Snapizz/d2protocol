/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameRolePlayShowActorMessage = require('./game-role-play-show-actor-message');
var GameRolePlayShowActorWithEventMessage = (function (_super) {
    __extends(GameRolePlayShowActorWithEventMessage, _super);
    function GameRolePlayShowActorWithEventMessage() {
        this.actorEventId = 0;
        _super.call(this);
    }
    GameRolePlayShowActorWithEventMessage.prototype.getMessageId = function () {
        return GameRolePlayShowActorWithEventMessage.ID;
    };
    GameRolePlayShowActorWithEventMessage.prototype.reset = function () {
        this.actorEventId = 0;
    };
    GameRolePlayShowActorWithEventMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameRolePlayShowActorWithEventMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameRolePlayShowActorWithEventMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameRolePlayShowActorWithEventMessage(param1);
    };
    GameRolePlayShowActorWithEventMessage.prototype.serializeAs_GameRolePlayShowActorWithEventMessage = function (param1) {
        _super.prototype.serializeAs_GameRolePlayShowActorMessage.call(this, param1);
        if (this.actorEventId < 0) {
            throw new Error('Forbidden value (' + this.actorEventId + ') on element actorEventId.');
        }
        param1.writeByte(this.actorEventId);
    };
    GameRolePlayShowActorWithEventMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameRolePlayShowActorWithEventMessage(param1);
    };
    GameRolePlayShowActorWithEventMessage.prototype.deserializeAs_GameRolePlayShowActorWithEventMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.actorEventId = param1.readByte();
        if (this.actorEventId < 0) {
            throw new Error('Forbidden value (' + this.actorEventId + ') on element of GameRolePlayShowActorWithEventMessage.actorEventId.');
        }
    };
    GameRolePlayShowActorWithEventMessage.ID = 6407;
    return GameRolePlayShowActorWithEventMessage;
})(GameRolePlayShowActorMessage);
module.exports = GameRolePlayShowActorWithEventMessage;
