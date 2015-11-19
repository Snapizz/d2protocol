/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuildInformations = require('../context/roleplay/guild-informations');
var GuildFactSheetInformations = (function (_super) {
    __extends(GuildFactSheetInformations, _super);
    function GuildFactSheetInformations() {
        this.leaderId = 0;
        this.guildLevel = 0;
        this.nbMembers = 0;
        _super.call(this);
    }
    GuildFactSheetInformations.prototype.getTypeId = function () {
        return GuildFactSheetInformations.ID;
    };
    GuildFactSheetInformations.prototype.reset = function () {
        this.leaderId = 0;
        this.guildLevel = 0;
        this.nbMembers = 0;
    };
    GuildFactSheetInformations.prototype.serialize = function (param1) {
        this.serializeAs_GuildFactSheetInformations(param1);
    };
    GuildFactSheetInformations.prototype.serializeAs_GuildFactSheetInformations = function (param1) {
        _super.prototype.serializeAs_GuildInformations.call(this, param1);
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element leaderId.');
        }
        param1.writeVarInt(this.leaderId);
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
        }
        param1.writeByte(this.guildLevel);
        if (this.nbMembers < 0) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
        }
        param1.writeVarShort(this.nbMembers);
    };
    GuildFactSheetInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFactSheetInformations(param1);
    };
    GuildFactSheetInformations.prototype.deserializeAs_GuildFactSheetInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.leaderId = param1.readVarUhInt();
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element of GuildFactSheetInformations.leaderId.');
        }
        this.guildLevel = param1.readUnsignedByte();
        if (this.guildLevel < 0 || this.guildLevel > 255) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildFactSheetInformations.guildLevel.');
        }
        this.nbMembers = param1.readVarUhShort();
        if (this.nbMembers < 0) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildFactSheetInformations.nbMembers.');
        }
    };
    GuildFactSheetInformations.ID = 424;
    return GuildFactSheetInformations;
})(GuildInformations);
module.exports = GuildFactSheetInformations;
