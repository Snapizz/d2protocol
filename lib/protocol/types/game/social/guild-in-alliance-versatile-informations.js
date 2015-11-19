/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuildVersatileInformations = require('./guild-versatile-informations');
var GuildInAllianceVersatileInformations = (function (_super) {
    __extends(GuildInAllianceVersatileInformations, _super);
    function GuildInAllianceVersatileInformations() {
        this.allianceId = 0;
        _super.call(this);
    }
    GuildInAllianceVersatileInformations.prototype.getTypeId = function () {
        return GuildInAllianceVersatileInformations.ID;
    };
    GuildInAllianceVersatileInformations.prototype.reset = function () {
        this.allianceId = 0;
    };
    GuildInAllianceVersatileInformations.prototype.serialize = function (param1) {
        this.serializeAs_GuildInAllianceVersatileInformations(param1);
    };
    GuildInAllianceVersatileInformations.prototype.serializeAs_GuildInAllianceVersatileInformations = function (param1) {
        _super.prototype.serializeAs_GuildVersatileInformations.call(this, param1);
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);
    };
    GuildInAllianceVersatileInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInAllianceVersatileInformations(param1);
    };
    GuildInAllianceVersatileInformations.prototype.deserializeAs_GuildInAllianceVersatileInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of GuildInAllianceVersatileInformations.allianceId.');
        }
    };
    GuildInAllianceVersatileInformations.ID = 437;
    return GuildInAllianceVersatileInformations;
})(GuildVersatileInformations);
module.exports = GuildInAllianceVersatileInformations;
