/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuildInformations = require('./guild-informations');
var HumanOption = require('./human-option');
var HumanOptionGuild = (function (_super) {
    __extends(HumanOptionGuild, _super);
    function HumanOptionGuild() {
        this.guildInformations = new GuildInformations();
        _super.call(this);
    }
    HumanOptionGuild.prototype.getTypeId = function () {
        return HumanOptionGuild.ID;
    };
    HumanOptionGuild.prototype.reset = function () {
        this.guildInformations = new GuildInformations();
    };
    HumanOptionGuild.prototype.serialize = function (param1) {
        this.serializeAs_HumanOptionGuild(param1);
    };
    HumanOptionGuild.prototype.serializeAs_HumanOptionGuild = function (param1) {
        _super.prototype.serializeAs_HumanOption.call(this, param1);
        this.guildInformations.serializeAs_GuildInformations(param1);
    };
    HumanOptionGuild.prototype.deserialize = function (param1) {
        this.deserializeAs_HumanOptionGuild(param1);
    };
    HumanOptionGuild.prototype.deserializeAs_HumanOptionGuild = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guildInformations = new GuildInformations();
        this.guildInformations.deserialize(param1);
    };
    HumanOptionGuild.ID = 409;
    return HumanOptionGuild;
})(HumanOption);
module.exports = HumanOptionGuild;
