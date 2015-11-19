/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');

class TreasureHuntStep implements INetworkType {
    public static ID: number = 463;



    constructor() {

    }

    public getTypeId(): number {
        return TreasureHuntStep.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TreasureHuntStep(param1);
    }

    public serializeAs_TreasureHuntStep(param1: ICustomDataOutput): void {

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntStep(param1);
    }

    public deserializeAs_TreasureHuntStep(param1: ICustomDataInput): void {

    }
}

export = TreasureHuntStep;
