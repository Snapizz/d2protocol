/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharacterMinimalPlusLookInformations = require('./../character-minimal-plus-look-informations');
declare class CharacterBaseInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
    static ID: number;
    breed: number;
    sex: boolean;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterBaseInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterBaseInformations(param1: ICustomDataInput): void;
}
export = CharacterBaseInformations;
