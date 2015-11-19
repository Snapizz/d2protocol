/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractGameActionMessage = require('./../abstract-game-action-message');
import GameFightFighterInformations = require('../../../../types/game/context/fight/game-fight-fighter-informations');
declare class GameActionFightSummonMessage extends AbstractGameActionMessage {
    static ID: number;
    summon: GameFightFighterInformations;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightSummonMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightSummonMessage(param1: ICustomDataInput): void;
}
export = GameActionFightSummonMessage;
