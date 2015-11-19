/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameActionFightDispellMessage = require('./game-action-fight-dispell-message');
declare class GameActionFightDispellSpellMessage extends GameActionFightDispellMessage {
    static ID: number;
    spellId: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameActionFightDispellSpellMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameActionFightDispellSpellMessage(param1: ICustomDataInput): void;
}
export = GameActionFightDispellSpellMessage;
