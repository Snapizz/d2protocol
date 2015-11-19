/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterBaseCharacteristic = require('./character-base-characteristic');

class CharacterSpellModification implements INetworkType {
    public static ID: number = 215;

    modificationType: number;
    spellId: number;
    value: CharacterBaseCharacteristic;

    constructor() {
        this.modificationType = 0;
        this.spellId = 0;
        this.value = new CharacterBaseCharacteristic();
    }

    public getTypeId(): number {
        return CharacterSpellModification.ID;
    }

    public reset(): void {
        this.modificationType = 0;
        this.spellId = 0;
        this.value = new CharacterBaseCharacteristic();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterSpellModification(param1);
    }

    public serializeAs_CharacterSpellModification(param1: ICustomDataOutput): void {
        param1.writeByte(this.modificationType);
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element spellId.');
        }
        param1.writeVarShort(this.spellId);
        this.value.serializeAs_CharacterBaseCharacteristic(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterSpellModification(param1);
    }

    public deserializeAs_CharacterSpellModification(param1: ICustomDataInput): void {
        this.modificationType = param1.readByte();
        if (this.modificationType < 0) {
            throw new Error('Forbidden value (' + this.modificationType + ') on element of CharacterSpellModification.modificationType.');
        }
        this.spellId = param1.readVarUhShort();
        if (this.spellId < 0) {
            throw new Error('Forbidden value (' + this.spellId + ') on element of CharacterSpellModification.spellId.');
        }
        this.value = new CharacterBaseCharacteristic();
        this.value.deserialize(param1);

    }
}

export = CharacterSpellModification;
