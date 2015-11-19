/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractFightDispellableEffect = require('./abstract-fight-dispellable-effect');
declare class FightTemporaryBoostEffect extends AbstractFightDispellableEffect implements INetworkType {
    static ID: number;
    delta: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTemporaryBoostEffect(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTemporaryBoostEffect(param1: ICustomDataInput): void;
}
export = FightTemporaryBoostEffect;
