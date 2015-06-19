var QuestActiveInformations = function() {
  this.questId = 0;
};



QuestActiveInformations.prototype.serialize = function(output) {
  this.serializeAs_QuestActiveInformations(output);
};

QuestActiveInformations.prototype.deserialize = function(input) {
  this.deserializeAs_QuestActiveInformations(input);
};

QuestActiveInformations.prototype.serializeAs_QuestActiveInformations = function(output) {
  if (this.questId < 0) {
    throw (new Error((("Forbidden value (" + this.questId) + ") on element questId.")));
  };
  output.writeVarShort(this.questId);
};

QuestActiveInformations.prototype.deserializeAs_QuestActiveInformations = function(input) {
  this.questId = input.readVarUhShort();
  if (this.questId < 0) {
    throw (new Error((("Forbidden value (" + this.questId) + ") on element of QuestActiveInformations.questId.")));
  };
};

QuestActiveInformations.prototype.getTypeId = function() {
  return 381;
};

QuestActiveInformations.prototype.getClassName = function() {
  return 'QuestActiveInformations';
};

module.exports.id = 381;
module.exports.class = QuestActiveInformations;