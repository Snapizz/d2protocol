/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import EmotePlayAbstractMessage = require('./emote-play-abstract-message');
declare class EmotePlayMessage extends EmotePlayAbstractMessage {
    static ID: number;
    actorId: number;
    accountId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_EmotePlayMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_EmotePlayMessage(param1: ICustomDataInput): void;
}
export = EmotePlayMessage;
