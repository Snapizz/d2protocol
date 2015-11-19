/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AdditionalTaxCollectorInformations = require('./additional-tax-collector-informations');
import TaxCollectorComplementaryInformations = require('./tax-collector-complementary-informations');
import EntityLook = require('../../look/entity-look');
import ProtocolTypeManager = require('../../../../protocol-type-manager');

class TaxCollectorInformations implements INetworkType {
    public static ID: number = 167;

    uniqueId: number;
    firtNameId: number;
    lastNameId: number;
    additionalInfos: AdditionalTaxCollectorInformations;
    worldX: number;
    worldY: number;
    subAreaId: number;
    state: number;
    look: EntityLook;
    complements: TaxCollectorComplementaryInformations[];

    constructor() {
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

    public getTypeId(): number {
        return TaxCollectorInformations.ID;
    }

    public reset(): void {
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

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TaxCollectorInformations(param1);
    }

    public serializeAs_TaxCollectorInformations(param1: ICustomDataOutput): void {
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
        var _loc2_: number = 0;
        while (_loc2_ < this.complements.length) {
            param1.writeShort((this.complements[_loc2_]).getTypeId());
            (this.complements[_loc2_]).serialize(param1);
            _loc2_++;
        }

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TaxCollectorInformations(param1);
    }

    public deserializeAs_TaxCollectorInformations(param1: ICustomDataInput): void {
        var _loc4_: number = 0;
        var _loc5_: TaxCollectorComplementaryInformations = null;
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
        var _loc2_: number = param1.readUnsignedShort();
        var _loc3_: number = 0;
        while (_loc3_ < _loc2_) {
        _loc4_ = param1.readUnsignedShort();
            _loc5_ = <TaxCollectorComplementaryInformations>ProtocolTypeManager.getInstance(TaxCollectorComplementaryInformations, _loc4_);
            _loc5_.deserialize(param1);
            this.complements.push(_loc5_);
            _loc3_++;
        }

    }
}

export = TaxCollectorInformations;
