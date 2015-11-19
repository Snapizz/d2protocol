/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightNewRoundMessage = (function (_super) {
    __extends(GameFightNewRoundMessage, _super);
    function GameFightNewRoundMessage() {
        this.roundNumber = 0;
        _super.call(this);
    }
    GameFightNewRoundMessage.prototype.getMessageId = function () {
        return GameFightNewRoundMessage.ID;
    };
    GameFightNewRoundMessage.prototype.reset = function () {
        this.roundNumber = 0;
    };
    GameFightNewRoundMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightNewRoundMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightNewRoundMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightNewRoundMessage(param1);
    };
    GameFightNewRoundMessage.prototype.serializeAs_GameFightNewRoundMessage = function (param1) {
        if (this.roundNumber < 0) {
            throw new Error('Forbidden value (' + this.roundNumber + ') on element roundNumber.');
        }
        param1.writeVarInt(this.roundNumber);
    };
    GameFightNewRoundMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightNewRoundMessage(param1);
    };
    GameFightNewRoundMessage.prototype.deserializeAs_GameFightNewRoundMessage = function (param1) {
        this.roundNumber = param1.readVarUhInt();
        if (this.roundNumber < 0) {
            throw new Error('Forbidden value (' + this.roundNumber + ') on element of GameFightNewRoundMessage.roundNumber.');
        }
    };
    GameFightNewRoundMessage.ID = 6239;
    return GameFightNewRoundMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightNewRoundMessage;
