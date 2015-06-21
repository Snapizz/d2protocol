var SkillActionDescription = function() {
    this.skillId = 0;
};

SkillActionDescription.prototype.serialize = function(output) {
    this.serializeAs_SkillActionDescription(output);
};

SkillActionDescription.prototype.deserialize = function(input) {
    this.deserializeAs_SkillActionDescription(input);
};

SkillActionDescription.prototype.serializeAs_SkillActionDescription = function(param1) {
    if (this.skillId < 0) {
        throw new Error("Forbidden value (" + this.skillId + ") on element skillId.");
    } else {
        param1.writeVarShort(this.skillId);
        return;
    }
};

SkillActionDescription.prototype.deserializeAs_SkillActionDescription = function(param1) {
    this.skillId = param1.readVarUhShort();
    if (this.skillId < 0) {
        throw new Error("Forbidden value (" + this.skillId + ") on element of SkillActionDescription.skillId.");
    } else {
        return;
    }
};

SkillActionDescription.prototype.getTypeId = function() {
    return 102;
};

SkillActionDescription.prototype.getClassName = function() {
    return 'SkillActionDescription';
};

module.exports.id = 102;
module.exports.class = SkillActionDescription;
module.exports.getInstance = function() {
    return new SkillActionDescription;
};