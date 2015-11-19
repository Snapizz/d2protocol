/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import AbstractCharacterInformation = require('./abstract-character-information');
declare class CharacterMinimalInformations extends AbstractCharacterInformation implements INetworkType {
    static ID: number;
    level: number;
    name: string;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterMinimalInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterMinimalInformations(param1: ICustomDataInput): void;
}
export = CharacterMinimalInformations;
