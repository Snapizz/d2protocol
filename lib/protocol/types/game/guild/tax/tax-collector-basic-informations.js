/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var TaxCollectorBasicInformations = (function () {
    function TaxCollectorBasicInformations() {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
    }
    TaxCollectorBasicInformations.prototype.getTypeId = function () {
        return TaxCollectorBasicInformations.ID;
    };
    TaxCollectorBasicInformations.prototype.reset = function () {
        this.firstNameId = 0;
        this.lastNameId = 0;
        this.worldX = 0;
        this.worldY = 0;
        this.mapId = 0;
        this.subAreaId = 0;
    };
    TaxCollectorBasicInformations.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorBasicInformations(param1);
    };
    TaxCollectorBasicInformations.prototype.serializeAs_TaxCollectorBasicInformations = function (param1) {
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element firstNameId.');
        }
        param1.writeVarShort(this.firstNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        param1.writeInt(this.mapId);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
    };
    TaxCollectorBasicInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorBasicInformations(param1);
    };
    TaxCollectorBasicInformations.prototype.deserializeAs_TaxCollectorBasicInformations = function (param1) {
        this.firstNameId = param1.readVarUhShort();
        if (this.firstNameId < 0) {
            throw new Error('Forbidden value (' + this.firstNameId + ') on element of TaxCollectorBasicInformations.firstNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of TaxCollectorBasicInformations.lastNameId.');
        }
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of TaxCollectorBasicInformations.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of TaxCollectorBasicInformations.worldY.');
        }
        this.mapId = param1.readInt();
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of TaxCollectorBasicInformations.subAreaId.');
        }
    };
    TaxCollectorBasicInformations.ID = 96;
    return TaxCollectorBasicInformations;
})();
module.exports = TaxCollectorBasicInformations;
