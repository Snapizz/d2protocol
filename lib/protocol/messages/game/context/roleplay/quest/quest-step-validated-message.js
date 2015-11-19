/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var QuestStepValidatedMessage = (function (_super) {
    __extends(QuestStepValidatedMessage, _super);
    function QuestStepValidatedMessage() {
        this.questId = 0;
        this.stepId = 0;
        _super.call(this);
    }
    QuestStepValidatedMessage.prototype.getMessageId = function () {
        return QuestStepValidatedMessage.ID;
    };
    QuestStepValidatedMessage.prototype.reset = function () {
        this.questId = 0;
        this.stepId = 0;
    };
    QuestStepValidatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QuestStepValidatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QuestStepValidatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_QuestStepValidatedMessage(param1);
    };
    QuestStepValidatedMessage.prototype.serializeAs_QuestStepValidatedMessage = function (param1) {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element stepId.');
        }
        param1.writeVarShort(this.stepId);
    };
    QuestStepValidatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestStepValidatedMessage(param1);
    };
    QuestStepValidatedMessage.prototype.deserializeAs_QuestStepValidatedMessage = function (param1) {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestStepValidatedMessage.questId.');
        }
        this.stepId = param1.readVarUhShort();
        if (this.stepId < 0) {
            throw new Error('Forbidden value (' + this.stepId + ') on element of QuestStepValidatedMessage.stepId.');
        }
    };
    QuestStepValidatedMessage.ID = 6099;
    return QuestStepValidatedMessage;
})(network_message_1.NetworkMessage);
module.exports = QuestStepValidatedMessage;
