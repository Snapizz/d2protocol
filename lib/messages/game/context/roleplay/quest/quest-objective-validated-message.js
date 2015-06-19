var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

QuestObjectiveValidatedMessage.prototype.serializeAs_QuestObjectiveValidatedMessage = function(output) {
  if (this.questId < 0) {
    throw (new Error((("Forbidden value (" + this.questId) + ") on element questId.")));
  };
  output.writeVarShort(this.questId);
  if (this.objectiveId < 0) {
    throw (new Error((("Forbidden value (" + this.objectiveId) + ") on element objectiveId.")));
  };
  output.writeVarShort(this.objectiveId);
};

QuestObjectiveValidatedMessage.prototype.deserializeAs_QuestObjectiveValidatedMessage = function(input) {
  this.questId = input.readVarUhShort();
  if (this.questId < 0) {
    throw (new Error((("Forbidden value (" + this.questId) + ") on element of QuestObjectiveValidatedMessage.questId.")));
  };
  this.objectiveId = input.readVarUhShort();
  if (this.objectiveId < 0) {
    throw (new Error((("Forbidden value (" + this.objectiveId) + ") on element of QuestObjectiveValidatedMessage.objectiveId.")));
  };
};

QuestObjectiveValidatedMessage.prototype.getMessageId = function() {
  return 6098;
};

QuestObjectiveValidatedMessage.prototype.getClassName = function() {
  return 'QuestObjectiveValidatedMessage';
};

module.exports.id = 6098;
module.exports.class = QuestObjectiveValidatedMessage;