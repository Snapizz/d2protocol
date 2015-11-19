/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class EntityDispositionInformations implements INetworkType {
    public static ID: number = 60;

    cellId: number;
    direction: number;

    constructor() {
        this.cellId = 0;
        this.direction = 1;
    }

    public getTypeId(): number {
        return EntityDispositionInformations.ID;
    }

    public reset(): void {
        this.cellId = 0;
        this.direction = 1;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_EntityDispositionInformations(param1);
    }

    public serializeAs_EntityDispositionInformations(param1: ICustomDataOutput): void {
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element cellId.');
        }
        param1.writeShort(this.cellId);
        param1.writeByte(this.direction);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_EntityDispositionInformations(param1);
    }

    public deserializeAs_EntityDispositionInformations(param1: ICustomDataInput): void {
        this.cellId = param1.readShort();
        if (this.cellId < -1 || this.cellId > 559) {
            throw new Error('Forbidden value (' + this.cellId + ') on element of EntityDispositionInformations.cellId.');
        }
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of EntityDispositionInformations.direction.');
        }

    }
}

export = EntityDispositionInformations;
