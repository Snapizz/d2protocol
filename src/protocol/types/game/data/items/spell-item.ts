/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import Item = require('./item');

class SpellItem extends Item implements INetworkType {
    public static ID: number = 49;

    position: number;
    spellId: number;
    spellLevel: number;

    constructor() {
        this.position = 0;
        this.spellId = 0;
        this.spellLevel = 0;
        super();
    }

    public getTypeId(): number {
        return SpellItem.ID;
    }

    public reset(): void {
        this.position = 0;
        this.spellId = 0;
        this.spellLevel = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_SpellItem(param1);
    }

    public serializeAs_SpellItem(param1: ICustomDataOutput): void {
        super.serializeAs_Item(param1);
        if (this.position < 63 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element position.');
        }
        param1.writeByte(this.position);
        param1.writeInt(this.spellId);
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element spellLevel.');
        }
        param1.writeByte(this.spellLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_SpellItem(param1);
    }

    public deserializeAs_SpellItem(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.position = param1.readUnsignedByte();
        if (this.position < 63 || this.position > 255) {
            throw new Error('Forbidden value (' + this.position + ') on element of SpellItem.position.');
        }
        this.spellId = param1.readInt();
        this.spellLevel = param1.readByte();
        if (this.spellLevel < 1 || this.spellLevel > 6) {
            throw new Error('Forbidden value (' + this.spellLevel + ') on element of SpellItem.spellLevel.');
        }

    }
}

export = SpellItem;
