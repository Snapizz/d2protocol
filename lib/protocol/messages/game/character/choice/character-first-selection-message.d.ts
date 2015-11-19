/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import CharacterSelectionMessage = require('./character-selection-message');
declare class CharacterFirstSelectionMessage extends CharacterSelectionMessage {
    static ID: number;
    doTutorial: boolean;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharacterFirstSelectionMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharacterFirstSelectionMessage(param1: ICustomDataInput): void;
}
export = CharacterFirstSelectionMessage;
