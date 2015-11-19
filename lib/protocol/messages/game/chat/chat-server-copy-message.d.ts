/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ChatAbstractServerMessage = require('./chat-abstract-server-message');
declare class ChatServerCopyMessage extends ChatAbstractServerMessage {
    static ID: number;
    receiverId: number;
    receiverName: string;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ChatServerCopyMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ChatServerCopyMessage(param1: ICustomDataInput): void;
}
export = ChatServerCopyMessage;
