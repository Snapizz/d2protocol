/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractSocialGroupInfos = require('../../social/abstract-social-group-infos');
var BasicAllianceInformations = (function (_super) {
    __extends(BasicAllianceInformations, _super);
    function BasicAllianceInformations() {
        this.allianceId = 0;
        this.allianceTag = '';
        _super.call(this);
    }
    BasicAllianceInformations.prototype.getTypeId = function () {
        return BasicAllianceInformations.ID;
    };
    BasicAllianceInformations.prototype.reset = function () {
        this.allianceId = 0;
        this.allianceTag = '';
    };
    BasicAllianceInformations.prototype.serialize = function (param1) {
        this.serializeAs_BasicAllianceInformations(param1);
    };
    BasicAllianceInformations.prototype.serializeAs_BasicAllianceInformations = function (param1) {
        _super.prototype.serializeAs_AbstractSocialGroupInfos.call(this, param1);
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);
        param1.writeUTF(this.allianceTag);
    };
    BasicAllianceInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicAllianceInformations(param1);
    };
    BasicAllianceInformations.prototype.deserializeAs_BasicAllianceInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of BasicAllianceInformations.allianceId.');
        }
        this.allianceTag = param1.readUTF();
    };
    BasicAllianceInformations.ID = 419;
    return BasicAllianceInformations;
})(AbstractSocialGroupInfos);
module.exports = BasicAllianceInformations;
