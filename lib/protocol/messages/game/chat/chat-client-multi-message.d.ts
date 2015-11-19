/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ChatAbstractClientMessage = require('./chat-abstract-client-message');
declare class ChatClientMultiMessage extends ChatAbstractClientMessage {
    static ID: number;
    channel: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ChatClientMultiMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ChatClientMultiMessage(param1: ICustomDataInput): void;
}
export = ChatClientMultiMessage;
