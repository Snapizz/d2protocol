/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Shortcut = require('./shortcut');

class ShortcutSpell extends Shortcut implements INetworkType {
    public static ID: number = 368;

    spellId: number;

    constructor() {
        this.spellId = 0;
        super();
    }

    public getTypeId(): number {
        return ShortcutSpell.ID;
    }

    public reset(): void {
        this.spellId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ShortcutSpell(param1);
    }

    public serializeAs_ShortcutSpell(param1: ICustomDataOutput): void {
        super.serializeAs_Shortcut(param1);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutSpell(param1);
    }

    public deserializeAs_ShortcutSpell(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of ShortcutSpell.spellId.');
        }

    }
}

export = ShortcutSpell;
