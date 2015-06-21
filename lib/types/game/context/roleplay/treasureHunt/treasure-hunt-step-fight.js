var TreasureHuntStepFight = function() {

};

require('util').inherits(TreasureHuntStepFight, require('./treasure-hunt-step.js'));

module.exports = function() {
    return new TreasureHuntStepFight();
};

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
module.exports.TreasureHuntStepFight = TreasureHuntStepFight;