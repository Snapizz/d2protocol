/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasicAllianceInformations = require('./basic-alliance-informations');
var BasicNamedAllianceInformations = (function (_super) {
    __extends(BasicNamedAllianceInformations, _super);
    function BasicNamedAllianceInformations() {
        this.allianceName = '';
        _super.call(this);
    }
    BasicNamedAllianceInformations.prototype.getTypeId = function () {
        return BasicNamedAllianceInformations.ID;
    };
    BasicNamedAllianceInformations.prototype.reset = function () {
        this.allianceName = '';
    };
    BasicNamedAllianceInformations.prototype.serialize = function (param1) {
        this.serializeAs_BasicNamedAllianceInformations(param1);
    };
    BasicNamedAllianceInformations.prototype.serializeAs_BasicNamedAllianceInformations = function (param1) {
        _super.prototype.serializeAs_BasicAllianceInformations.call(this, param1);
        param1.writeUTF(this.allianceName);
    };
    BasicNamedAllianceInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicNamedAllianceInformations(param1);
    };
    BasicNamedAllianceInformations.prototype.deserializeAs_BasicNamedAllianceInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.allianceName = param1.readUTF();
    };
    BasicNamedAllianceInformations.ID = 418;
    return BasicNamedAllianceInformations;
})(BasicAllianceInformations);
module.exports = BasicNamedAllianceInformations;
