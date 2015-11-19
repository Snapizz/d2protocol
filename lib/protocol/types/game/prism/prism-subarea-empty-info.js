/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PrismSubareaEmptyInfo = (function () {
    function PrismSubareaEmptyInfo() {
        this.subAreaId = 0;
        this.allianceId = 0;
    }
    PrismSubareaEmptyInfo.prototype.getTypeId = function () {
        return PrismSubareaEmptyInfo.ID;
    };
    PrismSubareaEmptyInfo.prototype.reset = function () {
        this.subAreaId = 0;
        this.allianceId = 0;
    };
    PrismSubareaEmptyInfo.prototype.serialize = function (param1) {
        this.serializeAs_PrismSubareaEmptyInfo(param1);
    };
    PrismSubareaEmptyInfo.prototype.serializeAs_PrismSubareaEmptyInfo = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element allianceId.');
        }
        param1.writeVarInt(this.allianceId);
    };
    PrismSubareaEmptyInfo.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismSubareaEmptyInfo(param1);
    };
    PrismSubareaEmptyInfo.prototype.deserializeAs_PrismSubareaEmptyInfo = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismSubareaEmptyInfo.subAreaId.');
        }
        this.allianceId = param1.readVarUhInt();
        if (this.allianceId < 0) {
            throw new Error('Forbidden value (' + this.allianceId + ') on element of PrismSubareaEmptyInfo.allianceId.');
        }
    };
    PrismSubareaEmptyInfo.ID = 438;
    return PrismSubareaEmptyInfo;
})();
module.exports = PrismSubareaEmptyInfo;
