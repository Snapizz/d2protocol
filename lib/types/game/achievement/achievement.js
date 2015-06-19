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

Achievement.prototype.serializeAs_Achievement = function(output) {
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeVarShort(this.id);
  output.writeShort(this.finishedObjective.length);
  var _i2;
  while (_i2 < this.finishedObjective.length) {
    (this.finishedObjective[_i2]).serializeAs_AchievementObjective(output);
    _i2++;
  };
  output.writeShort(this.startedObjectives.length);
  var _i3;
  while (_i3 < this.startedObjectives.length) {
    (this.startedObjectives[_i3]).serializeAs_AchievementStartedObjective(output);
    _i3++;
  };
};

Achievement.prototype.deserializeAs_Achievement = function(input) {
  var _item2;
  var _item3;
  this.id = input.readVarUhShort();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of Achievement.id.")));
  };
  var _finishedObjectiveLen = input.readUnsignedShort();
  var _i2;
  while (_i2 < _finishedObjectiveLen) {
    _item2 = new AchievementObjective();
    _item2.deserialize(input);
    this.finishedObjective.push(_item2);
    _i2++;
  };
  var _startedObjectivesLen = input.readUnsignedShort();
  var _i3;
  while (_i3 < _startedObjectivesLen) {
    _item3 = new AchievementStartedObjective();
    _item3.deserialize(input);
    this.startedObjectives.push(_item3);
    _i3++;
  };
};

Achievement.prototype.getTypeId = function() {
  return 363;
};

Achievement.prototype.getClassName = function() {
  return 'Achievement';
};

module.exports.id = 363;
module.exports.class = Achievement;