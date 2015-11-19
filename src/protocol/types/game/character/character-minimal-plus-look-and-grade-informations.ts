/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import CharacterMinimalPlusLookInformations = require('./character-minimal-plus-look-informations');
import EntityLook = require('../look/entity-look');

class CharacterMinimalPlusLookAndGradeInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
    public static ID: number = 193;

    grade: number;

    constructor() {
        this.grade = 0;
        super();
    }

    public getTypeId(): number {
        return CharacterMinimalPlusLookAndGradeInformations.ID;
    }

    public reset(): void {
        this.grade = 0;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterMinimalPlusLookAndGradeInformations(param1);
    }

    public serializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterMinimalPlusLookInformations(param1);
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element grade.');
        }
        param1.writeVarInt(this.grade);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterMinimalPlusLookAndGradeInformations(param1);
    }

    public deserializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.grade = param1.readVarUhInt();
        if (this.grade < 0) {
            throw new Error('Forbidden value (' + this.grade + ') on element of CharacterMinimalPlusLookAndGradeInformations.grade.');
        }

    }
}

export = CharacterMinimalPlusLookAndGradeInformations;
