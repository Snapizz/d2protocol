/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractSocialGroupInfos = require('../../social/abstract-social-group-infos');
var BasicGuildInformations = (function (_super) {
    __extends(BasicGuildInformations, _super);
    function BasicGuildInformations() {
        this.guildId = 0;
        this.guildName = '';
        _super.call(this);
    }
    BasicGuildInformations.prototype.getTypeId = function () {
        return BasicGuildInformations.ID;
    };
    BasicGuildInformations.prototype.reset = function () {
        this.guildId = 0;
        this.guildName = '';
    };
    BasicGuildInformations.prototype.serialize = function (param1) {
        this.serializeAs_BasicGuildInformations(param1);
    };
    BasicGuildInformations.prototype.serializeAs_BasicGuildInformations = function (param1) {
        _super.prototype.serializeAs_AbstractSocialGroupInfos.call(this, param1);
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
        param1.writeUTF(this.guildName);
    };
    BasicGuildInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicGuildInformations(param1);
    };
    BasicGuildInformations.prototype.deserializeAs_BasicGuildInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of BasicGuildInformations.guildId.');
        }
        this.guildName = param1.readUTF();
    };
    BasicGuildInformations.ID = 365;
    return BasicGuildInformations;
})(AbstractSocialGroupInfos);
module.exports = BasicGuildInformations;
