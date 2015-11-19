/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../../custom-data-wrapper';
import GameRolePlayDelayedActionMessage = require('./game-role-play-delayed-action-message');
declare class GameRolePlayDelayedObjectUseMessage extends GameRolePlayDelayedActionMessage {
    static ID: number;
    objectGID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameRolePlayDelayedObjectUseMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameRolePlayDelayedObjectUseMessage(param1: ICustomDataInput): void;
}
export = GameRolePlayDelayedObjectUseMessage;
