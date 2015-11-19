/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractFightDispellableEffect = require('./abstract-fight-dispellable-effect');

class FightTemporaryBoostEffect extends AbstractFightDispellableEffect implements INetworkType {
    public static ID: number = 209;

    delta: number;

    constructor() {
        this.delta = 0;
        super();
    }

    public getTypeId(): number {
        return FightTemporaryBoostEffect.ID;
    }

    public reset(): void {
        this.delta = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTemporaryBoostEffect(param1);
    }

    public serializeAs_FightTemporaryBoostEffect(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractFightDispellableEffect(param1);
        param1.writeShort(this.delta);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTemporaryBoostEffect(param1);
    }

    public deserializeAs_FightTemporaryBoostEffect(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.delta = param1.readShort();

    }
}

export = FightTemporaryBoostEffect;
