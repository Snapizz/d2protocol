/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameActionFightCastRequestMessage = (function (_super) {
    __extends(GameActionFightCastRequestMessage, _super);
    function GameActionFightCastRequestMessage() {
        this.spellId = 0;
        this.cellId = 0;
        _super.call(this);
    }
    GameActionFightCastRequestMessage.prototype.getMessageId = function () {
        return GameActionFightCastRequestMessage.ID;
    };
    GameActionFightCastRequestMessage.prototype.reset = function () {
        this.spellId = 0;
        this.cellId = 0;
    };
    GameActionFightCastRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightCastRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightCastRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightCastRequestMessage(param1);
    };
    GameActionFightCastRequestMessage.prototype.serializeAs_GameActionFightCastRequestMessage = function (param1) {
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeShort(this.cellId);
    };
    GameActionFightCastRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightCastRequestMessage(param1);
    };
    GameActionFightCastRequestMessage.prototype.deserializeAs_GameActionFightCastRequestMessage = function (param1) {
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of GameActionFightCastRequestMessage.spellId.');
        }
        this.cellId = param1.readShort();
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of GameActionFightCastRequestMessage.cellId.');
        }
    };
    GameActionFightCastRequestMessage.ID = 1005;
    return GameActionFightCastRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GameActionFightCastRequestMessage;
