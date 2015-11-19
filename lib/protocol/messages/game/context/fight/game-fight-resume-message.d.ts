/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
import { ICustomDataOutput, ICustomDataInput } from '../../../../custom-data-wrapper';
import GameFightSpectateMessage = require('./game-fight-spectate-message');
import GameFightSpellCooldown = require('../../../../types/game/context/fight/game-fight-spell-cooldown');
declare class GameFightResumeMessage extends GameFightSpectateMessage {
    static ID: number;
    spellCooldowns: GameFightSpellCooldown[];
    summonCount: number;
    bombCount: number;
    constructor();
    getMessageId(): number;
    reset(): void;
    pack(param1: ICustomDataOutput): void;
    unpack(param1: ICustomDataInput, param2: number): void;
    serialize(param1: ICustomDataOutput): void;
    serializeAs_GameFightResumeMessage(param1: ICustomDataOutput): void;
    deserialize(param1: ICustomDataInput): void;
    deserializeAs_GameFightResumeMessage(param1: ICustomDataInput): void;
}
export = GameFightResumeMessage;
