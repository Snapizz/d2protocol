/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameActionFightDispellMessage = require('./game-action-fight-dispell-message');
declare class GameActionFightDispellEffectMessage extends GameActionFightDispellMessage {
    static ID: number;
    boostUID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightDispellEffectMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightDispellEffectMessage(param1: ICustomDataInput): void;
}
export = GameActionFightDispellEffectMessage;
