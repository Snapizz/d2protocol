/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import TreasureHuntStep = require('./treasure-hunt-step');

class TreasureHuntStepFollowDirectionToHint extends TreasureHuntStep implements INetworkType {
    public static ID: number = 472;

    direction: number;
    npcId: number;

    constructor() {
        this.direction = 1;
        this.npcId = 0;
        super();
    }

    public getTypeId(): number {
        return TreasureHuntStepFollowDirectionToHint.ID;
    }

    public reset(): void {
        this.direction = 1;
        this.npcId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_TreasureHuntStepFollowDirectionToHint(param1);
    }

    public serializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataOutput): void {
        super.serializeAs_TreasureHuntStep(param1);
        param1.writeByte(this.direction);
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element npcId.');
        }
        param1.writeVarShort(this.npcId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_TreasureHuntStepFollowDirectionToHint(param1);
    }

    public deserializeAs_TreasureHuntStepFollowDirectionToHint(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.direction = param1.readByte();
        if (this.direction < 0) {
            throw new Error('Forbidden value (' + this.direction + ') on element of TreasureHuntStepFollowDirectionToHint.direction.');
        }
        this.npcId = param1.readVarUhShort();
        if (this.npcId < 0) {
            throw new Error('Forbidden value (' + this.npcId + ') on element of TreasureHuntStepFollowDirectionToHint.npcId.');
        }

    }
}

export = TreasureHuntStepFollowDirectionToHint;
