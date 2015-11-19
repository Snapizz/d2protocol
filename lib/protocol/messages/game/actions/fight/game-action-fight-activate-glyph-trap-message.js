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
var GameActionFightActivateGlyphTrapMessage = (function (_super) {
    __extends(GameActionFightActivateGlyphTrapMessage, _super);
    function GameActionFightActivateGlyphTrapMessage() {
        this.markId = 0;
        this.active = false;
        _super.call(this);
    }
    GameActionFightActivateGlyphTrapMessage.prototype.getMessageId = function () {
        return GameActionFightActivateGlyphTrapMessage.ID;
    };
    GameActionFightActivateGlyphTrapMessage.prototype.reset = function () {
        this.markId = 0;
        this.active = false;
    };
    GameActionFightActivateGlyphTrapMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameActionFightActivateGlyphTrapMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameActionFightActivateGlyphTrapMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameActionFightActivateGlyphTrapMessage(param1);
    };
    GameActionFightActivateGlyphTrapMessage.prototype.serializeAs_GameActionFightActivateGlyphTrapMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeShort(this.markId);
        param1.writeBoolean(this.active);
    };
    GameActionFightActivateGlyphTrapMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameActionFightActivateGlyphTrapMessage(param1);
    };
    GameActionFightActivateGlyphTrapMessage.prototype.deserializeAs_GameActionFightActivateGlyphTrapMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.markId = param1.readShort();
        this.active = param1.readBoolean();
    };
    GameActionFightActivateGlyphTrapMessage.ID = 6545;
    return GameActionFightActivateGlyphTrapMessage;
})(AbstractGameActionMessage);
module.exports = GameActionFightActivateGlyphTrapMessage;
