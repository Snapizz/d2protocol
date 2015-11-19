/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var InteractiveElementSkill = (function () {
    function InteractiveElementSkill() {
        this.skillId = 0;
        this.skillInstanceUid = 0;
    }
    InteractiveElementSkill.prototype.getTypeId = function () {
        return InteractiveElementSkill.ID;
    };
    InteractiveElementSkill.prototype.reset = function () {
        this.skillId = 0;
        this.skillInstanceUid = 0;
    };
    InteractiveElementSkill.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveElementSkill(param1);
    };
    InteractiveElementSkill.prototype.serializeAs_InteractiveElementSkill = function (param1) {
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element skillId.');
        }
        param1.writeVarInt(this.skillId);
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element skillInstanceUid.');
        }
        param1.writeInt(this.skillInstanceUid);
    };
    InteractiveElementSkill.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveElementSkill(param1);
    };
    InteractiveElementSkill.prototype.deserializeAs_InteractiveElementSkill = function (param1) {
        this.skillId = param1.readVarUhInt();
        if (this.skillId < 0) {
            throw new Error('Forbidden value (' + this.skillId + ') on element of InteractiveElementSkill.skillId.');
        }
        this.skillInstanceUid = param1.readInt();
        if (this.skillInstanceUid < 0) {
            throw new Error('Forbidden value (' + this.skillInstanceUid + ') on element of InteractiveElementSkill.skillInstanceUid.');
        }
    };
    InteractiveElementSkill.ID = 219;
    return InteractiveElementSkill;
})();
module.exports = InteractiveElementSkill;
