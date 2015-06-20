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

AchievementObjective.prototype.serializeAs_AchievementObjective = function(param1) {
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeVarInt(this.id);
    if (this.maxValue < 0) {
      throw new Error("Forbidden value (" + this.maxValue + ") on element maxValue.");
    } else {
      param1.writeVarShort(this.maxValue);
      return;
    }
  }
};

AchievementObjective.prototype.deserializeAs_AchievementObjective = function(param1) {
  this.id = param1.readVarUhInt();
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element of AchievementObjective.id.");
  } else {
    this.maxValue = param1.readVarUhShort();
    if (this.maxValue < 0) {
      throw new Error("Forbidden value (" + this.maxValue + ") on element of AchievementObjective.maxValue.");
    } else {
      return;
    }
  }
};

AchievementObjective.prototype.getTypeId = function() {
  return 404;
};

AchievementObjective.prototype.getClassName = function() {
  return 'AchievementObjective';
};

module.exports.id = 404;
module.exports.class = AchievementObjective;