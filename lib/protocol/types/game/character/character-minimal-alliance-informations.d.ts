/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import CharacterMinimalGuildInformations = require('./character-minimal-guild-informations');
import BasicAllianceInformations = require('../context/roleplay/basic-alliance-informations');
declare class CharacterMinimalAllianceInformations extends CharacterMinimalGuildInformations implements INetworkType {
    static ID: number;
    alliance: BasicAllianceInformations;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterMinimalAllianceInformations(param1: ICustomDataInput): void;
}
export = CharacterMinimalAllianceInformations;
