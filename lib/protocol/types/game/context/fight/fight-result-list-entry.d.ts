/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightLoot = require('./fight-loot');
declare class FightResultListEntry implements INetworkType {
    static ID: number;
    outcome: number;
    wave: number;
    rewards: FightLoot;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightResultListEntry(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightResultListEntry(param1: ICustomDataInput): void;
}
export = FightResultListEntry;
