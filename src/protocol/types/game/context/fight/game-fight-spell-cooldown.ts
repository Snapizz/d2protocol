/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class GameFightSpellCooldown implements INetworkType {
    public static ID: number = 205;

    spellId: number;
    cooldown: number;

    constructor() {
        this.spellId = 0;
        this.cooldown = 0;
    }

    public getTypeId(): number {
        return GameFightSpellCooldown.ID;
    }

    public reset(): void {
        this.spellId = 0;
        this.cooldown = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_GameFightSpellCooldown(param1);
    }

    public serializeAs_GameFightSpellCooldown(param1: ICustomDataOutput): void {
        param1.writeInt(this.spellId);
        if (this.cooldown < 0) {
            throw new Error('Forbidden value (' + this.cooldown + ') on element cooldown.');
        }
        param1.writeByte(this.cooldown);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_GameFightSpellCooldown(param1);
    }

    public deserializeAs_GameFightSpellCooldown(param1: ICustomDataInput): void {
        this.spellId = param1.readInt();
        this.cooldown = param1.readByte();
        if (this.cooldown < 0) {
            throw new Error('Forbidden value (' + this.cooldown + ') on element of GameFightSpellCooldown.cooldown.');
        }

    }
}

export = GameFightSpellCooldown;
