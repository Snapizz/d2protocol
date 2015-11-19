/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var SkillActionDescription = (function () {
    function SkillActionDescription() {
        this.skillId = 0;
    }
    SkillActionDescription.prototype.getTypeId = function () {
        return SkillActionDescription.ID;
    };
    SkillActionDescription.prototype.reset = function () {
        this.skillId = 0;
    };
    SkillActionDescription.prototype.serialize = function (param1) {
        this.serializeAs_SkillActionDescription(param1);
    };
    SkillActionDescription.prototype.serializeAs_SkillActionDescription = function (param1) {
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarShort(this.skillId);
    };
    SkillActionDescription.prototype.deserialize = function (param1) {
        this.deserializeAs_SkillActionDescription(param1);
    };
    SkillActionDescription.prototype.deserializeAs_SkillActionDescription = function (param1) {
        this.skillId = param1.readVarUhShort();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of SkillActionDescription.skillId.');
        }
    };
    SkillActionDescription.ID = 102;
    return SkillActionDescription;
})();
module.exports = SkillActionDescription;
