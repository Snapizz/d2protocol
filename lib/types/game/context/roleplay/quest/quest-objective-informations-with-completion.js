var QuestObjectiveInformationsWithCompletion = function() {
    this.curCompletion = 0;
    this.maxCompletion = 0;
};

require('util').inherits(QuestObjectiveInformationsWithCompletion, require('./quest-objective-informations.js'));

module.exports = function() {
    return new QuestObjectiveInformationsWithCompletion();
};

QuestObjectiveInformationsWithCompletion.prototype.serialize = function(output) {
    this.serializeAs_QuestObjectiveInformationsWithCompletion(output);
};

QuestObjectiveInformationsWithCompletion.prototype.deserialize = function(input) {
    this.deserializeAs_QuestObjectiveInformationsWithCompletion(input);
};

QuestObjectiveInformationsWithCompletion.prototype.serializeAs_QuestObjectiveInformationsWithCompletion = function(param1) {
    this.serializeAs_QuestObjectiveInformations(param1);
    if (this.curCompletion < 0) {
        throw new Error("Forbidden value (" + this.curCompletion + ") on element curCompletion.");
    } else {
        param1.writeVarShort(this.curCompletion);
        if (this.maxCompletion < 0) {
            throw new Error("Forbidden value (" + this.maxCompletion + ") on element maxCompletion.");
        } else {
            param1.writeVarShort(this.maxCompletion);
            return;
        }
    }
};

QuestObjectiveInformationsWithCompletion.prototype.deserializeAs_QuestObjectiveInformationsWithCompletion = function(param1) {
    this.deserializeAs_QuestObjectiveInformations(param1);
    this.curCompletion = param1.readVarUhShort();
    if (this.curCompletion < 0) {
        throw new Error("Forbidden value (" + this.curCompletion + ") on element of QuestObjectiveInformationsWithCompletion.curCompletion.");
    } else {
        this.maxCompletion = param1.readVarUhShort();
        if (this.maxCompletion < 0) {
            throw new Error("Forbidden value (" + this.maxCompletion + ") on element of QuestObjectiveInformationsWithCompletion.maxCompletion.");
        } else {
            return;
        }
    }
};

QuestObjectiveInformationsWithCompletion.prototype.getTypeId = function() {
    return 386;
};

QuestObjectiveInformationsWithCompletion.prototype.getClassName = function() {
    return 'QuestObjectiveInformationsWithCompletion';
};

module.exports.id = 386;
module.exports.QuestObjectiveInformationsWithCompletion = QuestObjectiveInformationsWithCompletion;