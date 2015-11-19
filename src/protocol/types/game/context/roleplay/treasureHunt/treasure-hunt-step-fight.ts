/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import TreasureHuntStep = require('./treasure-hunt-step');

class TreasureHuntStepFight extends TreasureHuntStep implements INetworkType {
    public static ID: number = 462;



    constructor() {

        super();
    }

    public getTypeId(): number {
        return TreasureHuntStepFight.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TreasureHuntStepFight(param1);
    }

    public serializeAs_TreasureHuntStepFight(param1: ICustomDataOutput): void {

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntStepFight(param1);
    }

    public deserializeAs_TreasureHuntStepFight(param1: ICustomDataInput): void {

    }
}

export = TreasureHuntStepFight;
