/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ChatServerMessage = require('./chat-server-message');
import ObjectItem = require('../../../types/game/data/items/object-item');
declare class ChatServerWithObjectMessage extends ChatServerMessage {
    static ID: number;
    objects: ObjectItem[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ChatServerWithObjectMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ChatServerWithObjectMessage(param1: ICustomDataInput): void;
}
export = ChatServerWithObjectMessage;
