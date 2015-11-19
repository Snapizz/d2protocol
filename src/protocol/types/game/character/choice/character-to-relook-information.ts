/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />

import INetworkType = require('../../../../network-type');
import {CustomDataWrapper, ICustomDataOutput, ICustomDataInput} from '../../../../custom-data-wrapper';
import ByteArray = require('ts-bytearray');
import BooleanByteWrapper = require('../../../../boolean-byte-wrapper');
import AbstractCharacterToRefurbishInformation = require('./abstract-character-to-refurbish-information');

class CharacterToRelookInformation extends AbstractCharacterToRefurbishInformation implements INetworkType {
    public static ID: number = 399;



    constructor() {

        super();
    }

    public getTypeId(): number {
        return CharacterToRelookInformation.ID;
    }

    public reset(): void {

    }

    public serialize(param1: ICustomDataOutput): void {
        this.serializeAs_CharacterToRelookInformation(param1);
    }

    public serializeAs_CharacterToRelookInformation(param1: ICustomDataOutput): void {
        super.serializeAs_AbstractCharacterToRefurbishInformation(param1);

    }

    public deserialize(param1: ICustomDataInput): void {
        this.deserializeAs_CharacterToRelookInformation(param1);
    }

    public deserializeAs_CharacterToRelookInformation(param1: ICustomDataInput): void {
        super.deserialize(param1);

    }
}

export = CharacterToRelookInformation;
