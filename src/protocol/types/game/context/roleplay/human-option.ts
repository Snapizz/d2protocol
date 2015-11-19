/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class HumanOption implements INetworkType {
    public static ID: number = 406;



    constructor() {

    }

    public getTypeId(): number {
        return HumanOption.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_HumanOption(param1);
    }

    public serializeAs_HumanOption(param1: ICustomDataOutput): void {

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_HumanOption(param1);
    }

    public deserializeAs_HumanOption(param1: ICustomDataInput): void {

    }
}

export = HumanOption;
