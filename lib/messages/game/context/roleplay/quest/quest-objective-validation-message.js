var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var QuestObjectiveValidationMessage = function() {
  this.questId = 0;
  this.objectiveId = 0;
};

util.inherits(QuestObjectiveValidationMessage, BaseMessage);

QuestObjectiveValidationMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestObjectiveValidationMessage(output);
};

QuestObjectiveValidationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestObjectiveValidationMessage(input);
};

QuestObjectiveValidationMessage.prototype.serializeAs_QuestObjectiveValidationMessage = function(param1) {
  if (this.questId < 0) {
    throw new Error("Forbidden value (" + this.questId + ") on element questId.");
  } else {
    param1.writeVarShort(this.questId);
    if (this.objectiveId < 0) {
      throw new Error("Forbidden value (" + this.objectiveId + ") on element objectiveId.");
    } else {
      param1.writeVarShort(this.objectiveId);
      return;
    }
  }
};

QuestObjectiveValidationMessage.prototype.deserializeAs_QuestObjectiveValidationMessage = function(param1) {
  this.questId = param1.readVarUhShort();
  if (this.questId < 0) {
    throw new Error("Forbidden value (" + this.questId + ") on element of QuestObjectiveValidationMessage.questId.");
  } else {
    this.objectiveId = param1.readVarUhShort();
    if (this.objectiveId < 0) {
      throw new Error("Forbidden value (" + this.objectiveId + ") on element of QuestObjectiveValidationMessage.objectiveId.");
    } else {
      return;
    }
  }
};

QuestObjectiveValidationMessage.prototype.getMessageId = function() {
  return 6085;
};

QuestObjectiveValidationMessage.prototype.getClassName = function() {
  return 'QuestObjectiveValidationMessage';
};

module.exports.id = 6085;
module.exports.class = QuestObjectiveValidationMessage;