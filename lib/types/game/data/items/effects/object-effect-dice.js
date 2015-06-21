var ObjectEffectDice = function() {
    this.diceNum = 0;
    this.diceSide = 0;
    this.diceConst = 0;
};

require('util').inherits(ObjectEffectDice, require('./object-effect.js').class);

ObjectEffectDice.prototype.serialize = function(output) {
    this.serializeAs_ObjectEffectDice(output);
};

ObjectEffectDice.prototype.deserialize = function(input) {
    this.deserializeAs_ObjectEffectDice(input);
};

ObjectEffectDice.prototype.serializeAs_ObjectEffectDice = function(param1) {
    this.serializeAs_ObjectEffect(param1);
    if (this.diceNum < 0) {
        throw new Error("Forbidden value (" + this.diceNum + ") on element diceNum.");
    } else {
        param1.writeVarShort(this.diceNum);
        if (this.diceSide < 0) {
            throw new Error("Forbidden value (" + this.diceSide + ") on element diceSide.");
        } else {
            param1.writeVarShort(this.diceSide);
            if (this.diceConst < 0) {
                throw new Error("Forbidden value (" + this.diceConst + ") on element diceConst.");
            } else {
                param1.writeVarShort(this.diceConst);
                return;
            }
        }
    }
};

ObjectEffectDice.prototype.deserializeAs_ObjectEffectDice = function(param1) {
    this.deserializeAs_ObjectEffect(param1);
    this.diceNum = param1.readVarUhShort();
    if (this.diceNum < 0) {
        throw new Error("Forbidden value (" + this.diceNum + ") on element of ObjectEffectDice.diceNum.");
    } else {
        this.diceSide = param1.readVarUhShort();
        if (this.diceSide < 0) {
            throw new Error("Forbidden value (" + this.diceSide + ") on element of ObjectEffectDice.diceSide.");
        } else {
            this.diceConst = param1.readVarUhShort();
            if (this.diceConst < 0) {
                throw new Error("Forbidden value (" + this.diceConst + ") on element of ObjectEffectDice.diceConst.");
            } else {
                return;
            }
        }
    }
};

ObjectEffectDice.prototype.getTypeId = function() {
    return 73;
};

ObjectEffectDice.prototype.getClassName = function() {
    return 'ObjectEffectDice';
};

module.exports.id = 73;
module.exports.class = ObjectEffectDice;
module.exports.getInstance = function() {
    return new ObjectEffectDice;
};