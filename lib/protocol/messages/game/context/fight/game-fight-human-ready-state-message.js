/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightHumanReadyStateMessage = (function (_super) {
    __extends(GameFightHumanReadyStateMessage, _super);
    function GameFightHumanReadyStateMessage() {
        this.characterId = 0;
        this.isReady = false;
        _super.call(this);
    }
    GameFightHumanReadyStateMessage.prototype.getMessageId = function () {
        return GameFightHumanReadyStateMessage.ID;
    };
    GameFightHumanReadyStateMessage.prototype.reset = function () {
        this.characterId = 0;
        this.isReady = false;
    };
    GameFightHumanReadyStateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightHumanReadyStateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightHumanReadyStateMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightHumanReadyStateMessage(param1);
    };
    GameFightHumanReadyStateMessage.prototype.serializeAs_GameFightHumanReadyStateMessage = function (param1) {
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeVarInt(this.characterId);
        param1.writeBoolean(this.isReady);
    };
    GameFightHumanReadyStateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightHumanReadyStateMessage(param1);
    };
    GameFightHumanReadyStateMessage.prototype.deserializeAs_GameFightHumanReadyStateMessage = function (param1) {
        this.characterId = param1.readVarUhInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of GameFightHumanReadyStateMessage.characterId.');
        }
        this.isReady = param1.readBoolean();
    };
    GameFightHumanReadyStateMessage.ID = 740;
    return GameFightHumanReadyStateMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightHumanReadyStateMessage;
