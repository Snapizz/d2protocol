var QuestObjectiveInformations = function() {
  this.objectiveId = 0;
  this.objectiveStatus = false;
  this.dialogParams = [];
};



QuestObjectiveInformations.prototype.serialize = function(output) {
  this.serializeAs_QuestObjectiveInformations(output);
};

QuestObjectiveInformations.prototype.deserialize = function(input) {
  this.deserializeAs_QuestObjectiveInformations(input);
};

QuestObjectiveInformations.prototype.serializeAs_QuestObjectiveInformations = function(output) {
  if (this.objectiveId < 0) {
    throw (new Error((("Forbidden value (" + this.objectiveId) + ") on element objectiveId.")));
  };
  output.writeVarShort(this.objectiveId);
  output.writeBoolean(this.objectiveStatus);
  output.writeShort(this.dialogParams.length);
  var _i3 = 0;
  while (_i3 < this.dialogParams.length) {
    output.writeUTF(this.dialogParams[_i3]);
    _i3++;
  };
};

QuestObjectiveInformations.prototype.deserializeAs_QuestObjectiveInformations = function(input) {
  var _val3;
  this.objectiveId = input.readVarUhShort();
  if (this.objectiveId < 0) {
    throw (new Error((("Forbidden value (" + this.objectiveId) + ") on element of QuestObjectiveInformations.objectiveId.")));
  };
  this.objectiveStatus = input.readBoolean();
  var _dialogParamsLen = input.readUnsignedShort();
  var _i3 = 0;
  while (_i3 < _dialogParamsLen) {
    _val3 = input.readUTF();
    this.dialogParams.push(_val3);
    _i3++;
  };
};

QuestObjectiveInformations.prototype.getTypeId = function() {
  return 385;
};

QuestObjectiveInformations.prototype.getClassName = function() {
  return 'QuestObjectiveInformations';
};

module.exports.id = 385;
module.exports.class = QuestObjectiveInformations;