var FightTemporaryBoostEffect = function() {
    this.delta = 0;
};

require('util').inherits(FightTemporaryBoostEffect, require('./abstract-fight-dispellable-effect.js').class);

FightTemporaryBoostEffect.prototype.serialize = function(output) {
    this.serializeAs_FightTemporaryBoostEffect(output);
};

FightTemporaryBoostEffect.prototype.deserialize = function(input) {
    this.deserializeAs_FightTemporaryBoostEffect(input);
};

FightTemporaryBoostEffect.prototype.serializeAs_FightTemporaryBoostEffect = function(param1) {
    this.serializeAs_AbstractFightDispellableEffect(param1);
    param1.writeShort(this.delta);
};

FightTemporaryBoostEffect.prototype.deserializeAs_FightTemporaryBoostEffect = function(param1) {
    this.deserializeAs_AbstractFightDispellableEffect(param1);
    this.delta = param1.readShort();
};

FightTemporaryBoostEffect.prototype.getTypeId = function() {
    return 209;
};

FightTemporaryBoostEffect.prototype.getClassName = function() {
    return 'FightTemporaryBoostEffect';
};

module.exports.id = 209;
module.exports.class = FightTemporaryBoostEffect;
module.exports.getInstance = function() {
    return new FightTemporaryBoostEffect;
};