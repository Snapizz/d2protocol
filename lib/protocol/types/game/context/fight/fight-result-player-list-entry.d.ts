/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import FightResultAdditionalData = require('./fight-result-additional-data');
import FightResultFighterListEntry = require('./fight-result-fighter-list-entry');
declare class FightResultPlayerListEntry extends FightResultFighterListEntry implements INetworkType {
    static ID: number;
    level: number;
    additional: FightResultAdditionalData[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_FightResultPlayerListEntry(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_FightResultPlayerListEntry(param1: ICustomDataInput): void;
}
export = FightResultPlayerListEntry;
