/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharacterLevelUpMessage = require('./character-level-up-message');
declare class CharacterLevelUpInformationMessage extends CharacterLevelUpMessage {
    static ID: number;
    name: string;
    id: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterLevelUpInformationMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterLevelUpInformationMessage(param1: ICustomDataInput): void;
}
export = CharacterLevelUpInformationMessage;
