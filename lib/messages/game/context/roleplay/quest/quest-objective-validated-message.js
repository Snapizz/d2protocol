var d2com = require('d2com'),
  BaseMessage = require('./quest-objective-validated-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var QuestObjectiveValidatedMessage = function() {
  this.questId = 0;
  this.objectiveId = 0;
};

util.inherits(QuestObjectiveValidatedMessage, BaseMessage);

QuestObjectiveValidatedMessage.prototype.serialize = function(output) {
  this.serializeAs_QuestObjectiveValidatedMessage(output);
};

QuestObjectiveValidatedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_QuestObjectiveValidatedMessage(input);
};

QuestObjectiveValidatedMessage.prototype.serializeAs_QuestObjectiveValidatedMessage = function(param1) {
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

QuestObjectiveValidatedMessage.prototype.deserializeAs_QuestObjectiveValidatedMessage = function(param1) {
  this.questId = param1.readVarUhShort();
  if (this.questId < 0) {
    throw new Error("Forbidden value (" + this.questId + ") on element of QuestObjectiveValidatedMessage.questId.");
  } else {
    this.objectiveId = param1.readVarUhShort();
    if (this.objectiveId < 0) {
      throw new Error("Forbidden value (" + this.objectiveId + ") on element of QuestObjectiveValidatedMessage.objectiveId.");
    } else {
      return;
    }
  }
};

QuestObjectiveValidatedMessage.prototype.getMessageId = function() {
  return 6098;
};

QuestObjectiveValidatedMessage.prototype.getClassName = function() {
  return 'QuestObjectiveValidatedMessage';
};

module.exports.id = 6098;
module.exports.class = QuestObjectiveValidatedMessage;
module.exports.getInstance = function() {
  return new QuestObjectiveValidatedMessage();
};