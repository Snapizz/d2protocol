/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightResultFighterListEntry = require('./fight-result-fighter-list-entry');
var FightResultMutantListEntry = (function (_super) {
    __extends(FightResultMutantListEntry, _super);
    function FightResultMutantListEntry() {
        this.level = 0;
        _super.call(this);
    }
    FightResultMutantListEntry.prototype.getTypeId = function () {
        return FightResultMutantListEntry.ID;
    };
    FightResultMutantListEntry.prototype.reset = function () {
        this.level = 0;
    };
    FightResultMutantListEntry.prototype.serialize = function (param1) {
        this.serializeAs_FightResultMutantListEntry(param1);
    };
    FightResultMutantListEntry.prototype.serializeAs_FightResultMutantListEntry = function (param1) {
        _super.prototype.serializeAs_FightResultFighterListEntry.call(this, param1);
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeVarShort(this.level);
    };
    FightResultMutantListEntry.prototype.deserialize = function (param1) {
        this.deserializeAs_FightResultMutantListEntry(param1);
    };
    FightResultMutantListEntry.prototype.deserializeAs_FightResultMutantListEntry = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.level = param1.readVarUhShort();
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightResultMutantListEntry.level.');
        }
    };
    FightResultMutantListEntry.ID = 216;
    return FightResultMutantListEntry;
})(FightResultFighterListEntry);
module.exports = FightResultMutantListEntry;
