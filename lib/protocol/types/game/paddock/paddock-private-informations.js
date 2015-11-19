/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PaddockAbandonnedInformations = require('./paddock-abandonned-informations');
var GuildInformations = require('../context/roleplay/guild-informations');
var PaddockPrivateInformations = (function (_super) {
    __extends(PaddockPrivateInformations, _super);
    function PaddockPrivateInformations() {
        this.guildInfo = new GuildInformations();
        _super.call(this);
    }
    PaddockPrivateInformations.prototype.getTypeId = function () {
        return PaddockPrivateInformations.ID;
    };
    PaddockPrivateInformations.prototype.reset = function () {
        this.guildInfo = new GuildInformations();
    };
    PaddockPrivateInformations.prototype.serialize = function (param1) {
        this.serializeAs_PaddockPrivateInformations(param1);
    };
    PaddockPrivateInformations.prototype.serializeAs_PaddockPrivateInformations = function (param1) {
        _super.prototype.serializeAs_PaddockAbandonnedInformations.call(this, param1);
        this.guildInfo.serializeAs_GuildInformations(param1);
    };
    PaddockPrivateInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockPrivateInformations(param1);
    };
    PaddockPrivateInformations.prototype.deserializeAs_PaddockPrivateInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(param1);
    };
    PaddockPrivateInformations.ID = 131;
    return PaddockPrivateInformations;
})(PaddockAbandonnedInformations);
module.exports = PaddockPrivateInformations;
