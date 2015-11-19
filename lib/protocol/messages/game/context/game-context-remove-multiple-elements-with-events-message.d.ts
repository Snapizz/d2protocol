/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../custom-data-wrapper';
import GameContextRemoveMultipleElementsMessage = require('./game-context-remove-multiple-elements-message');
declare class GameContextRemoveMultipleElementsWithEventsMessage extends GameContextRemoveMultipleElementsMessage {
    static ID: number;
    elementEventIds: number[];
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameContextRemoveMultipleElementsWithEventsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameContextRemoveMultipleElementsWithEventsMessage(param1: ICustomDataInput): void;
}
export = GameContextRemoveMultipleElementsWithEventsMessage;
