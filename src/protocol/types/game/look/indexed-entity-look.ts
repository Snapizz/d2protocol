/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import EntityLook = require('./entity-look');

class IndexedEntityLook implements INetworkType {
    public static ID: number = 405;

    look: EntityLook;
    index: number;

    constructor() {
        this.look = new EntityLook();
        this.index = 0;
    }

    public getTypeId(): number {
        return IndexedEntityLook.ID;
    }

    public reset(): void {
        this.look = new EntityLook();
        this.index = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_IndexedEntityLook(param1);
    }

    public serializeAs_IndexedEntityLook(param1: ICustomDataOutput): void {
        this.look.serializeAs_EntityLook(param1);
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element index.');
        }
        param1.writeByte(this.index);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_IndexedEntityLook(param1);
    }

    public deserializeAs_IndexedEntityLook(param1: ICustomDataInput): void {
        this.look = new EntityLook();
        this.look.deserialize(param1);
        this.index = param1.readByte();
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element of IndexedEntityLook.index.');
        }

    }
}

export = IndexedEntityLook;
