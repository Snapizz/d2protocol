/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextRemoveElementMessage = require('./game-context-remove-element-message');
var GameContextRemoveElementWithEventMessage = (function (_super) {
    __extends(GameContextRemoveElementWithEventMessage, _super);
    function GameContextRemoveElementWithEventMessage() {
        this.elementEventId = 0;
        _super.call(this);
    }
    GameContextRemoveElementWithEventMessage.prototype.getMessageId = function () {
        return GameContextRemoveElementWithEventMessage.ID;
    };
    GameContextRemoveElementWithEventMessage.prototype.reset = function () {
        this.elementEventId = 0;
    };
    GameContextRemoveElementWithEventMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextRemoveElementWithEventMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextRemoveElementWithEventMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextRemoveElementWithEventMessage(param1);
    };
    GameContextRemoveElementWithEventMessage.prototype.serializeAs_GameContextRemoveElementWithEventMessage = function (param1) {
        _super.prototype.serializeAs_GameContextRemoveElementMessage.call(this, param1);
        if (this.elementEventId < 0) {
            throw new Error('Forbidden value (' + this.elementEventId + ') on element elementEventId.');
        }
        param1.writeByte(this.elementEventId);
    };
    GameContextRemoveElementWithEventMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextRemoveElementWithEventMessage(param1);
    };
    GameContextRemoveElementWithEventMessage.prototype.deserializeAs_GameContextRemoveElementWithEventMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.elementEventId = param1.readByte();
        if (this.elementEventId < 0) {
            throw new Error('Forbidden value (' + this.elementEventId + ') on element of GameContextRemoveElementWithEventMessage.elementEventId.');
        }
    };
    GameContextRemoveElementWithEventMessage.ID = 6412;
    return GameContextRemoveElementWithEventMessage;
})(GameContextRemoveElementMessage);
module.exports = GameContextRemoveElementWithEventMessage;
