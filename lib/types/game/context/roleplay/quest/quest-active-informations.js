var QuestActiveInformations = function() {
    this.questId = 0;
};

QuestActiveInformations.prototype.serialize = function(output) {
    this.serializeAs_QuestActiveInformations(output);
};

QuestActiveInformations.prototype.deserialize = function(input) {
    this.deserializeAs_QuestActiveInformations(input);
};

QuestActiveInformations.prototype.serializeAs_QuestActiveInformations = function(param1) {
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element questId.");
    } else {
        param1.writeVarShort(this.questId);
        return;
    }
};

QuestActiveInformations.prototype.deserializeAs_QuestActiveInformations = function(param1) {
    this.questId = param1.readVarUhShort();
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element of QuestActiveInformations.questId.");
    } else {
        return;
    }
};

QuestActiveInformations.prototype.getTypeId = function() {
    return 381;
};

QuestActiveInformations.prototype.getClassName = function() {
    return 'QuestActiveInformations';
};

module.exports.id = 381;
module.exports.class = QuestActiveInformations;
module.exports.getInstance = function() {
    return new QuestActiveInformations;
};