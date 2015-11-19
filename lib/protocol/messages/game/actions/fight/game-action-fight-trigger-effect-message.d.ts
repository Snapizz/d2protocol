/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameActionFightDispellEffectMessage = require('./game-action-fight-dispell-effect-message');
declare class GameActionFightTriggerEffectMessage extends GameActionFightDispellEffectMessage {
    static ID: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightTriggerEffectMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightTriggerEffectMessage(param1: ICustomDataInput): void;
}
export = GameActionFightTriggerEffectMessage;
