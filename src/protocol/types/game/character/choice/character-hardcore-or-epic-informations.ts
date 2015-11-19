/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterBaseInformations = require('./character-base-informations');
import EntityLook = require('../../look/entity-look');

class CharacterHardcoreOrEpicInformations extends CharacterBaseInformations implements INetworkType {
    public static ID: number = 474;

    deathState: number;
    deathCount: number;
    deathMaxLevel: number;

    constructor() {
        this.deathState = 0;
        this.deathCount = 0;
        this.deathMaxLevel = 0;
        super();
    }

    public getTypeId(): number {
        return CharacterHardcoreOrEpicInformations.ID;
    }

    public reset(): void {
        this.deathState = 0;
        this.deathCount = 0;
        this.deathMaxLevel = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterHardcoreOrEpicInformations(param1);
    }

    public serializeAs_CharacterHardcoreOrEpicInformations(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterBaseInformations(param1);
        param1.writeByte(this.deathState);
        if (this.deathCount < 0) {
            throw new Error('Forbidden value (' + this.deathCount + ') on element deathCount.');
        }
        param1.writeVarShort(this.deathCount);
        if (this.deathMaxLevel < 1 || this.deathMaxLevel > 200) {
            throw new Error('Forbidden value (' + this.deathMaxLevel + ') on element deathMaxLevel.');
        }
        param1.writeByte(this.deathMaxLevel);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterHardcoreOrEpicInformations(param1);
    }

    public deserializeAs_CharacterHardcoreOrEpicInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.deathState = param1.readByte();
        if (this.deathState < 0) {
            throw new Error('Forbidden value (' + this.deathState + ') on element of CharacterHardcoreOrEpicInformations.deathState.');
        }
        this.deathCount = param1.readVarUhShort();
        if (this.deathCount < 0) {
            throw new Error('Forbidden value (' + this.deathCount + ') on element of CharacterHardcoreOrEpicInformations.deathCount.');
        }
        this.deathMaxLevel = param1.readUnsignedByte();
        if (this.deathMaxLevel < 1 || this.deathMaxLevel > 200) {
            throw new Error('Forbidden value (' + this.deathMaxLevel + ') on element of CharacterHardcoreOrEpicInformations.deathMaxLevel.');
        }

    }
}

export = CharacterHardcoreOrEpicInformations;
