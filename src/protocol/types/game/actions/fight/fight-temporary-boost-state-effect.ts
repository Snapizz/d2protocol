/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTemporaryBoostEffect = require('./fight-temporary-boost-effect');

class FightTemporaryBoostStateEffect extends FightTemporaryBoostEffect implements INetworkType {
    public static ID: number = 214;

    stateId: number;

    constructor() {
        this.stateId = 0;
        super();
    }

    public getTypeId(): number {
        return FightTemporaryBoostStateEffect.ID;
    }

    public reset(): void {
        this.stateId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTemporaryBoostStateEffect(param1);
    }

    public serializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataOutput): void {
        super.serializeAs_FightTemporaryBoostEffect(param1);
        param1.writeShort(this.stateId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTemporaryBoostStateEffect(param1);
    }

    public deserializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.stateId = param1.readShort();

    }
}

export = FightTemporaryBoostStateEffect;
