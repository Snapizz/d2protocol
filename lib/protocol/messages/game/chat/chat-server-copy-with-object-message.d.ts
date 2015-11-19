/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import ChatServerCopyMessage = require('./chat-server-copy-message');
import ObjectItem = require('../../../types/game/data/items/object-item');
declare class ChatServerCopyWithObjectMessage extends ChatServerCopyMessage {
    static ID: number;
    objects: ObjectItem[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_ChatServerCopyWithObjectMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_ChatServerCopyWithObjectMessage(param1: ICustomDataInput): void;
}
export = ChatServerCopyWithObjectMessage;
