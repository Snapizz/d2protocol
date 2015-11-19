/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameRolePlayShowActorMessage = require('./game-role-play-show-actor-message');
declare class GameRolePlayShowActorWithEventMessage extends GameRolePlayShowActorMessage {
    static ID: number;
    actorEventId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayShowActorWithEventMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayShowActorWithEventMessage(param1: ICustomDataInput): void;
}
export = GameRolePlayShowActorWithEventMessage;
