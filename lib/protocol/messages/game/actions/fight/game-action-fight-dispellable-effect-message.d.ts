/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import AbstractGameActionMessage = require('./../abstract-game-action-message');
import AbstractFightDispellableEffect = require('../../../../types/game/actions/fight/abstract-fight-dispellable-effect');
declare class GameActionFightDispellableEffectMessage extends AbstractGameActionMessage {
    static ID: number;
    effect: AbstractFightDispellableEffect;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightDispellableEffectMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightDispellableEffectMessage(param1: ICustomDataInput): void;
}
export = GameActionFightDispellableEffectMessage;
