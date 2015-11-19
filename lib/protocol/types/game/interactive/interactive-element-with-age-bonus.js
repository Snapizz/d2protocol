/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InteractiveElement = require('./interactive-element');
var InteractiveElementWithAgeBonus = (function (_super) {
    __extends(InteractiveElementWithAgeBonus, _super);
    function InteractiveElementWithAgeBonus() {
        this.ageBonus = 0;
        _super.call(this);
    }
    InteractiveElementWithAgeBonus.prototype.getTypeId = function () {
        return InteractiveElementWithAgeBonus.ID;
    };
    InteractiveElementWithAgeBonus.prototype.reset = function () {
        this.ageBonus = 0;
    };
    InteractiveElementWithAgeBonus.prototype.serialize = function (param1) {
        this.serializeAs_InteractiveElementWithAgeBonus(param1);
    };
    InteractiveElementWithAgeBonus.prototype.serializeAs_InteractiveElementWithAgeBonus = function (param1) {
        _super.prototype.serializeAs_InteractiveElement.call(this, param1);
        if (this.ageBonus < -1 || this.ageBonus > 1000) {
            throw new Error('Forbidden value (' + this.ageBonus + ') on element ageBonus.');
        }
        param1.writeShort(this.ageBonus);
    };
    InteractiveElementWithAgeBonus.prototype.deserialize = function (param1) {
        this.deserializeAs_InteractiveElementWithAgeBonus(param1);
    };
    InteractiveElementWithAgeBonus.prototype.deserializeAs_InteractiveElementWithAgeBonus = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.ageBonus = param1.readShort();
        if (this.ageBonus < -1 || this.ageBonus > 1000) {
            throw new Error('Forbidden value (' + this.ageBonus + ') on element of InteractiveElementWithAgeBonus.ageBonus.');
        }
    };
    InteractiveElementWithAgeBonus.ID = 398;
    return InteractiveElementWithAgeBonus;
})(InteractiveElement);
module.exports = InteractiveElementWithAgeBonus;
