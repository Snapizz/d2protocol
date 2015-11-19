/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Idol = require('./idol');
var PartyIdol = (function (_super) {
    __extends(PartyIdol, _super);
    function PartyIdol() {
        this.ownersIds = [];
        _super.call(this);
    }
    PartyIdol.prototype.getTypeId = function () {
        return PartyIdol.ID;
    };
    PartyIdol.prototype.reset = function () {
        this.ownersIds = [];
    };
    PartyIdol.prototype.serialize = function (param1) {
        this.serializeAs_PartyIdol(param1);
    };
    PartyIdol.prototype.serializeAs_PartyIdol = function (param1) {
        _super.prototype.serializeAs_Idol.call(this, param1);
        param1.writeShort(this.ownersIds.length);
        var _loc2_ = 0;
        while (_loc2_ < this.ownersIds.length) {
            param1.writeInt(this.ownersIds[_loc2_]);
            _loc2_++;
        }
    };
    PartyIdol.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyIdol(param1);
    };
    PartyIdol.prototype.deserializeAs_PartyIdol = function (param1) {
        var _loc4_ = 0;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readInt();
            this.ownersIds.push(_loc4_);
            _loc3_++;
        }
    };
    PartyIdol.ID = 490;
    return PartyIdol;
})(Idol);
module.exports = PartyIdol;
