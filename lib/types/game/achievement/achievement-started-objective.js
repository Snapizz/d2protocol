var BaseMessage = require('./achievement-objective.js').class,
  util = require('util');

var AchievementStartedObjective = function() {
  this.value = 0;
};

util.inherits(AchievementStartedObjective, BaseMessage);

AchievementStartedObjective.prototype.serialize = function(output) {
  this.serializeAs_AchievementStartedObjective(output);
};

AchievementStartedObjective.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementStartedObjective(input);
};

AchievementStartedObjective.prototype.serializeAs_AchievementStartedObjective = function(output) {
  this.serializeAs_AchievementObjective(output);
  if (this.value < 0) {
    throw (new Error((("Forbidden value (" + this.value) + ") on element value.")));
  };
  output.writeVarShort(this.value);
};

AchievementStartedObjective.prototype.deserializeAs_AchievementStartedObjective = function(input) {
  this.deserialize(input);
  this.value = input.readVarUhShort();
  if (this.value < 0) {
    throw (new Error((("Forbidden value (" + this.value) + ") on element of AchievementStartedObjective.value.")));
  };
};

AchievementStartedObjective.prototype.getTypeId = function() {
  return 402;
};

AchievementStartedObjective.prototype.getClassName = function() {
  return 'AchievementStartedObjective';
};

module.exports.id = 402;
module.exports.class = AchievementStartedObjective;