/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import EmotePlayAbstractMessage = require('./emote-play-abstract-message');
declare class EmotePlayMassiveMessage extends EmotePlayAbstractMessage {
    static ID: number;
    actorIds: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_EmotePlayMassiveMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_EmotePlayMassiveMessage(param1: ICustomDataInput): void;
}
export = EmotePlayMassiveMessage;
