var GuildInAllianceVersatileInformations = module.exports = function() {
    this.allianceId = 0;

    return this;
};

require('util').inherits(GuildInAllianceVersatileInformations, require('./guild-versatile-informations.js'));

GuildInAllianceVersatileInformations.prototype.serialize = function(output) {
    this.serializeAs_GuildInAllianceVersatileInformations(output);
};

GuildInAllianceVersatileInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GuildInAllianceVersatileInformations(input);
};

GuildInAllianceVersatileInformations.prototype.serializeAs_GuildInAllianceVersatileInformations = function(param1) {
    this.serializeAs_GuildVersatileInformations(param1);
    if (this.allianceId < 0) {
        throw new Error("Forbidden value (" + this.allianceId + ") on element allianceId.");
    } else {
        param1.writeVarInt(this.allianceId);
        return;
    }
};

GuildInAllianceVersatileInformations.prototype.deserializeAs_GuildInAllianceVersatileInformations = function(param1) {
    this.deserializeAs_GuildVersatileInformations(param1);
    this.allianceId = param1.readVarUhInt();
    if (this.allianceId < 0) {
        throw new Error("Forbidden value (" + this.allianceId + ") on element of GuildInAllianceVersatileInformations.allianceId.");
    } else {
        return;
    }
};

GuildInAllianceVersatileInformations.prototype.getTypeId = function() {
    return 437;
};

GuildInAllianceVersatileInformations.prototype.getClassName = function() {
    return 'GuildInAllianceVersatileInformations';
};

module.exports.id = 437;