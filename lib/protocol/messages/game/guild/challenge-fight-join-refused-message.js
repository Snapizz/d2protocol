/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ChallengeFightJoinRefusedMessage = (function (_super) {
    __extends(ChallengeFightJoinRefusedMessage, _super);
    function ChallengeFightJoinRefusedMessage() {
        this.playerId = 0;
        this.reason = 0;
        _super.call(this);
    }
    ChallengeFightJoinRefusedMessage.prototype.getMessageId = function () {
        return ChallengeFightJoinRefusedMessage.ID;
    };
    ChallengeFightJoinRefusedMessage.prototype.reset = function () {
        this.playerId = 0;
        this.reason = 0;
    };
    ChallengeFightJoinRefusedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ChallengeFightJoinRefusedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ChallengeFightJoinRefusedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ChallengeFightJoinRefusedMessage(param1);
    };
    ChallengeFightJoinRefusedMessage.prototype.serializeAs_ChallengeFightJoinRefusedMessage = function (param1) {
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        param1.writeByte(this.reason);
    };
    ChallengeFightJoinRefusedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ChallengeFightJoinRefusedMessage(param1);
    };
    ChallengeFightJoinRefusedMessage.prototype.deserializeAs_ChallengeFightJoinRefusedMessage = function (param1) {
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of ChallengeFightJoinRefusedMessage.playerId.');
        }
        this.reason = param1.readByte();
    };
    ChallengeFightJoinRefusedMessage.ID = 5908;
    return ChallengeFightJoinRefusedMessage;
})(network_message_1.NetworkMessage);
module.exports = ChallengeFightJoinRefusedMessage;
