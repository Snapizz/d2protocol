var TreasureHuntStepDig = function() {

};

require('util').inherits(TreasureHuntStepDig, require('./treasure-hunt-step.js'));

module.exports = function() {
    return new TreasureHuntStepDig();
};

TreasureHuntStepDig.prototype.serialize = function(output) {
    this.serializeAs_TreasureHuntStepDig(output);
};

TreasureHuntStepDig.prototype.deserialize = function(input) {
    this.deserializeAs_TreasureHuntStepDig(input);
};

TreasureHuntStepDig.prototype.serializeAs_TreasureHuntStepDig = function(param1) {

};

TreasureHuntStepDig.prototype.deserializeAs_TreasureHuntStepDig = function(param1) {

};

TreasureHuntStepDig.prototype.getTypeId = function() {
    return 465;
};

TreasureHuntStepDig.prototype.getClassName = function() {
    return 'TreasureHuntStepDig';
};

module.exports.id = 465;
module.exports.TreasureHuntStepDig = TreasureHuntStepDig;