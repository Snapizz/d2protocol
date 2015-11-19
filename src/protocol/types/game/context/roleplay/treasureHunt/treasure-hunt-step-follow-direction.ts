/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import TreasureHuntStep = require('./treasure-hunt-step');

class TreasureHuntStepFollowDirection extends TreasureHuntStep implements INetworkType {
    public static ID: number = 468;

    direction: number;
    mapCount: number;

    constructor() {
        this.direction = 1;
        this.mapCount = 0;
        super();
    }

    public getTypeId(): number {
        return TreasureHuntStepFollowDirection.ID;
    }

    public reset(): void {
        this.direction = 1;
        this.mapCount = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TreasureHuntStepFollowDirection(param1);
    }

    public serializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataOutput): void {
        super.serializeAs_TreasureHuntStep(param1);
        param1.writeByte(this.direction);
        if (this.mapCount < 0) {
            throw new Error('Forbidden value (' + this.mapCount + ') on element mapCount.');
        }
        param1.writeVarShort(this.mapCount);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntStepFollowDirection(param1);
    }

    public deserializeAs_TreasureHuntStepFollowDirection(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirection.direction.');
        }
        this.mapCount = param1.readVarUhShort();
        if (this.mapCount < 0) {
            throw new Error('Forbidden value (' + this.mapCount + ') on element of TreasureHuntStepFollowDirection.mapCount.');
        }

    }
}

export = TreasureHuntStepFollowDirection;
