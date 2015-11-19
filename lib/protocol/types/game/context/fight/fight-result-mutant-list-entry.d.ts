/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightResultFighterListEntry = require('./fight-result-fighter-list-entry');
declare class FightResultMutantListEntry extends FightResultFighterListEntry implements INetworkType {
    static ID: number;
    level: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightResultMutantListEntry(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightResultMutantListEntry(param1: ICustomDataInput): void;
}
export = FightResultMutantListEntry;
