/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import GameFightShowFighterMessage = require('./game-fight-show-fighter-message');
declare class GameFightShowFighterRandomStaticPoseMessage extends GameFightShowFighterMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightShowFighterRandomStaticPoseMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightShowFighterRandomStaticPoseMessage(param1: ICustomDataInput): void;
}
export = GameFightShowFighterRandomStaticPoseMessage;
