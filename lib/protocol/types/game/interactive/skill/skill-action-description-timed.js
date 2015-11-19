/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SkillActionDescription = require('./skill-action-description');
var SkillActionDescriptionTimed = (function (_super) {
    __extends(SkillActionDescriptionTimed, _super);
    function SkillActionDescriptionTimed() {
        this.time = 0;
        _super.call(this);
    }
    SkillActionDescriptionTimed.prototype.getTypeId = function () {
        return SkillActionDescriptionTimed.ID;
    };
    SkillActionDescriptionTimed.prototype.reset = function () {
        this.time = 0;
    };
    SkillActionDescriptionTimed.prototype.serialize = function (param1) {
        this.serializeAs_SkillActionDescriptionTimed(param1);
    };
    SkillActionDescriptionTimed.prototype.serializeAs_SkillActionDescriptionTimed = function (param1) {
        _super.prototype.serializeAs_SkillActionDescription.call(this, param1);
        if (this.time < 0 || this.time > 255) {
            throw new Error('Forbidden value (' + this.time + ') on element time.');
        }
        param1.writeByte(this.time);
    };
    SkillActionDescriptionTimed.prototype.deserialize = function (param1) {
        this.deserializeAs_SkillActionDescriptionTimed(param1);
    };
    SkillActionDescriptionTimed.prototype.deserializeAs_SkillActionDescriptionTimed = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.time = param1.readUnsignedByte();
        if (this.time < 0 || this.time > 255) {
            throw new Error('Forbidden value (' + this.time + ') on element of SkillActionDescriptionTimed.time.');
        }
    };
    SkillActionDescriptionTimed.ID = 103;
    return SkillActionDescriptionTimed;
})(SkillActionDescription);
module.exports = SkillActionDescriptionTimed;
