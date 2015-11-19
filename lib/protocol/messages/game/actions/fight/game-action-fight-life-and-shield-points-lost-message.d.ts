/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameActionFightLifePointsLostMessage = require('./game-action-fight-life-points-lost-message');
declare class GameActionFightLifeAndShieldPointsLostMessage extends GameActionFightLifePointsLostMessage {
    static ID: number;
    shieldLoss: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightLifeAndShieldPointsLostMessage(param1: ICustomDataInput): void;
}
export = GameActionFightLifeAndShieldPointsLostMessage;
