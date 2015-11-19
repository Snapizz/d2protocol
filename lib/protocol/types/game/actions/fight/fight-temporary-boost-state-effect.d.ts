/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightTemporaryBoostEffect = require('./fight-temporary-boost-effect');
declare class FightTemporaryBoostStateEffect extends FightTemporaryBoostEffect implements INetworkType {
    static ID: number;
    stateId: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightTemporaryBoostStateEffect(param1: ICustomDataInput): void;
}
export = FightTemporaryBoostStateEffect;
