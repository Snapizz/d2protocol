/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InteractiveElementSkill = require('./interactive-element-skill');
var InteractiveElementNamedSkill = (function (_super) {
    __extends(InteractiveElementNamedSkill, _super);
    function InteractiveElementNamedSkill() {
        this.nameId = 0;
        _super.call(this);
    }
    InteractiveElementNamedSkill.prototype.getTypeId = function () {
        return InteractiveElementNamedSkill.ID;
    };
    InteractiveElementNamedSkill.prototype.reset = function () {
        this.nameId = 0;
    };
    InteractiveElementNamedSkill.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveElementNamedSkill(param1);
    };
    InteractiveElementNamedSkill.prototype.serializeAs_InteractiveElementNamedSkill = function (param1) {
        _super.prototype.serializeAs_InteractiveElementSkill.call(this, param1);
        if (this.nameId < 0) {
            throw new Error('Forbidden value (' + this.nameId + ') on element nameId.');
        }
        param1.writeVarInt(this.nameId);
    };
    InteractiveElementNamedSkill.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveElementNamedSkill(param1);
    };
    InteractiveElementNamedSkill.prototype.deserializeAs_InteractiveElementNamedSkill = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.nameId = param1.readVarUhInt();
        if (this.nameId < 0) {
            throw new Error('Forbidden value (' + this.nameId + ') on element of InteractiveElementNamedSkill.nameId.');
        }
    };
    InteractiveElementNamedSkill.ID = 220;
    return InteractiveElementNamedSkill;
})(InteractiveElementSkill);
module.exports = InteractiveElementNamedSkill;
