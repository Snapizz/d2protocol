var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var QuestStepInfoRequestMessage = function() {
  this.questId = 0;
};

util.inherits(QuestStepInfoRequestMessage, BaseMessage);

QuestStepInfoRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestStepInfoRequestMessage(output);
};

QuestStepInfoRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestStepInfoRequestMessage(input);
};

QuestStepInfoRequestMessage.prototype.serializeAs_QuestStepInfoRequestMessage = function(output) {
  if (this.questId < 0) {
    throw new Error("Forbidden value (" + this.questId + ") on element questId.");
  } else {
    param1.writeVarShort(this.questId);
    return;
  }
};

QuestStepInfoRequestMessage.prototype.deserializeAs_QuestStepInfoRequestMessage = function(input) {
  this.questId = param1.readVarUhShort();
  if (this.questId < 0) {
    throw new Error("Forbidden value (" + this.questId + ") on element of QuestStepInfoRequestMessage.questId.");
  } else {
    return;
  }
};

QuestStepInfoRequestMessage.prototype.getMessageId = function() {
  return 5622;
};

QuestStepInfoRequestMessage.prototype.getClassName = function() {
  return 'QuestStepInfoRequestMessage';
};

module.exports.id = 5622;
module.exports.class = QuestStepInfoRequestMessage;