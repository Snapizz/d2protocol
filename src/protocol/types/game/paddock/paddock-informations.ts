/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');

class PaddockInformations implements INetworkType {
    public static ID: number = 132;

    maxOutdoorMount: number;
    maxItems: number;

    constructor() {
        this.maxOutdoorMount = 0;
        this.maxItems = 0;
    }

    public getTypeId(): number {
        return PaddockInformations.ID;
    }

    public reset(): void {
        this.maxOutdoorMount = 0;
        this.maxItems = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_PaddockInformations(param1);
    }

    public serializeAs_PaddockInformations(param1: ICustomDataOutput): void {
        if (this.maxOutdoorMount < 0) {
            throw new Error('Forbidden value (' + this.maxOutdoorMount + ') on element maxOutdoorMount.');
        }
        param1.writeVarShort(this.maxOutdoorMount);
        if (this.maxItems < 0) {
            throw new Error('Forbidden value (' + this.maxItems + ') on element maxItems.');
        }
        param1.writeVarShort(this.maxItems);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_PaddockInformations(param1);
    }

    public deserializeAs_PaddockInformations(param1: ICustomDataInput): void {
        this.maxOutdoorMount = param1.readVarUhShort();
        if (this.maxOutdoorMount < 0) {
            throw new Error('Forbidden value (' + this.maxOutdoorMount + ') on element of PaddockInformations.maxOutdoorMount.');
        }
        this.maxItems = param1.readVarUhShort();
        if (this.maxItems < 0) {
            throw new Error('Forbidden value (' + this.maxItems + ') on element of PaddockInformations.maxItems.');
        }

    }
}

export = PaddockInformations;
