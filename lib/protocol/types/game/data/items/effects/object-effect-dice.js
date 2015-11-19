/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectEffect = require('./object-effect');
var ObjectEffectDice = (function (_super) {
    __extends(ObjectEffectDice, _super);
    function ObjectEffectDice() {
        this.diceNum = 0;
        this.diceSide = 0;
        this.diceConst = 0;
        _super.call(this);
    }
    ObjectEffectDice.prototype.getTypeId = function () {
        return ObjectEffectDice.ID;
    };
    ObjectEffectDice.prototype.reset = function () {
        this.diceNum = 0;
        this.diceSide = 0;
        this.diceConst = 0;
    };
    ObjectEffectDice.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffectDice(param1);
    };
    ObjectEffectDice.prototype.serializeAs_ObjectEffectDice = function (param1) {
        _super.prototype.serializeAs_ObjectEffect.call(this, param1);
        if (this.diceNum < 0) {
            throw new Error('Forbidden value (' + this.diceNum + ') on element diceNum.');
        }
        param1.writeVarShort(this.diceNum);
        if (this.diceSide < 0) {
            throw new Error('Forbidden value (' + this.diceSide + ') on element diceSide.');
        }
        param1.writeVarShort(this.diceSide);
        if (this.diceConst < 0) {
            throw new Error('Forbidden value (' + this.diceConst + ') on element diceConst.');
        }
        param1.writeVarShort(this.diceConst);
    };
    ObjectEffectDice.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffectDice(param1);
    };
    ObjectEffectDice.prototype.deserializeAs_ObjectEffectDice = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.diceNum = param1.readVarUhShort();
        if (this.diceNum < 0) {
            throw new Error('Forbidden value (' + this.diceNum + ') on element of ObjectEffectDice.diceNum.');
        }
        this.diceSide = param1.readVarUhShort();
        if (this.diceSide < 0) {
            throw new Error('Forbidden value (' + this.diceSide + ') on element of ObjectEffectDice.diceSide.');
        }
        this.diceConst = param1.readVarUhShort();
        if (this.diceConst < 0) {
            throw new Error('Forbidden value (' + this.diceConst + ') on element of ObjectEffectDice.diceConst.');
        }
    };
    ObjectEffectDice.ID = 73;
    return ObjectEffectDice;
})(ObjectEffect);
module.exports = ObjectEffectDice;
