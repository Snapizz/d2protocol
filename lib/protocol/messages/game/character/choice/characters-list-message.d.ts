/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import BasicCharactersListMessage = require('./basic-characters-list-message');
declare class CharactersListMessage extends BasicCharactersListMessage {
    static ID: number;
    hasStartupActions: boolean;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_CharactersListMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_CharactersListMessage(param1: ICustomDataInput): void;
}
export = CharactersListMessage;
