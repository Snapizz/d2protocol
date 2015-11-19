/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import CharacterMinimalPlusLookInformations = require('./character-minimal-plus-look-informations');
declare class CharacterMinimalPlusLookAndGradeInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
    static ID: number;
    grade: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterMinimalPlusLookAndGradeInformations(param1: ICustomDataInput): void;
}
export = CharacterMinimalPlusLookAndGradeInformations;
