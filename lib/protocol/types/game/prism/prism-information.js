/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PrismInformation = (function () {
    function PrismInformation() {
        this.typeId = 0;
        this.state = 1;
        this.nextVulnerabilityDate = 0;
        this.placementDate = 0;
        this.rewardTokenCount = 0;
    }
    PrismInformation.prototype.getTypeId = function () {
        return PrismInformation.ID;
    };
    PrismInformation.prototype.reset = function () {
        this.typeId = 0;
        this.state = 1;
        this.nextVulnerabilityDate = 0;
        this.placementDate = 0;
        this.rewardTokenCount = 0;
    };
    PrismInformation.prototype.serialize = function (param1) {
        this.serializeAs_PrismInformation(param1);
    };
    PrismInformation.prototype.serializeAs_PrismInformation = function (param1) {
        if (this.typeId < 0) {
            throw new Error('Forbidden value (' + this.typeId + ') on element typeId.');
        }
        param1.writeByte(this.typeId);
        param1.writeByte(this.state);
        if (this.nextVulnerabilityDate < 0) {
            throw new Error('Forbidden value (' + this.nextVulnerabilityDate + ') on element nextVulnerabilityDate.');
        }
        param1.writeInt(this.nextVulnerabilityDate);
        if (this.placementDate < 0) {
            throw new Error('Forbidden value (' + this.placementDate + ') on element placementDate.');
        }
        param1.writeInt(this.placementDate);
        if (this.rewardTokenCount < 0) {
            throw new Error('Forbidden value (' + this.rewardTokenCount + ') on element rewardTokenCount.');
        }
        param1.writeVarInt(this.rewardTokenCount);
    };
    PrismInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismInformation(param1);
    };
    PrismInformation.prototype.deserializeAs_PrismInformation = function (param1) {
        this.typeId = param1.readByte();
        if (this.typeId < 0) {
            throw new Error('Forbidden value (' + this.typeId + ') on element of PrismInformation.typeId.');
        }
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of PrismInformation.state.');
        }
        this.nextVulnerabilityDate = param1.readInt();
        if (this.nextVulnerabilityDate < 0) {
            throw new Error('Forbidden value (' + this.nextVulnerabilityDate + ') on element of PrismInformation.nextVulnerabilityDate.');
        }
        this.placementDate = param1.readInt();
        if (this.placementDate < 0) {
            throw new Error('Forbidden value (' + this.placementDate + ') on element of PrismInformation.placementDate.');
        }
        this.rewardTokenCount = param1.readVarUhInt();
        if (this.rewardTokenCount < 0) {
            throw new Error('Forbidden value (' + this.rewardTokenCount + ') on element of PrismInformation.rewardTokenCount.');
        }
    };
    PrismInformation.ID = 428;
    return PrismInformation;
})();
module.exports = PrismInformation;
