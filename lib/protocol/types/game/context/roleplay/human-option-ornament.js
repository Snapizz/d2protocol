/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HumanOption = require('./human-option');
var HumanOptionOrnament = (function (_super) {
    __extends(HumanOptionOrnament, _super);
    function HumanOptionOrnament() {
        this.ornamentId = 0;
        _super.call(this);
    }
    HumanOptionOrnament.prototype.getTypeId = function () {
        return HumanOptionOrnament.ID;
    };
    HumanOptionOrnament.prototype.reset = function () {
        this.ornamentId = 0;
    };
    HumanOptionOrnament.prototype.serialize = function (param1) {
        this.serializeAs_HumanOptionOrnament(param1);
    };
    HumanOptionOrnament.prototype.serializeAs_HumanOptionOrnament = function (param1) {
        _super.prototype.serializeAs_HumanOption.call(this, param1);
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element ornamentId.');
        }
        param1.writeVarShort(this.ornamentId);
    };
    HumanOptionOrnament.prototype.deserialize = function (param1) {
        this.deserializeAs_HumanOptionOrnament(param1);
    };
    HumanOptionOrnament.prototype.deserializeAs_HumanOptionOrnament = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.ornamentId = param1.readVarUhShort();
        if (this.ornamentId < 0) {
            throw new Error('Forbidden value (' + this.ornamentId + ') on element of HumanOptionOrnament.ornamentId.');
        }
    };
    HumanOptionOrnament.ID = 411;
    return HumanOptionOrnament;
})(HumanOption);
module.exports = HumanOptionOrnament;
