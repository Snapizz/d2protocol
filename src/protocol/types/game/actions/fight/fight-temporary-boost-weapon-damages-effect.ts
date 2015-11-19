/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightTemporaryBoostEffect = require('./fight-temporary-boost-effect');

class FightTemporaryBoostWeaponDamagesEffect extends FightTemporaryBoostEffect implements INetworkType {
    public static ID: number = 211;

    weaponTypeId: number;

    constructor() {
        this.weaponTypeId = 0;
        super();
    }

    public getTypeId(): number {
        return FightTemporaryBoostWeaponDamagesEffect.ID;
    }

    public reset(): void {
        this.weaponTypeId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightTemporaryBoostWeaponDamagesEffect(param1);
    }

    public serializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataOutput): void {
        super.serializeAs_FightTemporaryBoostEffect(param1);
        param1.writeShort(this.weaponTypeId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightTemporaryBoostWeaponDamagesEffect(param1);
    }

    public deserializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.weaponTypeId = param1.readShort();

    }
}

export = FightTemporaryBoostWeaponDamagesEffect;
