var BaseMessage = require('./abstract-fight-dispellable-effect.js').class,
  util = require('util');

var FightTriggeredEffect = function() {
  this.param1 = 0;
  this.param2 = 0;
  this.param3 = 0;
  this.delay = 0;
};

util.inherits(FightTriggeredEffect, BaseMessage);

FightTriggeredEffect.prototype.serialize = function(output) {
  this.serializeAs_FightTriggeredEffect(output);
};

FightTriggeredEffect.prototype.deserialize = function(input) {
  this.deserializeAs_FightTriggeredEffect(input);
};

FightTriggeredEffect.prototype.serializeAs_FightTriggeredEffect = function(output) {
  this.serializeAs_AbstractFightDispellableEffect(output);
  output.writeInt(this.param1);
  output.writeInt(this.param2);
  output.writeInt(this.param3);
  output.writeShort(this.delay);
};

FightTriggeredEffect.prototype.deserializeAs_FightTriggeredEffect = function(input) {
  this.deserialize(input);
  this.param1 = input.readInt();
  this.param2 = input.readInt();
  this.param3 = input.readInt();
  this.delay = input.readShort();
};

FightTriggeredEffect.prototype.getTypeId = function() {
  return 210;
};

FightTriggeredEffect.prototype.getClassName = function() {
  return 'FightTriggeredEffect';
};

module.exports.id = 210;
module.exports.class = FightTriggeredEffect;