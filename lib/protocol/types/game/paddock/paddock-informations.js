/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PaddockInformations = (function () {
    function PaddockInformations() {
        this.maxOutdoorMount = 0;
        this.maxItems = 0;
    }
    PaddockInformations.prototype.getTypeId = function () {
        return PaddockInformations.ID;
    };
    PaddockInformations.prototype.reset = function () {
        this.maxOutdoorMount = 0;
        this.maxItems = 0;
    };
    PaddockInformations.prototype.serialize = function (param1) {
        this.serializeAs_PaddockInformations(param1);
    };
    PaddockInformations.prototype.serializeAs_PaddockInformations = function (param1) {
        if (this.maxOutdoorMount < 0) {
            throw new Error('Forbidden value (' + this.maxOutdoorMount + ') on element maxOutdoorMount.');
        }
        param1.writeVarShort(this.maxOutdoorMount);
        if (this.maxItems < 0) {
            throw new Error('Forbidden value (' + this.maxItems + ') on element maxItems.');
        }
        param1.writeVarShort(this.maxItems);
    };
    PaddockInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockInformations(param1);
    };
    PaddockInformations.prototype.deserializeAs_PaddockInformations = function (param1) {
        this.maxOutdoorMount = param1.readVarUhShort();
        if (this.maxOutdoorMount < 0) {
            throw new Error('Forbidden value (' + this.maxOutdoorMount + ') on element of PaddockInformations.maxOutdoorMount.');
        }
        this.maxItems = param1.readVarUhShort();
        if (this.maxItems < 0) {
            throw new Error('Forbidden value (' + this.maxItems + ') on element of PaddockInformations.maxItems.');
        }
    };
    PaddockInformations.ID = 132;
    return PaddockInformations;
})();
module.exports = PaddockInformations;
