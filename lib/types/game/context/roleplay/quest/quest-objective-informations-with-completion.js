var BaseMessage = require('./quest-objective-informations.js').class,
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

QuestObjectiveInformationsWithCompletion.prototype.serializeAs_QuestObjectiveInformationsWithCompletion = function(output) {
  this.serializeAs_QuestObjectiveInformations(output);
  if (this.curCompletion < 0) {
    throw (new Error((("Forbidden value (" + this.curCompletion) + ") on element curCompletion.")));
  };
  output.writeVarShort(this.curCompletion);
  if (this.maxCompletion < 0) {
    throw (new Error((("Forbidden value (" + this.maxCompletion) + ") on element maxCompletion.")));
  };
  output.writeVarShort(this.maxCompletion);
};

QuestObjectiveInformationsWithCompletion.prototype.deserializeAs_QuestObjectiveInformationsWithCompletion = function(input) {
  this.deserialize(input);
  this.curCompletion = input.readVarUhShort();
  if (this.curCompletion < 0) {
    throw (new Error((("Forbidden value (" + this.curCompletion) + ") on element of QuestObjectiveInformationsWithCompletion.curCompletion.")));
  };
  this.maxCompletion = input.readVarUhShort();
  if (this.maxCompletion < 0) {
    throw (new Error((("Forbidden value (" + this.maxCompletion) + ") on element of QuestObjectiveInformationsWithCompletion.maxCompletion.")));
  };
};

QuestObjectiveInformationsWithCompletion.prototype.getTypeId = function() {
  return 386;
};

QuestObjectiveInformationsWithCompletion.prototype.getClassName = function() {
  return 'QuestObjectiveInformationsWithCompletion';
};

module.exports.id = 386;
module.exports.class = QuestObjectiveInformationsWithCompletion;