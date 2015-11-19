/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameFightJoinRequestMessage = (function (_super) {
    __extends(GameFightJoinRequestMessage, _super);
    function GameFightJoinRequestMessage() {
        this.fighterId = 0;
        this.fightId = 0;
        _super.call(this);
    }
    GameFightJoinRequestMessage.prototype.getMessageId = function () {
        return GameFightJoinRequestMessage.ID;
    };
    GameFightJoinRequestMessage.prototype.reset = function () {
        this.fighterId = 0;
        this.fightId = 0;
    };
    GameFightJoinRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameFightJoinRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameFightJoinRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameFightJoinRequestMessage(param1);
    };
    GameFightJoinRequestMessage.prototype.serializeAs_GameFightJoinRequestMessage = function (param1) {
        param1.writeInt(this.fighterId);
        param1.writeInt(this.fightId);
    };
    GameFightJoinRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameFightJoinRequestMessage(param1);
    };
    GameFightJoinRequestMessage.prototype.deserializeAs_GameFightJoinRequestMessage = function (param1) {
        this.fighterId = param1.readInt();
        this.fightId = param1.readInt();
    };
    GameFightJoinRequestMessage.ID = 701;
    return GameFightJoinRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameFightJoinRequestMessage;
