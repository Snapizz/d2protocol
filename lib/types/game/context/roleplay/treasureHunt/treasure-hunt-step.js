var BaseMessage = require('./treasure-hunt-step.js').class,
  util = require('util');

var TreasureHuntStep = function() {

};

util.inherits(TreasureHuntStep, BaseMessage);

TreasureHuntStep.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntStep(output);
};

TreasureHuntStep.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntStep(input);
};

TreasureHuntStep.prototype.serializeAs_TreasureHuntStep = function(param1) {

};

TreasureHuntStep.prototype.deserializeAs_TreasureHuntStep = function(param1) {

};

TreasureHuntStep.prototype.getTypeId = function() {
  return 463;
};

TreasureHuntStep.prototype.getClassName = function() {
  return 'TreasureHuntStep';
};

module.exports.id = 463;
module.exports.class = TreasureHuntStep;
module.exports.getInstance = function() {
  return new TreasureHuntStep();
};