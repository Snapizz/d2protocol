var FightResultTaxCollectorListEntry = module.exports = function() {
    this.level = 0;
    this.guildInfo = new BasicGuildInformations();
    this.experienceForGuild = 0;

    return this;
};

require('util').inherits(FightResultTaxCollectorListEntry, require('./fight-result-fighter-list-entry.js'));

FightResultTaxCollectorListEntry.prototype.serialize = function(output) {
    this.serializeAs_FightResultTaxCollectorListEntry(output);
};

FightResultTaxCollectorListEntry.prototype.deserialize = function(input) {
    this.deserializeAs_FightResultTaxCollectorListEntry(input);
};

FightResultTaxCollectorListEntry.prototype.serializeAs_FightResultTaxCollectorListEntry = function(param1) {
    this.serializeAs_FightResultFighterListEntry(param1);
    if (this.level < 1 || this.level > 200) {
        throw new Error("Forbidden value (" + this.level + ") on element level.");
    } else {
        param1.writeByte(this.level);
        this.guildInfo.serializeAs_BasicGuildInformations(param1);
        param1.writeInt(this.experienceForGuild);
        return;
    }
};

FightResultTaxCollectorListEntry.prototype.deserializeAs_FightResultTaxCollectorListEntry = function(param1) {
    this.deserializeAs_FightResultFighterListEntry(param1);
    this.level = param1.readUnsignedByte();
    if (this.level < 1 || this.level > 200) {
        throw new Error("Forbidden value (" + this.level + ") on element of FightResultTaxCollectorListEntry.level.");
    } else {
        this.guildInfo = new BasicGuildInformations();
        this.guildInfo.deserialize(param1);
        this.experienceForGuild = param1.readInt();
        return;
    }
};

FightResultTaxCollectorListEntry.prototype.getTypeId = function() {
    return 84;
};

FightResultTaxCollectorListEntry.prototype.getClassName = function() {
    return 'FightResultTaxCollectorListEntry';
};

module.exports.id = 84;