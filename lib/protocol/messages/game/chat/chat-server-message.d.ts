/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ChatAbstractServerMessage = require('./chat-abstract-server-message');
declare class ChatServerMessage extends ChatAbstractServerMessage {
    static ID: number;
    senderId: number;
    senderName: string;
    senderAccountId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ChatServerMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ChatServerMessage(param1: ICustomDataInput): void;
}
export = ChatServerMessage;
