/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GameContextRemoveMultipleElementsMessage = require('./game-context-remove-multiple-elements-message');
var GameContextRemoveMultipleElementsWithEventsMessage = (function (_super) {
    __extends(GameContextRemoveMultipleElementsWithEventsMessage, _super);
    function GameContextRemoveMultipleElementsWithEventsMessage() {
        this.elementEventIds = [];
        _super.call(this);
    }
    GameContextRemoveMultipleElementsWithEventsMessage.prototype.getMessageId = function () {
        return GameContextRemoveMultipleElementsWithEventsMessage.ID;
    };
    GameContextRemoveMultipleElementsWithEventsMessage.prototype.reset = function () {
        this.elementEventIds = [];
    };
    GameContextRemoveMultipleElementsWithEventsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GameContextRemoveMultipleElementsWithEventsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GameContextRemoveMultipleElementsWithEventsMessage.prototype.serialize = function (param1) {
        this.serializeAs_GameContextRemoveMultipleElementsWithEventsMessage(param1);
    };
    GameContextRemoveMultipleElementsWithEventsMessage.prototype.serializeAs_GameContextRemoveMultipleElementsWithEventsMessage = function (param1) {
        _super.prototype.serializeAs_GameContextRemoveMultipleElementsMessage.call(this, param1);
        param1.writeShort(this.elementEventIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.elementEventIds.length) {
            if (this.elementEventIds[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.elementEventIds[_loc2_] + ') on element 1 (starting at 1) of elementEventIds.');
            }
            param1.writeByte(this.elementEventIds[_loc2_]);
            _loc2_++;
        }
    };
    GameContextRemoveMultipleElementsWithEventsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage(param1);
    };
    GameContextRemoveMultipleElementsWithEventsMessage.prototype.deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readByte();
            if (_loc4_ < 0) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of elementEventIds.');
            }
            this.elementEventIds.push(_loc4_);
            _loc3_++;
        }
    };
    GameContextRemoveMultipleElementsWithEventsMessage.ID = 6416;
    return GameContextRemoveMultipleElementsWithEventsMessage;
})(GameContextRemoveMultipleElementsMessage);
module.exports = GameContextRemoveMultipleElementsWithEventsMessage;
