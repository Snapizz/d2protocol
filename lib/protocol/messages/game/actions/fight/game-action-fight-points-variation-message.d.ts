/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractGameActionMessage = require('./../abstract-game-action-message');
declare class GameActionFightPointsVariationMessage extends AbstractGameActionMessage {
    static ID: number;
    targetId: number;
    delta: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightPointsVariationMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightPointsVariationMessage(param1: ICustomDataInput): void;
}
export = GameActionFightPointsVariationMessage;
