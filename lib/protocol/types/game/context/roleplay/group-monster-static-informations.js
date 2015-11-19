/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var MonsterInGroupLightInformations = require('./monster-in-group-light-informations');
var MonsterInGroupInformations = require('./monster-in-group-informations');
var GroupMonsterStaticInformations = (function () {
    function GroupMonsterStaticInformations() {
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.underlings = [];
    }
    GroupMonsterStaticInformations.prototype.getTypeId = function () {
        return GroupMonsterStaticInformations.ID;
    };
    GroupMonsterStaticInformations.prototype.reset = function () {
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.underlings = [];
    };
    GroupMonsterStaticInformations.prototype.serialize = function (param1) {
        this.serializeAs_GroupMonsterStaticInformations(param1);
    };
    GroupMonsterStaticInformations.prototype.serializeAs_GroupMonsterStaticInformations = function (param1) {
        this.mainCreatureLightInfos.serializeAs_MonsterInGroupLightInformations(param1);
        param1.writeShort(this.underlings.length);
        var _loc2_ = 0;
        while (_loc2_ < this.underlings.length) {
            (this.underlings[_loc2_]).serializeAs_MonsterInGroupInformations(param1);
            _loc2_++;
        }
    };
    GroupMonsterStaticInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GroupMonsterStaticInformations(param1);
    };
    GroupMonsterStaticInformations.prototype.deserializeAs_GroupMonsterStaticInformations = function (param1) {
        var _loc4_ = null;
        this.mainCreatureLightInfos = new MonsterInGroupLightInformations();
        this.mainCreatureLightInfos.deserialize(param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new MonsterInGroupInformations();
            _loc4_.deserialize(param1);
            this.underlings.push(_loc4_);
            _loc3_++;
        }
    };
    GroupMonsterStaticInformations.ID = 140;
    return GroupMonsterStaticInformations;
})();
module.exports = GroupMonsterStaticInformations;
