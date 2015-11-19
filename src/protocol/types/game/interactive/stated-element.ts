/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class StatedElement implements INetworkType {
    public static ID: number = 108;

    elementId: number;
    elementCellId: number;
    elementState: number;

    constructor() {
        this.elementId = 0;
        this.elementCellId = 0;
        this.elementState = 0;
    }

    public getTypeId(): number {
        return StatedElement.ID;
    }

    public reset(): void {
        this.elementId = 0;
        this.elementCellId = 0;
        this.elementState = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_StatedElement(param1);
    }

    public serializeAs_StatedElement(param1: ICustomDataOutput): void {
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element elementId.');
        }
        param1.writeInt(this.elementId);
        if (this.elementCellId < 0 || this.elementCellId > 559) {
            throw new Error('Forbidden value (' + this.elementCellId + ') on element elementCellId.');
        }
        param1.writeVarShort(this.elementCellId);
        if (this.elementState < 0) {
            throw new Error('Forbidden value (' + this.elementState + ') on element elementState.');
        }
        param1.writeVarInt(this.elementState);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_StatedElement(param1);
    }

    public deserializeAs_StatedElement(param1: ICustomDataInput): void {
        this.elementId = param1.readInt();
        if (this.elementId < 0) {
            throw new Error('Forbidden value (' + this.elementId + ') on element of StatedElement.elementId.');
        }
        this.elementCellId = param1.readVarUhShort();
        if (this.elementCellId < 0 || this.elementCellId > 559) {
            throw new Error('Forbidden value (' + this.elementCellId + ') on element of StatedElement.elementCellId.');
        }
        this.elementState = param1.readVarUhInt();
        if (this.elementState < 0) {
            throw new Error('Forbidden value (' + this.elementState + ') on element of StatedElement.elementState.');
        }

    }
}

export = StatedElement;
