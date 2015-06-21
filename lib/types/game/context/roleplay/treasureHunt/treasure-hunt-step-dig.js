var TreasureHuntStepDig = module.exports = function() {


    return this;
};

require('util').inherits(TreasureHuntStepDig, require('./treasure-hunt-step.js'));

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