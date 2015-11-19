/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTemporaryBoostEffect = require('./fight-temporary-boost-effect');
declare class FightTemporaryBoostWeaponDamagesEffect extends FightTemporaryBoostEffect implements INetworkType {
    static ID: number;
    weaponTypeId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTemporaryBoostWeaponDamagesEffect(param1: ICustomDataInput): void;
}
export = FightTemporaryBoostWeaponDamagesEffect;
