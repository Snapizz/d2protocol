/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTemporaryBoostEffect = require('./fight-temporary-boost-effect');
declare class FightTemporarySpellBoostEffect extends FightTemporaryBoostEffect implements INetworkType {
    static ID: number;
    boostedSpellId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTemporarySpellBoostEffect(param1: ICustomDataInput): void;
}
export = FightTemporarySpellBoostEffect;
