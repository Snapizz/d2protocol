/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import ChatSmileyMessage = require('./chat-smiley-message');
declare class LocalizedChatSmileyMessage extends ChatSmileyMessage {
    static ID: number;
    cellId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_LocalizedChatSmileyMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_LocalizedChatSmileyMessage(param1: ICustomDataInput): void;
}
export = LocalizedChatSmileyMessage;
