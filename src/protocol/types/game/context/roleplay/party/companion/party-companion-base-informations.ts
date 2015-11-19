/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../../boolean-byte-wrapper');
import EntityLook = require('../../../../look/entity-look');

class PartyCompanionBaseInformations implements INetworkType {
    public static ID: number = 453;

    indexId: number;
    companionGenericId: number;
    entityLook: EntityLook;

    constructor() {
        this.indexId = 0;
        this.companionGenericId = 0;
        this.entityLook = new EntityLook();
    }

    public getTypeId(): number {
        return PartyCompanionBaseInformations.ID;
    }

    public reset(): void {
        this.indexId = 0;
        this.companionGenericId = 0;
        this.entityLook = new EntityLook();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PartyCompanionBaseInformations(param1);
    }

    public serializeAs_PartyCompanionBaseInformations(param1: ICustomDataOutput): void {
        if (this.indexId < 0) {
            throw new Error('Forbidden value (' + this.indexId + ') on element indexId.');
        }
        param1.writeByte(this.indexId);
        if (this.companionGenericId < 0) {
            throw new Error('Forbidden value (' + this.companionGenericId + ') on element companionGenericId.');
        }
        param1.writeByte(this.companionGenericId);
        this.entityLook.serializeAs_EntityLook(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PartyCompanionBaseInformations(param1);
    }

    public deserializeAs_PartyCompanionBaseInformations(param1: ICustomDataInput): void {
        this.indexId = param1.readByte();
        if (this.indexId < 0) {
            throw new Error('Forbidden value (' + this.indexId + ') on element of PartyCompanionBaseInformations.indexId.');
        }
        this.companionGenericId = param1.readByte();
        if (this.companionGenericId < 0) {
            throw new Error('Forbidden value (' + this.companionGenericId + ') on element of PartyCompanionBaseInformations.companionGenericId.');
        }
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(param1);

    }
}

export = PartyCompanionBaseInformations;
