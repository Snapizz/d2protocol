/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightResultListEntry = require('./fight-result-list-entry');

class FightResultFighterListEntry extends FightResultListEntry implements INetworkType {
    public static ID: number = 189;

    id: number;
    alive: boolean;

    constructor() {
        this.id = 0;
        this.alive = false;
        super();
    }

    public getTypeId(): number {
        return FightResultFighterListEntry.ID;
    }

    public reset(): void {
        this.id = 0;
        this.alive = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightResultFighterListEntry(param1);
    }

    public serializeAs_FightResultFighterListEntry(param1: ICustomDataOutput): void {
        super.serializeAs_FightResultListEntry(param1);
        param1.writeInt(this.id);
        param1.writeBoolean(this.alive);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightResultFighterListEntry(param1);
    }

    public deserializeAs_FightResultFighterListEntry(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.id = param1.readInt();
        this.alive = param1.readBoolean();

    }
}

export = FightResultFighterListEntry;
