var ObjectEffect = function() {
    this.actionId = 0;
};

module.exports = function() {
    return new ObjectEffect();
};

ObjectEffect.prototype.serialize = function(output) {
    this.serializeAs_ObjectEffect(output);
};

ObjectEffect.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectEffect(input);
};

ObjectEffect.prototype.serializeAs_ObjectEffect = function(param1) {
    if (this.actionId < 0) {
        throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
    } else {
        param1.writeVarShort(this.actionId);
        return;
    }
};

ObjectEffect.prototype.deserializeAs_ObjectEffect = function(param1) {
    this.actionId = param1.readVarUhShort();
    if (this.actionId < 0) {
        throw new Error("Forbidden value (" + this.actionId + ") on element of ObjectEffect.actionId.");
    } else {
        return;
    }
};

ObjectEffect.prototype.getTypeId = function() {
    return 76;
};

ObjectEffect.prototype.getClassName = function() {
    return 'ObjectEffect';
};

module.exports.id = 76;
module.exports.ObjectEffect = ObjectEffect;