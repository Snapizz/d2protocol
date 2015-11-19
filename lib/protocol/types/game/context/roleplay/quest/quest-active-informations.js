/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var QuestActiveInformations = (function () {
    function QuestActiveInformations() {
        this.questId = 0;
    }
    QuestActiveInformations.prototype.getTypeId = function () {
        return QuestActiveInformations.ID;
    };
    QuestActiveInformations.prototype.reset = function () {
        this.questId = 0;
    };
    QuestActiveInformations.prototype.serialize = function (param1) {
        this.serializeAs_QuestActiveInformations(param1);
    };
    QuestActiveInformations.prototype.serializeAs_QuestActiveInformations = function (param1) {
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element questId.');
        }
        param1.writeVarShort(this.questId);
    };
    QuestActiveInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_QuestActiveInformations(param1);
    };
    QuestActiveInformations.prototype.deserializeAs_QuestActiveInformations = function (param1) {
        this.questId = param1.readVarUhShort();
        if (this.questId < 0) {
            throw new Error('Forbidden value (' + this.questId + ') on element of QuestActiveInformations.questId.');
        }
    };
    QuestActiveInformations.ID = 381;
    return QuestActiveInformations;
})();
module.exports = QuestActiveInformations;
