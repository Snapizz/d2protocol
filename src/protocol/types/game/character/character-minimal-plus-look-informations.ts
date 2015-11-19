/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../boolean-byte-wrapper');
import CharacterMinimalInformations = require('./character-minimal-informations');
import EntityLook = require('../look/entity-look');

class CharacterMinimalPlusLookInformations extends CharacterMinimalInformations implements INetworkType {
    public static ID: number = 163;

    entityLook: EntityLook;

    constructor() {
        this.entityLook = new EntityLook();
        super();
    }

    public getTypeId(): number {
        return CharacterMinimalPlusLookInformations.ID;
    }

    public reset(): void {
        this.entityLook = new EntityLook();
    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterMinimalPlusLookInformations(param1);
    }

    public serializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataOutput): void {
        super.serializeAs_CharacterMinimalInformations(param1);
        this.entityLook.serializeAs_EntityLook(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterMinimalPlusLookInformations(param1);
    }

    public deserializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataInput): void {
        super.deserialize(param1);
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(param1);

    }
}

export = CharacterMinimalPlusLookInformations;
