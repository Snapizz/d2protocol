var AchievementRewardable = function() {
  this.id = 0;
  this.finishedlevel = 0;
};



AchievementRewardable.prototype.serialize = function(output) {
  this.serializeAs_AchievementRewardable(output);
};

AchievementRewardable.prototype.deserialize = function(input) {
  this.deserializeAs_AchievementRewardable(input);
};

AchievementRewardable.prototype.serializeAs_AchievementRewardable = function(output) {
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeVarShort(this.id);
  if ((((this.finishedlevel < 0)) || ((this.finishedlevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.finishedlevel) + ") on element finishedlevel.")));
  };
  output.writeByte(this.finishedlevel);
};

AchievementRewardable.prototype.deserializeAs_AchievementRewardable = function(input) {
  this.id = input.readVarUhShort();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of AchievementRewardable.id.")));
  };
  this.finishedlevel = input.readUnsignedByte();
  if ((((this.finishedlevel < 0)) || ((this.finishedlevel > 200)))) {
    throw (new Error((("Forbidden value (" + this.finishedlevel) + ") on element of AchievementRewardable.finishedlevel.")));
  };
};

AchievementRewardable.prototype.getTypeId = function() {
  return 412;
};

AchievementRewardable.prototype.getClassName = function() {
  return 'AchievementRewardable';
};

module.exports.id = 412;
module.exports.class = AchievementRewardable;