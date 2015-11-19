/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SkillActionDescriptionTimed = require('./skill-action-description-timed');
var SkillActionDescriptionCollect = (function (_super) {
    __extends(SkillActionDescriptionCollect, _super);
    function SkillActionDescriptionCollect() {
        this.min = 0;
        this.max = 0;
        _super.call(this);
    }
    SkillActionDescriptionCollect.prototype.getTypeId = function () {
        return SkillActionDescriptionCollect.ID;
    };
    SkillActionDescriptionCollect.prototype.reset = function () {
        this.min = 0;
        this.max = 0;
    };
    SkillActionDescriptionCollect.prototype.serialize = function (param1) {
        this.serializeAs_SkillActionDescriptionCollect(param1);
    };
    SkillActionDescriptionCollect.prototype.serializeAs_SkillActionDescriptionCollect = function (param1) {
        _super.prototype.serializeAs_SkillActionDescriptionTimed.call(this, param1);
        if (this.min < 0) {
            throw new Error('Forbidden value (' + this.min + ') on element min.');
        }
        param1.writeVarShort(this.min);
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element max.');
        }
        param1.writeVarShort(this.max);
    };
    SkillActionDescriptionCollect.prototype.deserialize = function (param1) {
        this.deserializeAs_SkillActionDescriptionCollect(param1);
    };
    SkillActionDescriptionCollect.prototype.deserializeAs_SkillActionDescriptionCollect = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.min = param1.readVarUhShort();
        if (this.min < 0) {
            throw new Error('Forbidden value (' + this.min + ') on element of SkillActionDescriptionCollect.min.');
        }
        this.max = param1.readVarUhShort();
        if (this.max < 0) {
            throw new Error('Forbidden value (' + this.max + ') on element of SkillActionDescriptionCollect.max.');
        }
    };
    SkillActionDescriptionCollect.ID = 99;
    return SkillActionDescriptionCollect;
})(SkillActionDescriptionTimed);
module.exports = SkillActionDescriptionCollect;
