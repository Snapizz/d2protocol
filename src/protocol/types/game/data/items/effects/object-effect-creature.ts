/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../../boolean-byte-wrapper');
import ObjectEffect = require('./object-effect');

class ObjectEffectCreature extends ObjectEffect implements INetworkType {
    public static ID: number = 71;

    monsterFamilyId: number;

    constructor() {
        this.monsterFamilyId = 0;
        super();
    }

    public getTypeId(): number {
        return ObjectEffectCreature.ID;
    }

    public reset(): void {
        this.monsterFamilyId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ObjectEffectCreature(param1);
    }

    public serializeAs_ObjectEffectCreature(param1: ICustomDataOutput): void {
        super.serializeAs_ObjectEffect(param1);
        if (this.monsterFamilyId < 0) {
            throw new Error('Forbidden value (' + this.monsterFamilyId + ') on element monsterFamilyId.');
        }
        param1.writeVarShort(this.monsterFamilyId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ObjectEffectCreature(param1);
    }

    public deserializeAs_ObjectEffectCreature(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.monsterFamilyId = param1.readVarUhShort();
        if (this.monsterFamilyId < 0) {
            throw new Error('Forbidden value (' + this.monsterFamilyId + ') on element of ObjectEffectCreature.monsterFamilyId.');
        }

    }
}

export = ObjectEffectCreature;
