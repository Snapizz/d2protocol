/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuildInformations = require('./guild-informations');
var GuildInAllianceInformations = (function (_super) {
    __extends(GuildInAllianceInformations, _super);
    function GuildInAllianceInformations() {
        this.guildLevel = 0;
        this.nbMembers = 0;
        this.enabled = false;
        _super.call(this);
    }
    GuildInAllianceInformations.prototype.getTypeId = function () {
        return GuildInAllianceInformations.ID;
    };
    GuildInAllianceInformations.prototype.reset = function () {
        this.guildLevel = 0;
        this.nbMembers = 0;
        this.enabled = false;
    };
    GuildInAllianceInformations.prototype.serialize = function (param1) {
        this.serializeAs_GuildInAllianceInformations(param1);
    };
    GuildInAllianceInformations.prototype.serializeAs_GuildInAllianceInformations = function (param1) {
        _super.prototype.serializeAs_GuildInformations.call(this, param1);
        if (this.guildLevel < 1 || this.guildLevel > 200) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element guildLevel.');
        }
        param1.writeByte(this.guildLevel);
        if (this.nbMembers < 1 || this.nbMembers > 240) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element nbMembers.');
        }
        param1.writeByte(this.nbMembers);
        param1.writeBoolean(this.enabled);
    };
    GuildInAllianceInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInAllianceInformations(param1);
    };
    GuildInAllianceInformations.prototype.deserializeAs_GuildInAllianceInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guildLevel = param1.readUnsignedByte();
        if (this.guildLevel < 1 || this.guildLevel > 200) {
            throw new Error('Forbidden value (' + this.guildLevel + ') on element of GuildInAllianceInformations.guildLevel.');
        }
        this.nbMembers = param1.readUnsignedByte();
        if (this.nbMembers < 1 || this.nbMembers > 240) {
            throw new Error('Forbidden value (' + this.nbMembers + ') on element of GuildInAllianceInformations.nbMembers.');
        }
        this.enabled = param1.readBoolean();
    };
    GuildInAllianceInformations.ID = 420;
    return GuildInAllianceInformations;
})(GuildInformations);
module.exports = GuildInAllianceInformations;
