/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import INetworkType = require('../../../../network-type');
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharacterBaseCharacteristic = require('./character-base-characteristic');
declare class CharacterSpellModification implements INetworkType {
    static ID: number;
    modificationType: number;
    spellId: number;
    value: CharacterBaseCharacteristic;
    constructor();
    getTypeId(): number;
    reset(): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterSpellModification(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterSpellModification(param1: ICustomDataInput): void;
}
export = CharacterSpellModification;
