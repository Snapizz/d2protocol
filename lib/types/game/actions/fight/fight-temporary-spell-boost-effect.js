var FightTemporarySpellBoostEffect = module.exports = function() {
    this.boostedSpellId = 0;

    return this;
};

require('util').inherits(FightTemporarySpellBoostEffect, require('./fight-temporary-boost-effect.js'));

FightTemporarySpellBoostEffect.prototype.serialize = function(output) {
    this.serializeAs_FightTemporarySpellBoostEffect(output);
};

FightTemporarySpellBoostEffect.prototype.deserialize = function(input) {
    this.deserializeAs_FightTemporarySpellBoostEffect(input);
};

FightTemporarySpellBoostEffect.prototype.serializeAs_FightTemporarySpellBoostEffect = function(param1) {
    this.serializeAs_FightTemporaryBoostEffect(param1);
    if (this.boostedSpellId < 0) {
        throw new Error("Forbidden value (" + this.boostedSpellId + ") on element boostedSpellId.");
    } else {
        param1.writeVarShort(this.boostedSpellId);
        return;
    }
};

FightTemporarySpellBoostEffect.prototype.deserializeAs_FightTemporarySpellBoostEffect = function(param1) {
    this.deserializeAs_FightTemporaryBoostEffect(param1);
    this.boostedSpellId = param1.readVarUhShort();
    if (this.boostedSpellId < 0) {
        throw new Error("Forbidden value (" + this.boostedSpellId + ") on element of FightTemporarySpellBoostEffect.boostedSpellId.");
    } else {
        return;
    }
};

FightTemporarySpellBoostEffect.prototype.getTypeId = function() {
    return 207;
};

FightTemporarySpellBoostEffect.prototype.getClassName = function() {
    return 'FightTemporarySpellBoostEffect';
};

module.exports.id = 207;