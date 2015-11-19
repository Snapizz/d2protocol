/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var PortalInformation = (function () {
    function PortalInformation() {
        this.portalId = 0;
        this.areaId = 0;
    }
    PortalInformation.prototype.getTypeId = function () {
        return PortalInformation.ID;
    };
    PortalInformation.prototype.reset = function () {
        this.portalId = 0;
        this.areaId = 0;
    };
    PortalInformation.prototype.serialize = function (param1) {
        this.serializeAs_PortalInformation(param1);
    };
    PortalInformation.prototype.serializeAs_PortalInformation = function (param1) {
        if (this.portalId < 0) {
            throw new Error('Forbidden value (' + this.portalId + ') on element portalId.');
        }
        param1.writeVarShort(this.portalId);
        param1.writeShort(this.areaId);
    };
    PortalInformation.prototype.deserialize = function (param1) {
        this.deserializeAs_PortalInformation(param1);
    };
    PortalInformation.prototype.deserializeAs_PortalInformation = function (param1) {
        this.portalId = param1.readVarUhShort();
        if (this.portalId < 0) {
            throw new Error('Forbidden value (' + this.portalId + ') on element of PortalInformation.portalId.');
        }
        this.areaId = param1.readShort();
    };
    PortalInformation.ID = 466;
    return PortalInformation;
})();
module.exports = PortalInformation;
