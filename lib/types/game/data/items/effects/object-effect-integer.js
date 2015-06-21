var ObjectEffectInteger = function() {
    this.value = 0;
};

require('util').inherits(ObjectEffectInteger, require('./object-effect.js').ObjectEffect);

module.exports = function() {
    return new ObjectEffectInteger();
};

ObjectEffectInteger.prototype.serialize = function(output) {
    this.serializeAs_ObjectEffectInteger(output);
};

ObjectEffectInteger.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectEffectInteger(input);
};

ObjectEffectInteger.prototype.serializeAs_ObjectEffectInteger = function(param1) {
    this.serializeAs_ObjectEffect(param1);
    if (this.value < 0) {
        throw new Error("Forbidden value (" + this.value + ") on element value.");
    } else {
        param1.writeVarShort(this.value);
        return;
    }
};

ObjectEffectInteger.prototype.deserializeAs_ObjectEffectInteger = function(param1) {
    this.deserializeAs_ObjectEffect(param1);
    this.value = param1.readVarUhShort();
    if (this.value < 0) {
        throw new Error("Forbidden value (" + this.value + ") on element of ObjectEffectInteger.value.");
    } else {
        return;
    }
};

ObjectEffectInteger.prototype.getTypeId = function() {
    return 70;
};

ObjectEffectInteger.prototype.getClassName = function() {
    return 'ObjectEffectInteger';
};

module.exports.id = 70;
module.exports.ObjectEffectInteger = ObjectEffectInteger;