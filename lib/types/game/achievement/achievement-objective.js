var AchievementObjective = function() {
  this.id = 0;
  this.maxValue = 0;
};



AchievementObjective.prototype.serialize = function(output) {
  this.serializeAs_AchievementObjective(output);
};

AchievementObjective.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementObjective(input);
};

AchievementObjective.prototype.serializeAs_AchievementObjective = function(output) {
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeVarInt(this.id);
  if (this.maxValue < 0) {
    throw (new Error((("Forbidden value (" + this.maxValue) + ") on element maxValue.")));
  };
  output.writeVarShort(this.maxValue);
};

AchievementObjective.prototype.deserializeAs_AchievementObjective = function(input) {
  this.id = input.readVarUhInt();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of AchievementObjective.id.")));
  };
  this.maxValue = input.readVarUhShort();
  if (this.maxValue < 0) {
    throw (new Error((("Forbidden value (" + this.maxValue) + ") on element of AchievementObjective.maxValue.")));
  };
};

AchievementObjective.prototype.getTypeId = function() {
  return 404;
};

AchievementObjective.prototype.getClassName = function() {
  return 'AchievementObjective';
};

module.exports.id = 404;
module.exports.class = AchievementObjective;