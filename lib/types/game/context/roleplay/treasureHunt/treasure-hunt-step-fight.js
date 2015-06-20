var BaseMessage = require('./treasure-hunt-step-fight.js').class,
  util = require('util');

var TreasureHuntStepFight = function() {

};

util.inherits(TreasureHuntStepFight, BaseMessage);

TreasureHuntStepFight.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntStepFight(output);
};

TreasureHuntStepFight.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntStepFight(input);
};

TreasureHuntStepFight.prototype.serializeAs_TreasureHuntStepFight = function(param1) {

};

TreasureHuntStepFight.prototype.deserializeAs_TreasureHuntStepFight = function(param1) {

};

TreasureHuntStepFight.prototype.getTypeId = function() {
  return 462;
};

TreasureHuntStepFight.prototype.getClassName = function() {
  return 'TreasureHuntStepFight';
};

module.exports.id = 462;
module.exports.class = TreasureHuntStepFight;
module.exports.getInstance = function() {
  return new TreasureHuntStepFight();
};