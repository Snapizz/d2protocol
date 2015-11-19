/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var QuestValidatedMessage = (function (_super) {
    __extends(QuestValidatedMessage, _super);
    function QuestValidatedMessage() {
        this.questId = 0;
        _super.call(this);
    }
    QuestValidatedMessage.prototype.getMessageId = function () {
        return QuestValidatedMessage.ID;
    };
    QuestValidatedMessage.prototype.reset = function () {
        this.questId = 0;
    };
    QuestValidatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QuestValidatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QuestValidatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_QuestValidatedMessage(param1);
    };
    QuestValidatedMessage.prototype.serializeAs_QuestValidatedMessage = function (param1) {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);
    };
    QuestValidatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestValidatedMessage(param1);
    };
    QuestValidatedMessage.prototype.deserializeAs_QuestValidatedMessage = function (param1) {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestValidatedMessage.questId.');
        }
    };
    QuestValidatedMessage.ID = 6097;
    return QuestValidatedMessage;
})(network_message_1.NetworkMessage);
module.exports = QuestValidatedMessage;
