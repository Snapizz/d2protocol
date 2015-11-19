/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GuildInformations = require('../context/roleplay/guild-informations');
var BasicNamedAllianceInformations = require('../context/roleplay/basic-named-alliance-informations');
var AlliancedGuildFactSheetInformations = (function (_super) {
    __extends(AlliancedGuildFactSheetInformations, _super);
    function AlliancedGuildFactSheetInformations() {
        this.allianceInfos = new BasicNamedAllianceInformations();
        _super.call(this);
    }
    AlliancedGuildFactSheetInformations.prototype.getTypeId = function () {
        return AlliancedGuildFactSheetInformations.ID;
    };
    AlliancedGuildFactSheetInformations.prototype.reset = function () {
        this.allianceInfos = new BasicNamedAllianceInformations();
    };
    AlliancedGuildFactSheetInformations.prototype.serialize = function (param1) {
        this.serializeAs_AlliancedGuildFactSheetInformations(param1);
    };
    AlliancedGuildFactSheetInformations.prototype.serializeAs_AlliancedGuildFactSheetInformations = function (param1) {
        _super.prototype.serializeAs_GuildInformations.call(this, param1);
        this.allianceInfos.serializeAs_BasicNamedAllianceInformations(param1);
    };
    AlliancedGuildFactSheetInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_AlliancedGuildFactSheetInformations(param1);
    };
    AlliancedGuildFactSheetInformations.prototype.deserializeAs_AlliancedGuildFactSheetInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.allianceInfos = new BasicNamedAllianceInformations();
        this.allianceInfos.deserialize(param1);
    };
    AlliancedGuildFactSheetInformations.ID = 422;
    return AlliancedGuildFactSheetInformations;
})(GuildInformations);
module.exports = AlliancedGuildFactSheetInformations;
