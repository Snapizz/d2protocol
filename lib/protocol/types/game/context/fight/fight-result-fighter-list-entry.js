/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightResultListEntry = require('./fight-result-list-entry');
var FightResultFighterListEntry = (function (_super) {
    __extends(FightResultFighterListEntry, _super);
    function FightResultFighterListEntry() {
        this.id = 0;
        this.alive = false;
        _super.call(this);
    }
    FightResultFighterListEntry.prototype.getTypeId = function () {
        return FightResultFighterListEntry.ID;
    };
    FightResultFighterListEntry.prototype.reset = function () {
        this.id = 0;
        this.alive = false;
    };
    FightResultFighterListEntry.prototype.serialize = function (param1) {
        this.serializeAs_FightResultFighterListEntry(param1);
    };
    FightResultFighterListEntry.prototype.serializeAs_FightResultFighterListEntry = function (param1) {
        _super.prototype.serializeAs_FightResultListEntry.call(this, param1);
        param1.writeInt(this.id);
        param1.writeBoolean(this.alive);
    };
    FightResultFighterListEntry.prototype.deserialize = function (param1) {
        this.deserializeAs_FightResultFighterListEntry(param1);
    };
    FightResultFighterListEntry.prototype.deserializeAs_FightResultFighterListEntry = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.id = param1.readInt();
        this.alive = param1.readBoolean();
    };
    FightResultFighterListEntry.ID = 189;
    return FightResultFighterListEntry;
})(FightResultListEntry);
module.exports = FightResultFighterListEntry;
