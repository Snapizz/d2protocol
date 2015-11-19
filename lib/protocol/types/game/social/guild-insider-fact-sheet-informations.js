/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuildFactSheetInformations = require('./guild-fact-sheet-informations');
var GuildInsiderFactSheetInformations = (function (_super) {
    __extends(GuildInsiderFactSheetInformations, _super);
    function GuildInsiderFactSheetInformations() {
        this.leaderName = '';
        this.nbConnectedMembers = 0;
        this.nbTaxCollectors = 0;
        this.lastActivity = 0;
        this.enabled = false;
        _super.call(this);
    }
    GuildInsiderFactSheetInformations.prototype.getTypeId = function () {
        return GuildInsiderFactSheetInformations.ID;
    };
    GuildInsiderFactSheetInformations.prototype.reset = function () {
        this.leaderName = '';
        this.nbConnectedMembers = 0;
        this.nbTaxCollectors = 0;
        this.lastActivity = 0;
        this.enabled = false;
    };
    GuildInsiderFactSheetInformations.prototype.serialize = function (param1) {
        this.serializeAs_GuildInsiderFactSheetInformations(param1);
    };
    GuildInsiderFactSheetInformations.prototype.serializeAs_GuildInsiderFactSheetInformations = function (param1) {
        _super.prototype.serializeAs_GuildFactSheetInformations.call(this, param1);
        param1.writeUTF(this.leaderName);
        if (this.nbConnectedMembers < 0) {
            throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element nbConnectedMembers.');
        }
        param1.writeVarShort(this.nbConnectedMembers);
        if (this.nbTaxCollectors < 0) {
            throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element nbTaxCollectors.');
        }
        param1.writeByte(this.nbTaxCollectors);
        if (this.lastActivity < 0) {
            throw new Error('Forbidden value (' + this.lastActivity + ') on element lastActivity.');
        }
        param1.writeInt(this.lastActivity);
        param1.writeBoolean(this.enabled);
    };
    GuildInsiderFactSheetInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInsiderFactSheetInformations(param1);
    };
    GuildInsiderFactSheetInformations.prototype.deserializeAs_GuildInsiderFactSheetInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.leaderName = param1.readUTF();
        this.nbConnectedMembers = param1.readVarUhShort();
        if (this.nbConnectedMembers < 0) {
            throw new Error('Forbidden value (' + this.nbConnectedMembers + ') on element of GuildInsiderFactSheetInformations.nbConnectedMembers.');
        }
        this.nbTaxCollectors = param1.readByte();
        if (this.nbTaxCollectors < 0) {
            throw new Error('Forbidden value (' + this.nbTaxCollectors + ') on element of GuildInsiderFactSheetInformations.nbTaxCollectors.');
        }
        this.lastActivity = param1.readInt();
        if (this.lastActivity < 0) {
            throw new Error('Forbidden value (' + this.lastActivity + ') on element of GuildInsiderFactSheetInformations.lastActivity.');
        }
        this.enabled = param1.readBoolean();
    };
    GuildInsiderFactSheetInformations.ID = 423;
    return GuildInsiderFactSheetInformations;
})(GuildFactSheetInformations);
module.exports = GuildInsiderFactSheetInformations;
