/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ChatAbstractClientMessage = require('./chat-abstract-client-message');
declare class ChatClientPrivateMessage extends ChatAbstractClientMessage {
    static ID: number;
    receiver: string;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ChatClientPrivateMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ChatClientPrivateMessage(param1: ICustomDataInput): void;
}
export = ChatClientPrivateMessage;
