var ObjectEffectCreature = function() {
    this.monsterFamilyId = 0;
};

require('util').inherits(ObjectEffectCreature, require('./object-effect.js').class);

ObjectEffectCreature.prototype.serialize = function(output) {
    this.serializeAs_ObjectEffectCreature(output);
};

ObjectEffectCreature.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectEffectCreature(input);
};

ObjectEffectCreature.prototype.serializeAs_ObjectEffectCreature = function(param1) {
    this.serializeAs_ObjectEffectAs_ObjectEffect(param1);
    if (this.monsterFamilyId < 0) {
        throw new Error("Forbidden value (" + this.monsterFamilyId + ") on element monsterFamilyId.");
    } else {
        param1.writeVarShort(this.monsterFamilyId);
        return;
    }
};

ObjectEffectCreature.prototype.deserializeAs_ObjectEffectCreature = function(param1) {
    this.deserializeAs_ObjectEffect(param1);
    this.monsterFamilyId = param1.readVarUhShort();
    if (this.monsterFamilyId < 0) {
        throw new Error("Forbidden value (" + this.monsterFamilyId + ") on element of ObjectEffectCreature.monsterFamilyId.");
    } else {
        return;
    }
};

ObjectEffectCreature.prototype.getTypeId = function() {
    return 71;
};

ObjectEffectCreature.prototype.getClassName = function() {
    return 'ObjectEffectCreature';
};

module.exports.id = 71;
module.exports.class = ObjectEffectCreature;
module.exports.getInstance = function() {
    return new ObjectEffectCreature;
};