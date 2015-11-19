/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Shortcut = require('./shortcut');

class ShortcutSmiley extends Shortcut implements INetworkType {
    public static ID: number = 388;

    smileyId: number;

    constructor() {
        this.smileyId = 0;
        super();
    }

    public getTypeId(): number {
        return ShortcutSmiley.ID;
    }

    public reset(): void {
        this.smileyId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ShortcutSmiley(param1);
    }

    public serializeAs_ShortcutSmiley(param1: ICustomDataOutput): void {
        super.serializeAs_Shortcut(param1);
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
        }
        param1.writeVarShort(this.smileyId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutSmiley(param1);
    }

    public deserializeAs_ShortcutSmiley(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.smileyId = param1.readVarUhShort();
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element of ShortcutSmiley.smileyId.');
        }

    }
}

export = ShortcutSmiley;
