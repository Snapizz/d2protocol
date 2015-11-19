/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AlternativeMonstersInGroupLightInformations = require('./alternative-monsters-in-group-light-informations');
var GroupMonsterStaticInformations = require('./group-monster-static-informations');
var GroupMonsterStaticInformationsWithAlternatives = (function (_super) {
    __extends(GroupMonsterStaticInformationsWithAlternatives, _super);
    function GroupMonsterStaticInformationsWithAlternatives() {
        this.alternatives = [];
        _super.call(this);
    }
    GroupMonsterStaticInformationsWithAlternatives.prototype.getTypeId = function () {
        return GroupMonsterStaticInformationsWithAlternatives.ID;
    };
    GroupMonsterStaticInformationsWithAlternatives.prototype.reset = function () {
        this.alternatives = [];
    };
    GroupMonsterStaticInformationsWithAlternatives.prototype.serialize = function (param1) {
        this.serializeAs_GroupMonsterStaticInformationsWithAlternatives(param1);
    };
    GroupMonsterStaticInformationsWithAlternatives.prototype.serializeAs_GroupMonsterStaticInformationsWithAlternatives = function (param1) {
        _super.prototype.serializeAs_GroupMonsterStaticInformations.call(this, param1);
        param1.writeShort(this.alternatives.length);
        var _loc2_ = 0;
        while (_loc2_ < this.alternatives.length) {
            (this.alternatives[_loc2_]).serializeAs_AlternativeMonstersInGroupLightInformations(param1);
            _loc2_++;
        }
    };
    GroupMonsterStaticInformationsWithAlternatives.prototype.deserialize = function (param1) {
        this.deserializeAs_GroupMonsterStaticInformationsWithAlternatives(param1);
    };
    GroupMonsterStaticInformationsWithAlternatives.prototype.deserializeAs_GroupMonsterStaticInformationsWithAlternatives = function (param1) {
        var _loc4_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new AlternativeMonstersInGroupLightInformations();
            _loc4_.deserialize(param1);
            this.alternatives.push(_loc4_);
            _loc3_++;
        }
    };
    GroupMonsterStaticInformationsWithAlternatives.ID = 396;
    return GroupMonsterStaticInformationsWithAlternatives;
})(GroupMonsterStaticInformations);
module.exports = GroupMonsterStaticInformationsWithAlternatives;
