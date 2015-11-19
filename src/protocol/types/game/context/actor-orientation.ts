/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class ActorOrientation implements INetworkType {
    public static ID: number = 353;

    id: number;
    direction: number;

    constructor() {
        this.id = 0;
        this.direction = 1;
    }

    public getTypeId(): number {
        return ActorOrientation.ID;
    }

    public reset(): void {
        this.id = 0;
        this.direction = 1;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ActorOrientation(param1);
    }

    public serializeAs_ActorOrientation(param1: ICustomDataOutput): void {
        param1.writeInt(this.id);
        param1.writeByte(this.direction);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ActorOrientation(param1);
    }

    public deserializeAs_ActorOrientation(param1: ICustomDataInput): void {
        this.id = param1.readInt();
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of ActorOrientation.direction.');
        }

    }
}

export = ActorOrientation;
