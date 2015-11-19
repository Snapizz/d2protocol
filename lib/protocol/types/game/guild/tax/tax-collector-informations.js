/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var AdditionalTaxCollectorInformations = require('./additional-tax-collector-informations');
var TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
var EntityLook = require('../../look/entity-look');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var TaxCollectorInformations = (function () {
    function TaxCollectorInformations() {
        this.uniqueId = 0;
        this.firtNameId = 0;
        this.lastNameId = 0;
        this.additionalInfos = new AdditionalTaxCollectorInformations();
        this.worldX = 0;
        this.worldY = 0;
        this.subAreaId = 0;
        this.state = 0;
        this.look = new EntityLook();
        this.complements = [];
    }
    TaxCollectorInformations.prototype.getTypeId = function () {
        return TaxCollectorInformations.ID;
    };
    TaxCollectorInformations.prototype.reset = function () {
        this.uniqueId = 0;
        this.firtNameId = 0;
        this.lastNameId = 0;
        this.additionalInfos = new AdditionalTaxCollectorInformations();
        this.worldX = 0;
        this.worldY = 0;
        this.subAreaId = 0;
        this.state = 0;
        this.look = new EntityLook();
        this.complements = [];
    };
    TaxCollectorInformations.prototype.serialize = function (param1) {
        this.serializeAs_TaxCollectorInformations(param1);
    };
    TaxCollectorInformations.prototype.serializeAs_TaxCollectorInformations = function (param1) {
        param1.writeInt(this.uniqueId);
        if (this.firtNameId < 0) {
            throw new Error('Forbidden value (' + this.firtNameId + ') on element firtNameId.');
        }
        param1.writeVarShort(this.firtNameId);
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element lastNameId.');
        }
        param1.writeVarShort(this.lastNameId);
        this.additionalInfos.serializeAs_AdditionalTaxCollectorInformations(param1);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        param1.writeByte(this.state);
        this.look.serializeAs_EntityLook(param1);
        param1.writeShort(this.complements.length);
        var _loc2_ = 0;
        while (_loc2_ < this.complements.length) {
            param1.writeShort((this.complements[_loc2_]).getTypeId());
            (this.complements[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    TaxCollectorInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_TaxCollectorInformations(param1);
    };
    TaxCollectorInformations.prototype.deserializeAs_TaxCollectorInformations = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        this.uniqueId = param1.readInt();
        this.firtNameId = param1.readVarUhShort();
        if (this.firtNameId < 0) {
            throw new Error('Forbidden value (' + this.firtNameId + ') on element of TaxCollectorInformations.firtNameId.');
        }
        this.lastNameId = param1.readVarUhShort();
        if (this.lastNameId < 0) {
            throw new Error('Forbidden value (' + this.lastNameId + ') on element of TaxCollectorInformations.lastNameId.');
        }
        this.additionalInfos = new AdditionalTaxCollectorInformations();
        this.additionalInfos.deserialize(param1);
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of TaxCollectorInformations.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of TaxCollectorInformations.worldY.');
        }
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of TaxCollectorInformations.subAreaId.');
        }
        this.state = param1.readByte();
        if (this.state < 0) {
            throw new Error('Forbidden value (' + this.state + ') on element of TaxCollectorInformations.state.');
        }
        this.look = new EntityLook();
        this.look.deserialize(param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(TaxCollectorComplementaryInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.complements.push(_loc5_);
            _loc3_++;
        }
    };
    TaxCollectorInformations.ID = 167;
    return TaxCollectorInformations;
})();
module.exports = TaxCollectorInformations;
