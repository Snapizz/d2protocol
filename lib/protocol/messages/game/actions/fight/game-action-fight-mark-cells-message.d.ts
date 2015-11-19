/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractGameActionMessage = require('./../abstract-game-action-message');
import GameActionMark = require('../../../../types/game/actions/fight/game-action-mark');
declare class GameActionFightMarkCellsMessage extends AbstractGameActionMessage {
    static ID: number;
    mark: GameActionMark;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightMarkCellsMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightMarkCellsMessage(param1: ICustomDataInput): void;
}
export = GameActionFightMarkCellsMessage;
