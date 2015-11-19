/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');

class CharacterBaseCharacteristic implements INetworkType {
    public static ID: number = 4;

    base: number;
    additionnal: number;
    objectsAndMountBonus: number;
    alignGiftBonus: number;
    contextModif: number;

    constructor() {
        this.base = 0;
        this.additionnal = 0;
        this.objectsAndMountBonus = 0;
        this.alignGiftBonus = 0;
        this.contextModif = 0;
    }

    public getTypeId(): number {
        return CharacterBaseCharacteristic.ID;
    }

    public reset(): void {
        this.base = 0;
        this.additionnal = 0;
        this.objectsAndMountBonus = 0;
        this.alignGiftBonus = 0;
        this.contextModif = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterBaseCharacteristic(param1);
    }

    public serializeAs_CharacterBaseCharacteristic(param1: ICustomDataOutput): void {
        param1.writeVarShort(this.base);
        param1.writeVarShort(this.additionnal);
        param1.writeVarShort(this.objectsAndMountBonus);
        param1.writeVarShort(this.alignGiftBonus);
        param1.writeVarShort(this.contextModif);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterBaseCharacteristic(param1);
    }

    public deserializeAs_CharacterBaseCharacteristic(param1: ICustomDataInput): void {
        this.base = param1.readVarShort();
        this.additionnal = param1.readVarShort();
        this.objectsAndMountBonus = param1.readVarShort();
        this.alignGiftBonus = param1.readVarShort();
        this.contextModif = param1.readVarShort();

    }
}

export = CharacterBaseCharacteristic;
