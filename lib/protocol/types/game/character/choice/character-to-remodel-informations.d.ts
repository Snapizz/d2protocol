/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharacterRemodelingInformation = require('./character-remodeling-information');
declare class CharacterToRemodelInformations extends CharacterRemodelingInformation implements INetworkType {
    static ID: number;
    possibleChangeMask: number;
    mandatoryChangeMask: number;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterToRemodelInformations(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterToRemodelInformations(param1: ICustomDataInput): void;
}
export = CharacterToRemodelInformations;
