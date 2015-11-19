/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightResultAdditionalData = require('./fight-result-additional-data');
var FightResultFighterListEntry = require('./fight-result-fighter-list-entry');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var FightResultPlayerListEntry = (function (_super) {
    __extends(FightResultPlayerListEntry, _super);
    function FightResultPlayerListEntry() {
        this.level = 0;
        this.additional = [];
        _super.call(this);
    }
    FightResultPlayerListEntry.prototype.getTypeId = function () {
        return FightResultPlayerListEntry.ID;
    };
    FightResultPlayerListEntry.prototype.reset = function () {
        this.level = 0;
        this.additional = [];
    };
    FightResultPlayerListEntry.prototype.serialize = function (param1) {
        this.serializeAs_FightResultPlayerListEntry(param1);
    };
    FightResultPlayerListEntry.prototype.serializeAs_FightResultPlayerListEntry = function (param1) {
        _super.prototype.serializeAs_FightResultFighterListEntry.call(this, param1);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        param1.writeShort(this.additional.length);
        var _loc2_ = 0;
        while (_loc2_ < this.additional.length) {
            param1.writeShort((this.additional[_loc2_]).getTypeId());
            (this.additional[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    FightResultPlayerListEntry.prototype.deserialize = function (param1) {
        this.deserializeAs_FightResultPlayerListEntry(param1);
    };
    FightResultPlayerListEntry.prototype.deserializeAs_FightResultPlayerListEntry = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightResultPlayerListEntry.level.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(FightResultAdditionalData, _loc4_);
            _loc5_.deserialize(param1);
            this.additional.push(_loc5_);
            _loc3_++;
        }
    };
    FightResultPlayerListEntry.ID = 24;
    return FightResultPlayerListEntry;
})(FightResultFighterListEntry);
module.exports = FightResultPlayerListEntry;
