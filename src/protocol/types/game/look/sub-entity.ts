/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityLook = require('./entity-look');

class SubEntity implements INetworkType {
    public static ID: number = 54;

    bindingPointCategory: number;
    bindingPointIndex: number;
    subEntityLook: EntityLook;

    constructor() {
        this.bindingPointCategory = 0;
        this.bindingPointIndex = 0;
        this.subEntityLook = new EntityLook();
    }

    public getTypeId(): number {
        return SubEntity.ID;
    }

    public reset(): void {
        this.bindingPointCategory = 0;
        this.bindingPointIndex = 0;
        this.subEntityLook = new EntityLook();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_SubEntity(param1);
    }

    public serializeAs_SubEntity(param1: ICustomDataOutput): void {
        param1.writeByte(this.bindingPointCategory);
        if (this.bindingPointIndex < 0) {
            throw new Error('Forbidden value (' + this.bindingPointIndex + ') on element bindingPointIndex.');
        }
        param1.writeByte(this.bindingPointIndex);
        this.subEntityLook.serializeAs_EntityLook(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SubEntity(param1);
    }

    public deserializeAs_SubEntity(param1: ICustomDataInput): void {
        this.bindingPointCategory = param1.readByte();
        if (this.bindingPointCategory < 0) {
            throw new Error('Forbidden value (' + this.bindingPointCategory + ') on element of SubEntity.bindingPointCategory.');
        }
        this.bindingPointIndex = param1.readByte();
        if (this.bindingPointIndex < 0) {
            throw new Error('Forbidden value (' + this.bindingPointIndex + ') on element of SubEntity.bindingPointIndex.');
        }
        this.subEntityLook = new EntityLook();
        this.subEntityLook.deserialize(param1);

    }
}

export = SubEntity;
