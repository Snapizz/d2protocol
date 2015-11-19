/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var MonsterInGroupLightInformations = require('./monster-in-group-light-informations');
var AlternativeMonstersInGroupLightInformations = (function () {
    function AlternativeMonstersInGroupLightInformations() {
        this.playerCount = 0;
        this.monsters = [];
    }
    AlternativeMonstersInGroupLightInformations.prototype.getTypeId = function () {
        return AlternativeMonstersInGroupLightInformations.ID;
    };
    AlternativeMonstersInGroupLightInformations.prototype.reset = function () {
        this.playerCount = 0;
        this.monsters = [];
    };
    AlternativeMonstersInGroupLightInformations.prototype.serialize = function (param1) {
        this.serializeAs_AlternativeMonstersInGroupLightInformations(param1);
    };
    AlternativeMonstersInGroupLightInformations.prototype.serializeAs_AlternativeMonstersInGroupLightInformations = function (param1) {
        param1.writeInt(this.playerCount);
        param1.writeShort(this.monsters.length);
        var _loc2_ = 0;
        while (_loc2_ < this.monsters.length) {
            (this.monsters[_loc2_]).serializeAs_MonsterInGroupLightInformations(param1);
            _loc2_++;
        }
    };
    AlternativeMonstersInGroupLightInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_AlternativeMonstersInGroupLightInformations(param1);
    };
    AlternativeMonstersInGroupLightInformations.prototype.deserializeAs_AlternativeMonstersInGroupLightInformations = function (param1) {
        var _loc4_ = null;
        this.playerCount = param1.readInt();
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new MonsterInGroupLightInformations();
            _loc4_.deserialize(param1);
            this.monsters.push(_loc4_);
            _loc3_++;
        }
    };
    AlternativeMonstersInGroupLightInformations.ID = 394;
    return AlternativeMonstersInGroupLightInformations;
})();
module.exports = AlternativeMonstersInGroupLightInformations;
