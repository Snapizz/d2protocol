/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FightResultFighterListEntry = require('./fight-result-fighter-list-entry');
var BasicGuildInformations = require('../roleplay/basic-guild-informations');
var FightResultTaxCollectorListEntry = (function (_super) {
    __extends(FightResultTaxCollectorListEntry, _super);
    function FightResultTaxCollectorListEntry() {
        this.level = 0;
        this.guildInfo = new BasicGuildInformations();
        this.experienceForGuild = 0;
        _super.call(this);
    }
    FightResultTaxCollectorListEntry.prototype.getTypeId = function () {
        return FightResultTaxCollectorListEntry.ID;
    };
    FightResultTaxCollectorListEntry.prototype.reset = function () {
        this.level = 0;
        this.guildInfo = new BasicGuildInformations();
        this.experienceForGuild = 0;
    };
    FightResultTaxCollectorListEntry.prototype.serialize = function (param1) {
        this.serializeAs_FightResultTaxCollectorListEntry(param1);
    };
    FightResultTaxCollectorListEntry.prototype.serializeAs_FightResultTaxCollectorListEntry = function (param1) {
        _super.prototype.serializeAs_FightResultFighterListEntry.call(this, param1);
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeByte(this.level);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
        param1.writeInt(this.experienceForGuild);
    };
    FightResultTaxCollectorListEntry.prototype.deserialize = function (param1) {
        this.deserializeAs_FightResultTaxCollectorListEntry(param1);
    };
    FightResultTaxCollectorListEntry.prototype.deserializeAs_FightResultTaxCollectorListEntry = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.level = param1.readUnsignedByte();
        if (this.level < 1 || this.level > 200) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightResultTaxCollectorListEntry.level.');
        }
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
        this.experienceForGuild = param1.readInt();
    };
    FightResultTaxCollectorListEntry.ID = 84;
    return FightResultTaxCollectorListEntry;
})(FightResultFighterListEntry);
module.exports = FightResultTaxCollectorListEntry;
