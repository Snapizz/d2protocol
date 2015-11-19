/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
var ProtectedEntityWaitingForHelpInfo = require('../../fight/protected-entity-waiting-for-help-info');
var TaxCollectorWaitingForHelpInformations = (function (_super) {
    __extends(TaxCollectorWaitingForHelpInformations, _super);
    function TaxCollectorWaitingForHelpInformations() {
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        _super.call(this);
    }
    TaxCollectorWaitingForHelpInformations.prototype.getTypeId = function () {
        return TaxCollectorWaitingForHelpInformations.ID;
    };
    TaxCollectorWaitingForHelpInformations.prototype.reset = function () {
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
    };
    TaxCollectorWaitingForHelpInformations.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorWaitingForHelpInformations(param1);
    };
    TaxCollectorWaitingForHelpInformations.prototype.serializeAs_TaxCollectorWaitingForHelpInformations = function (param1) {
        _super.prototype.serializeAs_TaxCollectorComplementaryInformations.call(this, param1);
        this.waitingForHelpInfo.serializeAs_ProtectedEntityWaitingForHelpInfo(param1);
    };
    TaxCollectorWaitingForHelpInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorWaitingForHelpInformations(param1);
    };
    TaxCollectorWaitingForHelpInformations.prototype.deserializeAs_TaxCollectorWaitingForHelpInformations = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.waitingForHelpInfo = new ProtectedEntityWaitingForHelpInfo();
        this.waitingForHelpInfo.deserialize(param1);
    };
    TaxCollectorWaitingForHelpInformations.ID = 447;
    return TaxCollectorWaitingForHelpInformations;
})(TaxCollectorComplementaryInformations);
module.exports = TaxCollectorWaitingForHelpInformations;
