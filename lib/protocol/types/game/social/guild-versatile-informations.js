/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var GuildVersatileInformations = (function () {
    function GuildVersatileInformations() {
        this.guildId = 0;
        this.leaderId = 0;
        this.guildLevel = 0;
        this.nbMembers = 0;
    }
    GuildVersatileInformations.prototype.getTypeId = function () {
        return GuildVersatileInformations.ID;
    };
    GuildVersatileInformations.prototype.reset = function () {
        this.guildId = 0;
        this.leaderId = 0;
        this.guildLevel = 0;
        this.nbMembers = 0;
    };
    GuildVersatileInformations.prototype.serialize = function (param1) {
        this.serializeAs_GuildVersatileInformations(param1);
    };
    GuildVersatileInformations.prototype.serializeAs_GuildVersatileInformations = function (param1) {
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element leaderId.');
        }
        param1.writeVarInt(this.leaderId);
        if (this.guildLevel < 1 || this.guildLevel > 200) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
        }
        param1.writeByte(this.guildLevel);
        if (this.nbMembers < 1 || this.nbMembers > 240) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
        }
        param1.writeByte(this.nbMembers);
    };
    GuildVersatileInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildVersatileInformations(param1);
    };
    GuildVersatileInformations.prototype.deserializeAs_GuildVersatileInformations = function (param1) {
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of GuildVersatileInformations.guildId.');
        }
        this.leaderId = param1.readVarUhInt();
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element of GuildVersatileInformations.leaderId.');
        }
        this.guildLevel = param1.readUnsignedByte();
        if (this.guildLevel < 1 || this.guildLevel > 200) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildVersatileInformations.guildLevel.');
        }
        this.nbMembers = param1.readUnsignedByte();
        if (this.nbMembers < 1 || this.nbMembers > 240) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildVersatileInformations.nbMembers.');
        }
    };
    GuildVersatileInformations.ID = 435;
    return GuildVersatileInformations;
})();
module.exports = GuildVersatileInformations;
