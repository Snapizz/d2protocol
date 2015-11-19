/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var QuestStepStartedMessage = (function (_super) {
    __extends(QuestStepStartedMessage, _super);
    function QuestStepStartedMessage() {
        this.questId = 0;
        this.stepId = 0;
        _super.call(this);
    }
    QuestStepStartedMessage.prototype.getMessageId = function () {
        return QuestStepStartedMessage.ID;
    };
    QuestStepStartedMessage.prototype.reset = function () {
        this.questId = 0;
        this.stepId = 0;
    };
    QuestStepStartedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QuestStepStartedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QuestStepStartedMessage.prototype.serialize = function (param1) {
        this.serializeAs_QuestStepStartedMessage(param1);
    };
    QuestStepStartedMessage.prototype.serializeAs_QuestStepStartedMessage = function (param1) {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element stepId.');
        }
        param1.writeVarShort(this.stepId);
    };
    QuestStepStartedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestStepStartedMessage(param1);
    };
    QuestStepStartedMessage.prototype.deserializeAs_QuestStepStartedMessage = function (param1) {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestStepStartedMessage.questId.');
        }
        this.stepId = param1.readVarUhShort();
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element of QuestStepStartedMessage.stepId.');
        }
    };
    QuestStepStartedMessage.ID = 6096;
    return QuestStepStartedMessage;
})(network_message_1.NetworkMessage);
module.exports = QuestStepStartedMessage;
