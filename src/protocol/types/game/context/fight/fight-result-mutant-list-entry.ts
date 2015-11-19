/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightResultFighterListEntry = require('./fight-result-fighter-list-entry');

class FightResultMutantListEntry extends FightResultFighterListEntry implements INetworkType {
    public static ID: number = 216;

    level: number;

    constructor() {
        this.level = 0;
        super();
    }

    public getTypeId(): number {
        return FightResultMutantListEntry.ID;
    }

    public reset(): void {
        this.level = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightResultMutantListEntry(param1);
    }

    public serializeAs_FightResultMutantListEntry(param1: ICustomDataOutput): void {
        super.serializeAs_FightResultFighterListEntry(param1);
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element level.');
        }
        param1.writeVarShort(this.level);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightResultMutantListEntry(param1);
    }

    public deserializeAs_FightResultMutantListEntry(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.level = param1.readVarUhShort();
        if (this.level < 0) {
            throw new Error('Forbidden value (' + this.level + ') on element of FightResultMutantListEntry.level.');
        }

    }
}

export = FightResultMutantListEntry;
