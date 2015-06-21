var GuildFactSheetInformations = function() {
    this.leaderId = 0;
    this.guildLevel = 0;
    this.nbMembers = 0;
};

require('util').inherits(GuildFactSheetInformations, require('../context/roleplay/guild-informations.js'));

module.exports = function() {
    return new GuildFactSheetInformations();
};

GuildFactSheetInformations.prototype.serialize = function(output) {
    this.serializeAs_GuildFactSheetInformations(output);
};

GuildFactSheetInformations.prototype.deserialize = function(input) {
    this.deserializeAs_GuildFactSheetInformations(input);
};

GuildFactSheetInformations.prototype.serializeAs_GuildFactSheetInformations = function(param1) {
    this.serializeAs_GuildInformations(param1);
    if (this.leaderId < 0) {
        throw new Error("Forbidden value (" + this.leaderId + ") on element leaderId.");
    } else {
        param1.writeVarInt(this.leaderId);
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error("Forbidden value (" + this.guildLevel + ") on element guildLevel.");
        } else {
            param1.writeByte(this.guildLevel);
            if (this.nbMembers < 0) {
                throw new Error("Forbidden value (" + this.nbMembers + ") on element nbMembers.");
            } else {
                param1.writeVarShort(this.nbMembers);
                return;
            }
        }
    }
};

GuildFactSheetInformations.prototype.deserializeAs_GuildFactSheetInformations = function(param1) {
    this.deserializeAs_GuildInformations(param1);
    this.leaderId = param1.readVarUhInt();
    if (this.leaderId < 0) {
        throw new Error("Forbidden value (" + this.leaderId + ") on element of GuildFactSheetInformations.leaderId.");
    } else {
        this.guildLevel = param1.readUnsignedByte();
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error("Forbidden value (" + this.guildLevel + ") on element of GuildFactSheetInformations.guildLevel.");
        } else {
            this.nbMembers = param1.readVarUhShort();
            if (this.nbMembers < 0) {
                throw new Error("Forbidden value (" + this.nbMembers + ") on element of GuildFactSheetInformations.nbMembers.");
            } else {
                return;
            }
        }
    }
};

GuildFactSheetInformations.prototype.getTypeId = function() {
    return 424;
};

GuildFactSheetInformations.prototype.getClassName = function() {
    return 'GuildFactSheetInformations';
};

module.exports.id = 424;
module.exports.GuildFactSheetInformations = GuildFactSheetInformations;