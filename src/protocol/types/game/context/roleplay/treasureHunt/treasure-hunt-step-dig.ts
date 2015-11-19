/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import TreasureHuntStep = require('./treasure-hunt-step');

class TreasureHuntStepDig extends TreasureHuntStep implements INetworkType {
    public static ID: number = 465;



    constructor() {

        super();
    }

    public getTypeId(): number {
        return TreasureHuntStepDig.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TreasureHuntStepDig(param1);
    }

    public serializeAs_TreasureHuntStepDig(param1: ICustomDataOutput): void {

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntStepDig(param1);
    }

    public deserializeAs_TreasureHuntStepDig(param1: ICustomDataInput): void {

    }
}

export = TreasureHuntStepDig;
