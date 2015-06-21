var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var QuestStepValidatedMessage = function() {
    this.questId = 0;
    this.stepId = 0;
};

require('util').inherits(QuestStepValidatedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new QuestStepValidatedMessage();
};

QuestStepValidatedMessage.prototype.serialize = function(output) {
    this.serializeAs_QuestStepValidatedMessage(output);
};

QuestStepValidatedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_QuestStepValidatedMessage(input);
};

QuestStepValidatedMessage.prototype.serializeAs_QuestStepValidatedMessage = function(param1) {
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element questId.");
    } else {
        param1.writeVarShort(this.questId);
        if (this.stepId < 0) {
            throw new Error("Forbidden value (" + this.stepId + ") on element stepId.");
        } else {
            param1.writeVarShort(this.stepId);
            return;
        }
    }
};

QuestStepValidatedMessage.prototype.deserializeAs_QuestStepValidatedMessage = function(param1) {
    this.questId = param1.readVarUhShort();
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element of QuestStepValidatedMessage.questId.");
    } else {
        this.stepId = param1.readVarUhShort();
        if (this.stepId < 0) {
            throw new Error("Forbidden value (" + this.stepId + ") on element of QuestStepValidatedMessage.stepId.");
        } else {
            return;
        }
    }
};

QuestStepValidatedMessage.prototype.getMessageId = function() {
    return 6099;
};

QuestStepValidatedMessage.prototype.getClassName = function() {
    return 'QuestStepValidatedMessage';
};

module.exports.id = 6099;
module.exports.QuestStepValidatedMessage = QuestStepValidatedMessage;