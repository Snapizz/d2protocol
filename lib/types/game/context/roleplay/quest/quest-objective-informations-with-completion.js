var BaseMessage = require('./quest-objective-informations-with-completion.js').class,
  util = require('util');

var QuestObjectiveInformationsWithCompletion = function() {
  this.curCompletion = 0;
  this.maxCompletion = 0;
};

util.inherits(QuestObjectiveInformationsWithCompletion, BaseMessage);

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
  this.deserialize(param1);
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
module.exports.class = QuestObjectiveInformationsWithCompletion;
module.exports.getInstance = function() {
  return new QuestObjectiveInformationsWithCompletion();
};