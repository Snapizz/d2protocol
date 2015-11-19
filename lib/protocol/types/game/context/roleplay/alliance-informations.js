/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasicNamedAllianceInformations = require('./basic-named-alliance-informations');
var GuildEmblem = require('../../guild/guild-emblem');
var AllianceInformations = (function (_super) {
    __extends(AllianceInformations, _super);
    function AllianceInformations() {
        this.allianceEmblem = new GuildEmblem();
        _super.call(this);
    }
    AllianceInformations.prototype.getTypeId = function () {
        return AllianceInformations.ID;
    };
    AllianceInformations.prototype.reset = function () {
        this.allianceEmblem = new GuildEmblem();
    };
    AllianceInformations.prototype.serialize = function (param1) {
        this.serializeAs_AllianceInformations(param1);
    };
    AllianceInformations.prototype.serializeAs_AllianceInformations = function (param1) {
        _super.prototype.serializeAs_BasicNamedAllianceInformations.call(this, param1);
        this.allianceEmblem.serializeAs_GuildEmblem(param1);
    };
    AllianceInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceInformations(param1);
    };
    AllianceInformations.prototype.deserializeAs_AllianceInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.allianceEmblem = new GuildEmblem();
        this.allianceEmblem.deserialize(param1);
    };
    AllianceInformations.ID = 417;
    return AllianceInformations;
})(BasicNamedAllianceInformations);
module.exports = AllianceInformations;
