/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import CharacterMinimalInformations = require('./character-minimal-informations');
import EntityLook = require('../look/entity-look');
declare class CharacterMinimalPlusLookInformations extends CharacterMinimalInformations implements INetworkType {
    static ID: number;
    entityLook: EntityLook;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterMinimalPlusLookInformations(param1: ICustomDataInput): void;
}
export = CharacterMinimalPlusLookInformations;
