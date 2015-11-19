/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionMessage = require('./abstract-game-action-message');
var AbstractGameActionWithAckMessage = (function (_super) {
    __extends(AbstractGameActionWithAckMessage, _super);
    function AbstractGameActionWithAckMessage() {
        this.waitAckId = 0;
        _super.call(this);
    }
    AbstractGameActionWithAckMessage.prototype.getMessageId = function () {
        return AbstractGameActionWithAckMessage.ID;
    };
    AbstractGameActionWithAckMessage.prototype.reset = function () {
        this.waitAckId = 0;
    };
    AbstractGameActionWithAckMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AbstractGameActionWithAckMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AbstractGameActionWithAckMessage.prototype.serialize = function (param1) {
        this.serializeAs_AbstractGameActionWithAckMessage(param1);
    };
    AbstractGameActionWithAckMessage.prototype.serializeAs_AbstractGameActionWithAckMessage = function (param1) {
        _super.prototype.serializeAs_AbstractGameActionMessage.call(this, param1);
        param1.writeShort(this.waitAckId);
    };
    AbstractGameActionWithAckMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractGameActionWithAckMessage(param1);
    };
    AbstractGameActionWithAckMessage.prototype.deserializeAs_AbstractGameActionWithAckMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.waitAckId = param1.readShort();
    };
    AbstractGameActionWithAckMessage.ID = 1001;
    return AbstractGameActionWithAckMessage;
})(AbstractGameActionMessage);
module.exports = AbstractGameActionWithAckMessage;
