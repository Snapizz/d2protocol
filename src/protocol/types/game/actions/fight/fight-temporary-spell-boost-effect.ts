/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTemporaryBoostEffect = require('./fight-temporary-boost-effect');

class FightTemporarySpellBoostEffect extends FightTemporaryBoostEffect implements INetworkType {
    public static ID: number = 207;

    boostedSpellId: number;

    constructor() {
        this.boostedSpellId = 0;
        super();
    }

    public getTypeId(): number {
        return FightTemporarySpellBoostEffect.ID;
    }

    public reset(): void {
        this.boostedSpellId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTemporarySpellBoostEffect(param1);
    }

    public serializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataOutput): void {
        super.serializeAs_FightTemporaryBoostEffect(param1);
        if (this.boostedSpellId < 0) {
            throw new Error('Forbidden value (' + this.boostedSpellId + ') on element boostedSpellId.');
        }
        param1.writeVarShort(this.boostedSpellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTemporarySpellBoostEffect(param1);
    }

    public deserializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.boostedSpellId = param1.readVarUhShort();
        if (this.boostedSpellId < 0) {
            throw new Error('Forbidden value (' + this.boostedSpellId + ') on element of FightTemporarySpellBoostEffect.boostedSpellId.');
        }

    }
}

export = FightTemporarySpellBoostEffect;
