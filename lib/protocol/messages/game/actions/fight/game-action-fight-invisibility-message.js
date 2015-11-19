/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionMessage = require('./../abstract-game-action-message');
var GameActionFightInvisibilityMessage = (function (_super) {
    __extends(GameActionFightInvisibilityMessage, _super);
    function GameActionFightInvisibilityMessage() {
        this.targetId = 0;
        this.state = 0;
        _super.call(this);
    }
    GameActionFightInvisibilityMessage.prototype.getMessageId = function () {
        return GameActionFightInvisibilityMessage.ID;
    };
    GameActionFightInvisibilityMessage.prototype.reset = function () {
        this.targetId = 0;
        this.state = 0;
    };
    GameActionFightInvisibilityMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightInvisibilityMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightInvisibilityMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightInvisibilityMessage(param1);
    };
    GameActionFightInvisibilityMessage.prototype.serializeAs_GameActionFightInvisibilityMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeInt(this.targetId);
        param1.writeByte(this.state);
    };
    GameActionFightInvisibilityMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightInvisibilityMessage(param1);
    };
    GameActionFightInvisibilityMessage.prototype.deserializeAs_GameActionFightInvisibilityMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.targetId = param1.readInt();
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of GameActionFightInvisibilityMessage.state.');
        }
    };
    GameActionFightInvisibilityMessage.ID = 5821;
    return GameActionFightInvisibilityMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightInvisibilityMessage;
