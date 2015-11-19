/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameActionFightCastOnTargetRequestMessage = (function (_super) {
    __extends(GameActionFightCastOnTargetRequestMessage, _super);
    function GameActionFightCastOnTargetRequestMessage() {
        this.spellId = 0;
        this.targetId = 0;
        _super.call(this);
    }
    GameActionFightCastOnTargetRequestMessage.prototype.getMessageId = function () {
        return GameActionFightCastOnTargetRequestMessage.ID;
    };
    GameActionFightCastOnTargetRequestMessage.prototype.reset = function () {
        this.spellId = 0;
        this.targetId = 0;
    };
    GameActionFightCastOnTargetRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightCastOnTargetRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightCastOnTargetRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightCastOnTargetRequestMessage(param1);
    };
    GameActionFightCastOnTargetRequestMessage.prototype.serializeAs_GameActionFightCastOnTargetRequestMessage = function (param1) {
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        param1.writeInt(this.targetId);
    };
    GameActionFightCastOnTargetRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightCastOnTargetRequestMessage(param1);
    };
    GameActionFightCastOnTargetRequestMessage.prototype.deserializeAs_GameActionFightCastOnTargetRequestMessage = function (param1) {
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightCastOnTargetRequestMessage.spellId.');
        }
        this.targetId = param1.readInt();
    };
    GameActionFightCastOnTargetRequestMessage.ID = 6330;
    return GameActionFightCastOnTargetRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameActionFightCastOnTargetRequestMessage;
