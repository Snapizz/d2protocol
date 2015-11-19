/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var QuestObjectiveValidationMessage = (function (_super) {
    __extends(QuestObjectiveValidationMessage, _super);
    function QuestObjectiveValidationMessage() {
        this.questId = 0;
        this.objectiveId = 0;
        _super.call(this);
    }
    QuestObjectiveValidationMessage.prototype.getMessageId = function () {
        return QuestObjectiveValidationMessage.ID;
    };
    QuestObjectiveValidationMessage.prototype.reset = function () {
        this.questId = 0;
        this.objectiveId = 0;
    };
    QuestObjectiveValidationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QuestObjectiveValidationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QuestObjectiveValidationMessage.prototype.serialize = function (param1) {
        this.serializeAs_QuestObjectiveValidationMessage(param1);
    };
    QuestObjectiveValidationMessage.prototype.serializeAs_QuestObjectiveValidationMessage = function (param1) {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);
        if (this.objectiveId < 0) {
            throw new Error('Forbidden value (' + this.objectiveId + ') on element objectiveId.');
        }
        param1.writeVarShort(this.objectiveId);
    };
    QuestObjectiveValidationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestObjectiveValidationMessage(param1);
    };
    QuestObjectiveValidationMessage.prototype.deserializeAs_QuestObjectiveValidationMessage = function (param1) {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestObjectiveValidationMessage.questId.');
        }
        this.objectiveId = param1.readVarUhShort();
        if (this.objectiveId < 0) {
            throw new Error('Forbidden value (' + this.objectiveId + ') on element of QuestObjectiveValidationMessage.objectiveId.');
        }
    };
    QuestObjectiveValidationMessage.ID = 6085;
    return QuestObjectiveValidationMessage;
})(network_message_1.NetworkMessage);
module.exports = QuestObjectiveValidationMessage;
