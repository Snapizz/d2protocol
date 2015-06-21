var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;
var QuestStartedMessage = module.exports = function() {
    this.questId = 0;

    return this;
};

require('util').inherits(QuestStartedMessage, d2com.NetworkMessage.class);

QuestStartedMessage.prototype.serialize = function(output) {
    this.serializeAs_QuestStartedMessage(output);
};

QuestStartedMessage.prototype.deserialize = function(input) {
    this.deserializeAs_QuestStartedMessage(input);
};

QuestStartedMessage.prototype.serializeAs_QuestStartedMessage = function(param1) {
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element questId.");
    } else {
        param1.writeVarShort(this.questId);
        return;
    }
};

QuestStartedMessage.prototype.deserializeAs_QuestStartedMessage = function(param1) {
    this.questId = param1.readVarUhShort();
    if (this.questId < 0) {
        throw new Error("Forbidden value (" + this.questId + ") on element of QuestStartedMessage.questId.");
    } else {
        return;
    }
};

QuestStartedMessage.prototype.getMessageId = function() {
    return 6091;
};

QuestStartedMessage.prototype.getClassName = function() {
    return 'QuestStartedMessage';
};

module.exports.id = 6091;