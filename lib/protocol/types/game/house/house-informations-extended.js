/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HouseInformations = require('./house-informations');
var GuildInformations = require('../context/roleplay/guild-informations');
var HouseInformationsExtended = (function (_super) {
    __extends(HouseInformationsExtended, _super);
    function HouseInformationsExtended() {
        this.guildInfo = new GuildInformations();
        _super.call(this);
    }
    HouseInformationsExtended.prototype.getTypeId = function () {
        return HouseInformationsExtended.ID;
    };
    HouseInformationsExtended.prototype.reset = function () {
        this.guildInfo = new GuildInformations();
    };
    HouseInformationsExtended.prototype.serialize = function (param1) {
        this.serializeAs_HouseInformationsExtended(param1);
    };
    HouseInformationsExtended.prototype.serializeAs_HouseInformationsExtended = function (param1) {
        _super.prototype.serializeAs_HouseInformations.call(this, param1);
        this.guildInfo.serializeAs_GuildInformations(param1);
    };
    HouseInformationsExtended.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseInformationsExtended(param1);
    };
    HouseInformationsExtended.prototype.deserializeAs_HouseInformationsExtended = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(param1);
    };
    HouseInformationsExtended.ID = 112;
    return HouseInformationsExtended;
})(HouseInformations);
module.exports = HouseInformationsExtended;
