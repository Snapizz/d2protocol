var FightTriggeredEffect = function() {
  this.param1 = 0;
  this.param2 = 0;
  this.param3 = 0;
  this.delay = 0;
};



FightTriggeredEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTriggeredEffect(output);
};

FightTriggeredEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTriggeredEffect(input);
};

FightTriggeredEffect.prototype.serializeAs_FightTriggeredEffect = function(param1) {
  this.serializeAs_AbstractFightDispellableEffect(param1);
  param1.writeInt(this.param1);
  param1.writeInt(this.param2);
  param1.writeInt(this.param3);
  param1.writeShort(this.delay);
};

FightTriggeredEffect.prototype.deserializeAs_FightTriggeredEffect = function(param1) {
  super.deserialize(param1);
  this.param1 = param1.readInt();
  this.param2 = param1.readInt();
  this.param3 = param1.readInt();
  this.delay = param1.readShort();
};

FightTriggeredEffect.prototype.getTypeId = function() {
  return 210;
};

FightTriggeredEffect.prototype.getClassName = function() {
  return 'FightTriggeredEffect';
};

module.exports.id = 210;
module.exports.class = FightTriggeredEffect;
module.exports.getInstance = function() {
  return new FightTriggeredEffect();
};