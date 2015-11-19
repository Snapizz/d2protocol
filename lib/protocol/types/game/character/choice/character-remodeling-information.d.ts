/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractCharacterInformation = require('./../abstract-character-information');
declare class CharacterRemodelingInformation extends AbstractCharacterInformation implements INetworkType {
    static ID: number;
    name: string;
    breed: number;
    sex: boolean;
    cosmeticId: number;
    colors: number[];
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterRemodelingInformation(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterRemodelingInformation(param1: ICustomDataInput): void;
}
export = CharacterRemodelingInformation;
