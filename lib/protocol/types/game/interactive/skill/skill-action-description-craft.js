/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SkillActionDescription = require('./skill-action-description');
var SkillActionDescriptionCraft = (function (_super) {
    __extends(SkillActionDescriptionCraft, _super);
    function SkillActionDescriptionCraft() {
        this.probability = 0;
        _super.call(this);
    }
    SkillActionDescriptionCraft.prototype.getTypeId = function () {
        return SkillActionDescriptionCraft.ID;
    };
    SkillActionDescriptionCraft.prototype.reset = function () {
        this.probability = 0;
    };
    SkillActionDescriptionCraft.prototype.serialize = function (param1) {
        this.serializeAs_SkillActionDescriptionCraft(param1);
    };
    SkillActionDescriptionCraft.prototype.serializeAs_SkillActionDescriptionCraft = function (param1) {
        _super.prototype.serializeAs_SkillActionDescription.call(this, param1);
        if (this.probability < 0) {
            throw new Error('Forbidden value (' + this.probability + ') on element probability.');
        }
        param1.writeByte(this.probability);
    };
    SkillActionDescriptionCraft.prototype.deserialize = function (param1) {
        this.deserializeAs_SkillActionDescriptionCraft(param1);
    };
    SkillActionDescriptionCraft.prototype.deserializeAs_SkillActionDescriptionCraft = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.probability = param1.readByte();
        if (this.probability < 0) {
            throw new Error('Forbidden value (' + this.probability + ') on element of SkillActionDescriptionCraft.probability.');
        }
    };
    SkillActionDescriptionCraft.ID = 100;
    return SkillActionDescriptionCraft;
})(SkillActionDescription);
module.exports = SkillActionDescriptionCraft;
