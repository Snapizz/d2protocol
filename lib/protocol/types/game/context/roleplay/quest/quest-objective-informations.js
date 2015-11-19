/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var QuestObjectiveInformations = (function () {
    function QuestObjectiveInformations() {
        this.objectiveId = 0;
        this.objectiveStatus = false;
        this.dialogParams = [];
    }
    QuestObjectiveInformations.prototype.getTypeId = function () {
        return QuestObjectiveInformations.ID;
    };
    QuestObjectiveInformations.prototype.reset = function () {
        this.objectiveId = 0;
        this.objectiveStatus = false;
        this.dialogParams = [];
    };
    QuestObjectiveInformations.prototype.serialize = function (param1) {
        this.serializeAs_QuestObjectiveInformations(param1);
    };
    QuestObjectiveInformations.prototype.serializeAs_QuestObjectiveInformations = function (param1) {
        if (this.objectiveId < 0) {
            throw new Error('Forbidden value (' + this.objectiveId + ') on element objectiveId.');
        }
        param1.writeVarShort(this.objectiveId);
        param1.writeBoolean(this.objectiveStatus);
        param1.writeShort(this.dialogParams.length);
        var _loc2_ = 0;
        while (_loc2_ < this.dialogParams.length) {
            param1.writeUTF(this.dialogParams[_loc2_]);
            _loc2_++;
        }
    };
    QuestObjectiveInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestObjectiveInformations(param1);
    };
    QuestObjectiveInformations.prototype.deserializeAs_QuestObjectiveInformations = function (param1) {
        var _loc4_ = null;
        this.objectiveId = param1.readVarUhShort();
        if (this.objectiveId < 0) {
            throw new Error('Forbidden value (' + this.objectiveId + ') on element of QuestObjectiveInformations.objectiveId.');
        }
        this.objectiveStatus = param1.readBoolean();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUTF();
            this.dialogParams.push(_loc4_);
            _loc3_++;
        }
    };
    QuestObjectiveInformations.ID = 385;
    return QuestObjectiveInformations;
})();
module.exports = QuestObjectiveInformations;
