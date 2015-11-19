/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ChatClientMultiMessage = require('./chat-client-multi-message');
import ObjectItem = require('../../../types/game/data/items/object-item');
declare class ChatClientMultiWithObjectMessage extends ChatClientMultiMessage {
    static ID: number;
    objects: ObjectItem[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ChatClientMultiWithObjectMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ChatClientMultiWithObjectMessage(param1: ICustomDataInput): void;
}
export = ChatClientMultiWithObjectMessage;
