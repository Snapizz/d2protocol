var d2com = require('d2com'),
    CustomDataWrapper = d2com.CustomDataWrapper,
    BooleanByteWrapper = d2com.BooleanByteWrapper;

var QuestStartRequestMessage = function() {
    this.questId = 0;
};

require('util').inherits(QuestStartRequestMessage, d2com.NetworkMessage.class);

QuestStartRequestMessage.prototype.serialize = function(output) {
    this.serializeAs_QuestStartRequestMessage(output);
};

QuestStartRequestMessage.prototype.deserialize = function(input) {
    this.deserializeAs_QuestStartRequestMessage(input);
};

QuestStartRequestMessage.prototype.serializeAs_QuestStartRequestMessage = function(param1) {
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element questId.");
    } else {
        param1.writeVarShort(this.questId);
        return;
    }
};

QuestStartRequestMessage.prototype.deserializeAs_QuestStartRequestMessage = function(param1) {
    this.questId = param1.readVarUhShort();
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element of QuestStartRequestMessage.questId.");
    } else {
        return;
    }
};

QuestStartRequestMessage.prototype.getMessageId = function() {
    return 5643;
};

QuestStartRequestMessage.prototype.getClassName = function() {
    return 'QuestStartRequestMessage';
};

module.exports.id = 5643;
module.exports.class = QuestStartRequestMessage;
module.exports.getInstance = function() {
    return new QuestStartRequestMessage;
};