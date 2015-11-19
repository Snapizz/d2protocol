/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractGameActionMessage = (function (_super) {
    __extends(AbstractGameActionMessage, _super);
    function AbstractGameActionMessage() {
        this.actionId = 0;
        this.sourceId = 0;
        _super.call(this);
    }
    AbstractGameActionMessage.prototype.getMessageId = function () {
        return AbstractGameActionMessage.ID;
    };
    AbstractGameActionMessage.prototype.reset = function () {
        this.actionId = 0;
        this.sourceId = 0;
    };
    AbstractGameActionMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AbstractGameActionMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AbstractGameActionMessage.prototype.serialize = function (param1) {
        this.serializeAs_AbstractGameActionMessage(param1);
    };
    AbstractGameActionMessage.prototype.serializeAs_AbstractGameActionMessage = function (param1) {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);
        param1.writeInt(this.sourceId);
    };
    AbstractGameActionMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AbstractGameActionMessage(param1);
    };
    AbstractGameActionMessage.prototype.deserializeAs_AbstractGameActionMessage = function (param1) {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of AbstractGameActionMessage.actionId.');
        }
        this.sourceId = param1.readInt();
    };
    AbstractGameActionMessage.ID = 1000;
    return AbstractGameActionMessage;
})(network_message_1.NetworkMessage);
module.exports = AbstractGameActionMessage;
