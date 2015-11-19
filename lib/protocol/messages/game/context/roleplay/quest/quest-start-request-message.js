/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var QuestStartRequestMessage = (function (_super) {
    __extends(QuestStartRequestMessage, _super);
    function QuestStartRequestMessage() {
        this.questId = 0;
        _super.call(this);
    }
    QuestStartRequestMessage.prototype.getMessageId = function () {
        return QuestStartRequestMessage.ID;
    };
    QuestStartRequestMessage.prototype.reset = function () {
        this.questId = 0;
    };
    QuestStartRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QuestStartRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QuestStartRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_QuestStartRequestMessage(param1);
    };
    QuestStartRequestMessage.prototype.serializeAs_QuestStartRequestMessage = function (param1) {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);
    };
    QuestStartRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestStartRequestMessage(param1);
    };
    QuestStartRequestMessage.prototype.deserializeAs_QuestStartRequestMessage = function (param1) {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestStartRequestMessage.questId.');
        }
    };
    QuestStartRequestMessage.ID = 5643;
    return QuestStartRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = QuestStartRequestMessage;
