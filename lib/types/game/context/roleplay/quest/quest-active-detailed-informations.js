var BaseMessage = require('./quest-active-informations.js').class,
  util = require('util');

var QuestActiveDetailedInformations = function() {
  this.stepId = 0;
  this.objectives = [];
};

util.inherits(QuestActiveDetailedInformations, BaseMessage);

QuestActiveDetailedInformations.prototype.serialize = function(output) {
  this.serializeAs_QuestActiveDetailedInformations(output);
};

QuestActiveDetailedInformations.prototype.deserialize = function(input) {
  this.deserializeAs_QuestActiveDetailedInformations(input);
};

QuestActiveDetailedInformations.prototype.serializeAs_QuestActiveDetailedInformations = function(output) {
  this.serializeAs_QuestActiveInformations(output);
  if (this.stepId < 0) {
    throw (new Error((("Forbidden value (" + this.stepId) + ") on element stepId.")));
  };
  output.writeVarShort(this.stepId);
  output.writeShort(this.objectives.length);
  var _i2 = 0;
  while (_i2 < this.objectives.length) {
    output.writeShort((this.objectives[_i2]).getTypeId());
    (this.objectives[_i2]).serialize(output);
    _i2++;
  };
};

QuestActiveDetailedInformations.prototype.deserializeAs_QuestActiveDetailedInformations = function(input) {
  var _id2 = 0;
  var _item2;
  this.deserialize(input);
  this.stepId = input.readVarUhShort();
  if (this.stepId < 0) {
    throw (new Error((("Forbidden value (" + this.stepId) + ") on element of QuestActiveDetailedInformations.stepId.")));
  };
  var _objectivesLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _objectivesLen) {
    _id2 = input.readUnsignedShort();
    _item2 = ProtocolTypeManager.getInstance(QuestObjectiveInformations, _id2);
    _item2.deserialize(input);
    this.objectives.push(_item2);
    _i2++;
  };
};

QuestActiveDetailedInformations.prototype.getTypeId = function() {
  return 382;
};

QuestActiveDetailedInformations.prototype.getClassName = function() {
  return 'QuestActiveDetailedInformations';
};

module.exports.id = 382;
module.exports.class = QuestActiveDetailedInformations;