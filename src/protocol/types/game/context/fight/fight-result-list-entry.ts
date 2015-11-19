/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import FightLoot = require('./fight-loot');

class FightResultListEntry implements INetworkType {
    public static ID: number = 16;

    outcome: number;
    wave: number;
    rewards: FightLoot;

    constructor() {
        this.outcome = 0;
        this.wave = 0;
        this.rewards = new FightLoot();
    }

    public getTypeId(): number {
        return FightResultListEntry.ID;
    }

    public reset(): void {
        this.outcome = 0;
        this.wave = 0;
        this.rewards = new FightLoot();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_FightResultListEntry(param1);
    }

    public serializeAs_FightResultListEntry(param1: ICustomDataOutput): void {
        param1.writeVarShort(this.outcome);
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element wave.');
        }
        param1.writeByte(this.wave);
        this.rewards.serializeAs_FightLoot(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_FightResultListEntry(param1);
    }

    public deserializeAs_FightResultListEntry(param1: ICustomDataInput): void {
        this.outcome = param1.readVarUhShort();
        if (this.outcome < 0) {
            throw new Error('Forbidden value (' + this.outcome + ') on element of FightResultListEntry.outcome.');
        }
        this.wave = param1.readByte();
        if (this.wave < 0) {
            throw new Error('Forbidden value (' + this.wave + ') on element of FightResultListEntry.wave.');
        }
        this.rewards = new FightLoot();
        this.rewards.deserialize(param1);

    }
}

export = FightResultListEntry;
