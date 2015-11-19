/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractGameActionMessage = require('./../abstract-game-action-message');
declare class GameActionFightExchangePositionsMessage extends AbstractGameActionMessage {
    static ID: number;
    targetId: number;
    casterCellId: number;
    targetCellId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightExchangePositionsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightExchangePositionsMessage(param1: ICustomDataInput): void;
}
export = GameActionFightExchangePositionsMessage;
