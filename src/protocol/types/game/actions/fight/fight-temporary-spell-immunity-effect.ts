/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractFightDispellableEffect = require('./abstract-fight-dispellable-effect');

class FightTemporarySpellImmunityEffect extends AbstractFightDispellableEffect implements INetworkType {
    public static ID: number = 366;

    immuneSpellId: number;

    constructor() {
        this.immuneSpellId = 0;
        super();
    }

    public getTypeId(): number {
        return FightTemporarySpellImmunityEffect.ID;
    }

    public reset(): void {
        this.immuneSpellId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTemporarySpellImmunityEffect(param1);
    }

    public serializeAs_FightTemporarySpellImmunityEffect(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractFightDispellableEffect(param1);
        param1.writeInt(this.immuneSpellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTemporarySpellImmunityEffect(param1);
    }

    public deserializeAs_FightTemporarySpellImmunityEffect(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.immuneSpellId = param1.readInt();

    }
}

export = FightTemporarySpellImmunityEffect;
