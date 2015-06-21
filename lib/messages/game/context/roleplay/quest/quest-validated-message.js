var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var QuestValidatedMessage = function() {
    this.questId = 0;
};

require('util').inherits(QuestValidatedMessage, d2com.NetworkMessage.class);

module.exports = function() {
    return new QuestValidatedMessage();
};

QuestValidatedMessage.prototype.serialize = function(output) {
    this.serializeAs_QuestValidatedMessage(output);
};

QuestValidatedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_QuestValidatedMessage(input);
};

QuestValidatedMessage.prototype.serializeAs_QuestValidatedMessage = function(param1) {
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element questId.");
    } else {
        param1.writeVarShort(this.questId);
        return;
    }
};

QuestValidatedMessage.prototype.deserializeAs_QuestValidatedMessage = function(param1) {
    this.questId = param1.readVarUhShort();
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element of QuestValidatedMessage.questId.");
    } else {
        return;
    }
};

QuestValidatedMessage.prototype.getMessageId = function() {
    return 6097;
};

QuestValidatedMessage.prototype.getClassName = function() {
    return 'QuestValidatedMessage';
};

module.exports.id = 6097;
module.exports.QuestValidatedMessage = QuestValidatedMessage;