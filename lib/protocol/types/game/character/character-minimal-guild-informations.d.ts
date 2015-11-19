/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import CharacterMinimalPlusLookInformations = require('./character-minimal-plus-look-informations');
import BasicGuildInformations = require('../context/roleplay/basic-guild-informations');
declare class CharacterMinimalGuildInformations extends CharacterMinimalPlusLookInformations implements INetworkType {
    static ID: number;
    guild: BasicGuildInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterMinimalGuildInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterMinimalGuildInformations(param1: ICustomDataInput): void;
}
export = CharacterMinimalGuildInformations;
