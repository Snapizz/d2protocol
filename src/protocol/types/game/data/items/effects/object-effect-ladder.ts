/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import ObjectEffectCreature = require('./object-effect-creature');

class ObjectEffectLadder extends ObjectEffectCreature implements INetworkType {
    public static ID: number = 81;

    monsterCount: number;

    constructor() {
        this.monsterCount = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectEffectLadder.ID;
    }

    public reset(): void {
        this.monsterCount = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectEffectLadder(param1);
    }

    public serializeAs_ObjectEffectLadder(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectEffectCreature(param1);
        if (this.monsterCount < 0) {
            throw new Error('Forbidden value (' + this.monsterCount + ') on element monsterCount.');
        }
        param1.writeVarInt(this.monsterCount);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectEffectLadder(param1);
    }

    public deserializeAs_ObjectEffectLadder(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.monsterCount = param1.readVarUhInt();
        if (this.monsterCount < 0) {
            throw new Error('Forbidden value (' + this.monsterCount + ') on element of ObjectEffectLadder.monsterCount.');
        }

    }
}

export = ObjectEffectLadder;
