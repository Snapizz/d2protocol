var HumanOptionOrnament = module.exports = function() {
    this.ornamentId = 0;

    return this;
};

require('util').inherits(HumanOptionOrnament, require('./human-option.js'));

HumanOptionOrnament.prototype.serialize = function(output) {
    this.serializeAs_HumanOptionOrnament(output);
};

HumanOptionOrnament.prototype.deserialize = function(input) {
    this.deserializeAs_HumanOptionOrnament(input);
};

HumanOptionOrnament.prototype.serializeAs_HumanOptionOrnament = function(param1) {
    this.serializeAs_HumanOption(param1);
    if (this.ornamentId < 0) {
        throw new Error("Forbidden value (" + this.ornamentId + ") on element ornamentId.");
    } else {
        param1.writeVarShort(this.ornamentId);
        return;
    }
};

HumanOptionOrnament.prototype.deserializeAs_HumanOptionOrnament = function(param1) {
    this.deserializeAs_HumanOption(param1);
    this.ornamentId = param1.readVarUhShort();
    if (this.ornamentId < 0) {
        throw new Error("Forbidden value (" + this.ornamentId + ") on element of HumanOptionOrnament.ornamentId.");
    } else {
        return;
    }
};

HumanOptionOrnament.prototype.getTypeId = function() {
    return 411;
};

HumanOptionOrnament.prototype.getClassName = function() {
    return 'HumanOptionOrnament';
};

module.exports.id = 411;