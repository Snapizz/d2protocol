/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import Shortcut = require('./shortcut');

class ShortcutEmote extends Shortcut implements INetworkType {
    public static ID: number = 389;

    emoteId: number;

    constructor() {
        this.emoteId = 0;
        super();
    }

    public getTypeId(): number {
        return ShortcutEmote.ID;
    }

    public reset(): void {
        this.emoteId = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_ShortcutEmote(param1);
    }

    public serializeAs_ShortcutEmote(param1: ICustomDataOutput): void {
        super.serializeAs_Shortcut(param1);
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element emoteId.');
        }
        param1.writeByte(this.emoteId);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_ShortcutEmote(param1);
    }

    public deserializeAs_ShortcutEmote(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.emoteId = param1.readUnsignedByte();
        if (this.emoteId < 0 || this.emoteId > 255) {
            throw new Error('Forbidden value (' + this.emoteId + ') on element of ShortcutEmote.emoteId.');
        }

    }
}

export = ShortcutEmote;
