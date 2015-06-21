var InteractiveElementNamedSkill = module.exports = function() {
    this.nameId = 0;

    return this;
};

require('util').inherits(InteractiveElementNamedSkill, require('./interactive-element-skill.js'));

InteractiveElementNamedSkill.prototype.serialize = function(output) {
    this.serializeAs_InteractiveElementNamedSkill(output);
};

InteractiveElementNamedSkill.prototype.deserialize = function(input) {
    this.deserializeAs_InteractiveElementNamedSkill(input);
};

InteractiveElementNamedSkill.prototype.serializeAs_InteractiveElementNamedSkill = function(param1) {
    this.serializeAs_InteractiveElementSkill(param1);
    if (this.nameId < 0) {
        throw new Error("Forbidden value (" + this.nameId + ") on element nameId.");
    } else {
        param1.writeVarInt(this.nameId);
        return;
    }
};

InteractiveElementNamedSkill.prototype.deserializeAs_InteractiveElementNamedSkill = function(param1) {
    this.deserializeAs_InteractiveElementSkill(param1);
    this.nameId = param1.readVarUhInt();
    if (this.nameId < 0) {
        throw new Error("Forbidden value (" + this.nameId + ") on element of InteractiveElementNamedSkill.nameId.");
    } else {
        return;
    }
};

InteractiveElementNamedSkill.prototype.getTypeId = function() {
    return 220;
};

InteractiveElementNamedSkill.prototype.getClassName = function() {
    return 'InteractiveElementNamedSkill';
};

module.exports.id = 220;