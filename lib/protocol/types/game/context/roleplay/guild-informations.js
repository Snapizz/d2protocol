/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasicGuildInformations = require('./basic-guild-informations');
var GuildEmblem = require('../../guild/guild-emblem');
var GuildInformations = (function (_super) {
    __extends(GuildInformations, _super);
    function GuildInformations() {
        this.guildEmblem = new GuildEmblem();
        _super.call(this);
    }
    GuildInformations.prototype.getTypeId = function () {
        return GuildInformations.ID;
    };
    GuildInformations.prototype.reset = function () {
        this.guildEmblem = new GuildEmblem();
    };
    GuildInformations.prototype.serialize = function (param1) {
        this.serializeAs_GuildInformations(param1);
    };
    GuildInformations.prototype.serializeAs_GuildInformations = function (param1) {
        _super.prototype.serializeAs_BasicGuildInformations.call(this, param1);
        this.guildEmblem.serializeAs_GuildEmblem(param1);
    };
    GuildInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildInformations(param1);
    };
    GuildInformations.prototype.deserializeAs_GuildInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guildEmblem = new GuildEmblem();
        this.guildEmblem.deserialize(param1);
    };
    GuildInformations.ID = 127;
    return GuildInformations;
})(BasicGuildInformations);
module.exports = GuildInformations;
