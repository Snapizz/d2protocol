var SkillActionDescriptionCraft = function() {
    this.maxSlots = 0;
    this.probability = 0;
};

require('util').inherits(SkillActionDescriptionCraft, require('./skill-action-description.js').class);

SkillActionDescriptionCraft.prototype.serialize = function(output) {
    this.serializeAs_SkillActionDescriptionCraft(output);
};

SkillActionDescriptionCraft.prototype.deserialize = function(input) {
    this.deserializeAs_SkillActionDescriptionCraft(input);
};

SkillActionDescriptionCraft.prototype.serializeAs_SkillActionDescriptionCraft = function(param1) {
    this.serializeAs_SkillActionDescriptionAs_SkillActionDescription(param1);
    if (this.maxSlots < 0) {
        throw new Error("Forbidden value (" + this.maxSlots + ") on element maxSlots.");
    } else {
        param1.writeByte(this.maxSlots);
        if (this.probability < 0) {
            throw new Error("Forbidden value (" + this.probability + ") on element probability.");
        } else {
            param1.writeByte(this.probability);
            return;
        }
    }
};

SkillActionDescriptionCraft.prototype.deserializeAs_SkillActionDescriptionCraft = function(param1) {
    this.deserializeAs_SkillActionDescription(param1);
    this.maxSlots = param1.readByte();
    if (this.maxSlots < 0) {
        throw new Error("Forbidden value (" + this.maxSlots + ") on element of SkillActionDescriptionCraft.maxSlots.");
    } else {
        this.probability = param1.readByte();
        if (this.probability < 0) {
            throw new Error("Forbidden value (" + this.probability + ") on element of SkillActionDescriptionCraft.probability.");
        } else {
            return;
        }
    }
};

SkillActionDescriptionCraft.prototype.getTypeId = function() {
    return 100;
};

SkillActionDescriptionCraft.prototype.getClassName = function() {
    return 'SkillActionDescriptionCraft';
};

module.exports.id = 100;
module.exports.class = SkillActionDescriptionCraft;
module.exports.getInstance = function() {
    return new SkillActionDescriptionCraft;
};