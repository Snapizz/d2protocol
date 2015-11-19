/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var QuestObjectiveInformations = require('./quest-objective-informations');
var QuestObjectiveInformationsWithCompletion = (function (_super) {
    __extends(QuestObjectiveInformationsWithCompletion, _super);
    function QuestObjectiveInformationsWithCompletion() {
        this.curCompletion = 0;
        this.maxCompletion = 0;
        _super.call(this);
    }
    QuestObjectiveInformationsWithCompletion.prototype.getTypeId = function () {
        return QuestObjectiveInformationsWithCompletion.ID;
    };
    QuestObjectiveInformationsWithCompletion.prototype.reset = function () {
        this.curCompletion = 0;
        this.maxCompletion = 0;
    };
    QuestObjectiveInformationsWithCompletion.prototype.serialize = function (param1) {
        this.serializeAs_QuestObjectiveInformationsWithCompletion(param1);
    };
    QuestObjectiveInformationsWithCompletion.prototype.serializeAs_QuestObjectiveInformationsWithCompletion = function (param1) {
        _super.prototype.serializeAs_QuestObjectiveInformations.call(this, param1);
        if (this.curCompletion < 0) {
            throw new Error('Forbidden value (' + this.curCompletion + ') on element curCompletion.');
        }
        param1.writeVarShort(this.curCompletion);
        if (this.maxCompletion < 0) {
            throw new Error('Forbidden value (' + this.maxCompletion + ') on element maxCompletion.');
        }
        param1.writeVarShort(this.maxCompletion);
    };
    QuestObjectiveInformationsWithCompletion.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestObjectiveInformationsWithCompletion(param1);
    };
    QuestObjectiveInformationsWithCompletion.prototype.deserializeAs_QuestObjectiveInformationsWithCompletion = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.curCompletion = param1.readVarUhShort();
        if (this.curCompletion < 0) {
            throw new Error('Forbidden value (' + this.curCompletion + ') on element of QuestObjectiveInformationsWithCompletion.curCompletion.');
        }
        this.maxCompletion = param1.readVarUhShort();
        if (this.maxCompletion < 0) {
            throw new Error('Forbidden value (' + this.maxCompletion + ') on element of QuestObjectiveInformationsWithCompletion.maxCompletion.');
        }
    };
    QuestObjectiveInformationsWithCompletion.ID = 386;
    return QuestObjectiveInformationsWithCompletion;
})(QuestObjectiveInformations);
module.exports = QuestObjectiveInformationsWithCompletion;
