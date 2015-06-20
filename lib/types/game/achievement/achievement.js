var Achievement = function() {
  this.id = 0;
  this.finishedObjective = [];
  this.startedObjectives = [];
};



Achievement.prototype.serialize = function(output) {
  this.serializeAs_Achievement(output);
};

Achievement.prototype.deserialize = function(input) {
  this.deserializeAs_Achievement(input);
};

Achievement.prototype.serializeAs_Achievement = function(param1) {
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element id.");
  } else {
    param1.writeVarShort(this.id);
    param1.writeShort(this.finishedObjective.length);
    var _loc2_ = 0;
    while (_loc2_ < this.finishedObjective.length) {
      (this.finishedObjective[_loc2_]).serializeAs_AchievementObjective(param1);
      _loc2_++;
    }
    param1.writeShort(this.startedObjectives.length);
    var _loc3_ = 0;
    while (_loc3_ < this.startedObjectives.length) {
      (this.startedObjectives[_loc3_]).serializeAs_AchievementStartedObjective(param1);
      _loc3_++;
    }
    return;
  }
};

Achievement.prototype.deserializeAs_Achievement = function(param1) {
  var _loc6_ = null;
  var _loc7_ = null;
  this.id = param1.readVarUhShort();
  if (this.id < 0) {
    throw new Error("Forbidden value (" + this.id + ") on element of Achievement.id.");
  } else {
    var _loc2_ = param1.readUnsignedShort();
    var _loc3_ = 0;
    while (_loc3_ < _loc2_) {
      _loc6_ = new AchievementObjective();
      _loc6_.deserialize(param1);
      this.finishedObjective.push(_loc6_);
      _loc3_++;
    }
    var _loc4_ = param1.readUnsignedShort();
    var _loc5_ = 0;
    while (_loc5_ < _loc4_) {
      _loc7_ = new AchievementStartedObjective();
      _loc7_.deserialize(param1);
      this.startedObjectives.push(_loc7_);
      _loc5_++;
    }
    return;
  }
};

Achievement.prototype.getTypeId = function() {
  return 363;
};

Achievement.prototype.getClassName = function() {
  return 'Achievement';
};

module.exports.id = 363;
module.exports.class = Achievement;
module.exports.getInstance = function() {
  return new Achievement();
};