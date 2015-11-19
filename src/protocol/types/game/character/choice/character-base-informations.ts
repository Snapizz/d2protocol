/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import CharacterMinimalPlusLookInformations = require('./../character-minimal-plus-look-informations');
import EntityLook = require('../../look/entity-look');

class CharacterBaseInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
    public static ID: number = 45;

    breed: number;
    sex: boolean;

    constructor() {
        this.breed = 0;
        this.sex = false;
        super();
    }

    public getTypeId(): number {
        return CharacterBaseInformations.ID;
    }

    public reset(): void {
        this.breed = 0;
        this.sex = false;
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterBaseInformations(param1);
    }

    public serializeAs_CharacterBaseInformations(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterMinimalPlusLookInformations(param1);
        param1.writeByte(this.breed);
        param1.writeBoolean(this.sex);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterBaseInformations(param1);
    }

    public deserializeAs_CharacterBaseInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.breed = param1.readByte();
        this.sex = param1.readBoolean();

    }
}

export = CharacterBaseInformations;
