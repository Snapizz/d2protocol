/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObjectEffectCreature = require('./object-effect-creature');
var ObjectEffectLadder = (function (_super) {
    __extends(ObjectEffectLadder, _super);
    function ObjectEffectLadder() {
        this.monsterCount = 0;
        _super.call(this);
    }
    ObjectEffectLadder.prototype.getTypeId = function () {
        return ObjectEffectLadder.ID;
    };
    ObjectEffectLadder.prototype.reset = function () {
        this.monsterCount = 0;
    };
    ObjectEffectLadder.prototype.serialize = function (param1) {
        this.serializeAs_ObjectEffectLadder(param1);
    };
    ObjectEffectLadder.prototype.serializeAs_ObjectEffectLadder = function (param1) {
        _super.prototype.serializeAs_ObjectEffectCreature.call(this, param1);
        if (this.monsterCount < 0) {
            throw new Error('Forbidden value (' + this.monsterCount + ') on element monsterCount.');
        }
        param1.writeVarInt(this.monsterCount);
    };
    ObjectEffectLadder.prototype.deserialize = function (param1) {
        this.deserializeAs_ObjectEffectLadder(param1);
    };
    ObjectEffectLadder.prototype.deserializeAs_ObjectEffectLadder = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.monsterCount = param1.readVarUhInt();
        if (this.monsterCount < 0) {
            throw new Error('Forbidden value (' + this.monsterCount + ') on element of ObjectEffectLadder.monsterCount.');
        }
    };
    ObjectEffectLadder.ID = 81;
    return ObjectEffectLadder;
})(ObjectEffectCreature);
module.exports = ObjectEffectLadder;
