var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;
var QuestStepStartedMessage = function() {
    this.questId = 0;
    this.stepId = 0;
};

require('util').inherits(QuestStepStartedMessage, d2com.NetworkMessage.class);

QuestStepStartedMessage.prototype.serialize = function(output) {
    this.serializeAs_QuestStepStartedMessage(output);
};

QuestStepStartedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_QuestStepStartedMessage(input);
};

QuestStepStartedMessage.prototype.serializeAs_QuestStepStartedMessage = function(param1) {
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

QuestStepStartedMessage.prototype.deserializeAs_QuestStepStartedMessage = function(param1) {
    this.questId = param1.readVarUhShort();
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element of QuestStepStartedMessage.questId.");
    } else {
        this.stepId = param1.readVarUhShort();
        if (this.stepId < 0) {
            throw new Error("Forbidden value (" + this.stepId + ") on element of QuestStepStartedMessage.stepId.");
        } else {
            return;
        }
    }
};

QuestStepStartedMessage.prototype.getMessageId = function() {
    return 6096;
};

QuestStepStartedMessage.prototype.getClassName = function() {
    return 'QuestStepStartedMessage';
};

module.exports.id = 6096;
module.exports.class = QuestStepStartedMessage;
module.exports.getInstance = function() {
    return new QuestStepStartedMessage;
};