/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractGameActionFightTargetedAbilityMessage = require('./abstract-game-action-fight-targeted-ability-message');
declare class GameActionFightCloseCombatMessage extends AbstractGameActionFightTargetedAbilityMessage {
    static ID: number;
    weaponGenericId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightCloseCombatMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightCloseCombatMessage(param1: ICustomDataInput): void;
}
export = GameActionFightCloseCombatMessage;
