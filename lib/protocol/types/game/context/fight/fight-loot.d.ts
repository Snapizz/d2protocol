/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
declare class FightLoot implements INetworkType {
    static ID: number;
    objects: number[];
    kamas: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightLoot(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightLoot(param1: ICustomDataInput): void;
}
export = FightLoot;
