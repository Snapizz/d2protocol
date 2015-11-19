/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import TreasureHuntStep = require('./treasure-hunt-step');

class TreasureHuntStepFollowDirectionToPOI extends TreasureHuntStep implements INetworkType {
    public static ID: number = 461;

    direction: number;
    poiLabelId: number;

    constructor() {
        this.direction = 1;
        this.poiLabelId = 0;
        super();
    }

    public getTypeId(): number {
        return TreasureHuntStepFollowDirectionToPOI.ID;
    }

    public reset(): void {
        this.direction = 1;
        this.poiLabelId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TreasureHuntStepFollowDirectionToPOI(param1);
    }

    public serializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataOutput): void {
        super.serializeAs_TreasureHuntStep(param1);
        param1.writeByte(this.direction);
        if (this.poiLabelId < 0) {
            throw new Error('Forbidden value (' + this.poiLabelId + ') on element poiLabelId.');
        }
        param1.writeVarShort(this.poiLabelId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntStepFollowDirectionToPOI(param1);
    }

    public deserializeAs_TreasureHuntStepFollowDirectionToPOI(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirectionToPOI.direction.');
        }
        this.poiLabelId = param1.readVarUhShort();
        if (this.poiLabelId < 0) {
            throw new Error('Forbidden value (' + this.poiLabelId + ') on element of TreasureHuntStepFollowDirectionToPOI.poiLabelId.');
        }

    }
}

export = TreasureHuntStepFollowDirectionToPOI;
