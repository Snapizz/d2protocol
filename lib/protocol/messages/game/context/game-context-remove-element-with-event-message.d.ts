/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GameContextRemoveElementMessage = require('./game-context-remove-element-message');
declare class GameContextRemoveElementWithEventMessage extends GameContextRemoveElementMessage {
    static ID: number;
    elementEventId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameContextRemoveElementWithEventMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameContextRemoveElementWithEventMessage(param1: ICustomDataInput): void;
}
export = GameContextRemoveElementWithEventMessage;
