var SkillActionDescriptionTimed = function() {
    this.time = 0;
};

require('util').inherits(SkillActionDescriptionTimed, require('./skill-action-description.js').SkillActionDescription);

module.exports = function() {
    return new SkillActionDescriptionTimed();
};

SkillActionDescriptionTimed.prototype.serialize = function(output) {
    this.serializeAs_SkillActionDescriptionTimed(output);
};

SkillActionDescriptionTimed.prototype.deserialize = function(input) {
    this.deserializeAs_SkillActionDescriptionTimed(input);
};

SkillActionDescriptionTimed.prototype.serializeAs_SkillActionDescriptionTimed = function(param1) {
    this.serializeAs_SkillActionDescription(param1);
    if (this.time < 0 || this.time > 255) {
        throw new Error("Forbidden value (" + this.time + ") on element time.");
    } else {
        param1.writeByte(this.time);
        return;
    }
};

SkillActionDescriptionTimed.prototype.deserializeAs_SkillActionDescriptionTimed = function(param1) {
    this.deserializeAs_SkillActionDescription(param1);
    this.time = param1.readUnsignedByte();
    if (this.time < 0 || this.time > 255) {
        throw new Error("Forbidden value (" + this.time + ") on element of SkillActionDescriptionTimed.time.");
    } else {
        return;
    }
};

SkillActionDescriptionTimed.prototype.getTypeId = function() {
    return 103;
};

SkillActionDescriptionTimed.prototype.getClassName = function() {
    return 'SkillActionDescriptionTimed';
};

module.exports.id = 103;
module.exports.SkillActionDescriptionTimed = SkillActionDescriptionTimed;