/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AdditionalTaxCollectorInformations = (function () {
    function AdditionalTaxCollectorInformations() {
        this.collectorCallerName = '';
        this.date = 0;
    }
    AdditionalTaxCollectorInformations.prototype.getTypeId = function () {
        return AdditionalTaxCollectorInformations.ID;
    };
    AdditionalTaxCollectorInformations.prototype.reset = function () {
        this.collectorCallerName = '';
        this.date = 0;
    };
    AdditionalTaxCollectorInformations.prototype.serialize = function (param1) {
        this.serializeAs_AdditionalTaxCollectorInformations(param1);
    };
    AdditionalTaxCollectorInformations.prototype.serializeAs_AdditionalTaxCollectorInformations = function (param1) {
        param1.writeUTF(this.collectorCallerName);
        if (this.date < 0) {
            throw new Error('Forbidden value (' + this.date + ') on element date.');
        }
        param1.writeInt(this.date);
    };
    AdditionalTaxCollectorInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_AdditionalTaxCollectorInformations(param1);
    };
    AdditionalTaxCollectorInformations.prototype.deserializeAs_AdditionalTaxCollectorInformations = function (param1) {
        this.collectorCallerName = param1.readUTF();
        this.date = param1.readInt();
        if (this.date < 0) {
            throw new Error('Forbidden value (' + this.date + ') on element of AdditionalTaxCollectorInformations.date.');
        }
    };
    AdditionalTaxCollectorInformations.ID = 165;
    return AdditionalTaxCollectorInformations;
})();
module.exports = AdditionalTaxCollectorInformations;
